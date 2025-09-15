# Docker + Node.js: A Production-Ready Guide 🚀

Creating an efficient Docker container for your Node.js application doesn't have to be complicated. In this guide, we'll walk through building a production-ready Dockerfile using best practices that will keep your images small, secure, and fast.

## Why These Practices Matter

Before diving into the code, let's understand why we follow these patterns:
- **Smaller images** = faster deployments and reduced storage costs
- **Security** = using non-root users and minimal base images
- **Caching** = leveraging Docker's layer caching for faster builds
- **Performance** = optimized for production workloads

## The Minimal Dockerfile

Here's a production-ready Dockerfile that follows all the best practices:

```dockerfile
# Use the official Node.js Alpine image (smallest size)
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production && npm cache clean --force

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Copy application code
COPY . .

# Change ownership to non-root user
RUN chown -R nextjs:nodejs /app
USER nextjs

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node healthcheck.js

# Start the application
CMD ["node", "index.js"]
```

## Multi-Stage Build (For Even Smaller Images)

When you need build tools but want to keep your final image minimal:

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS production
WORKDIR /app

# Copy package files and install production dependencies only
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Copy built application from builder stage
COPY --from=builder --chown=nextjs:nodejs /app/dist ./dist
COPY --chown=nextjs:nodejs . .

USER nextjs
EXPOSE 3000

CMD ["node", "dist/index.js"]
```

## Essential Best Practices

### 1. Use Alpine Images
Alpine Linux images are significantly smaller than standard images:
```dockerfile
FROM node:18-alpine  # ~170MB
# vs
FROM node:18         # ~900MB+
```

### 2. Optimize Layer Caching
Copy `package.json` first to leverage Docker's layer caching:
```dockerfile
# ✅ Good - package.json changes less frequently
COPY package*.json ./
RUN npm ci --only=production

# Copy app code after dependencies
COPY . .
```

### 3. Use npm ci Instead of npm install
`npm ci` is faster and more reliable for production:
```dockerfile
# ✅ Use this
RUN npm ci --only=production && npm cache clean --force

# ❌ Not this
RUN npm install
```

### 4. Run as Non-Root User
Never run containers as root in production:
```dockerfile
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001
USER nextjs
```

### 5. Add Health Checks
Include a simple health check for container orchestration:
```dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node healthcheck.js
```

## .dockerignore File

Don't forget to create a `.dockerignore` file to exclude unnecessary files:

```gitignore
node_modules
npm-debug.log
Dockerfile
.dockerignore
.git
.gitignore
README.md
.env
coverage
nyc_output
```

## Simple Health Check Script

Create `healthcheck.js` in your project root:

```javascript
const http = require('http');

const options = {
  host: 'localhost',
  port: process.env.PORT || 3000,
  timeout: 2000,
  path: '/health'
};

const request = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  process.exitCode = res.statusCode === 200 ? 0 : 1;
  process.exit();
});

request.on('error', (err) => {
  console.log('ERROR');
  process.exit(1);
});

request.end();
```

## Building and Running

Build your image:
```bash
docker build -t my-node-app .
```

Run your container:
```bash
docker run -p 3000:3000 my-node-app
```

## Quick Wins Summary

1. **Use Alpine images** for 80% smaller size
2. **Copy package.json first** for better caching  
3. **Use `npm ci`** for faster, more reliable installs
4. **Run as non-root user** for security
5. **Add health checks** for better orchestration
6. **Use .dockerignore** to exclude unnecessary files
7. **Multi-stage builds** for even smaller production images

## Real-World Example Structure

Your project should look like this:
```
my-app/
├── Dockerfile
├── .dockerignore  
├── package.json
├── healthcheck.js
├── index.js
└── src/
    └── ...
```

Following these practices will give you Docker images that are secure, efficient, and production-ready. Your deployment pipeline will thank you with faster builds and smaller storage costs!

## Pro Tips

- Pin your Node.js version (e.g., `node:18.17-alpine`) for reproducible builds
- Use `--no-cache` flag when building if you suspect caching issues
- Consider using `distroless` images for even better security in production
- Monitor your image sizes with `docker images` and aim to keep them under 200MB
