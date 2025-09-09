# Backend with DevOps

A modern Express.js backend application with TypeScript support, built with best practices for development and production deployment.

## 🚀 Features

- **Express.js 5** - Fast, unopinionated web framework
- **TypeScript** - Type-safe development
- **Hot Reload** - Development server with automatic restart
- **CORS Support** - Cross-origin resource sharing configured
- **Environment Variables** - Secure configuration management
- **Health Check** - Built-in health monitoring endpoint
- **Error Handling** - Comprehensive error handling middleware
- **Production Ready** - Optimized build process

## 📦 Prerequisites

- Node.js >= 14.0.0
- npm >= 6.0.0

## 🛠 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Backend-with-devops
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

## 🏃‍♂️ Running the Application

### Development Mode
Start the development server with hot reload:
```bash
npm run dev
```

### Production Mode
Build and start the production server:
```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app.ts          # Express application setup
├── server.ts       # Server entry point
├── routes/         # API route handlers
├── middleware/     # Custom middleware
└── controllers/    # Business logic controllers

dist/               # Compiled JavaScript output
node_modules/       # Dependencies
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run clean` - Remove build artifacts

## 🌐 API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check endpoint
- `GET /api` - API information

## 🔒 Environment Variables

Create a `.env` file based on `.env.example`:

```env
PORT=3000
NODE_ENV=development
```

## 🧪 Testing

The application includes basic endpoint testing. Access:

- **Root**: http://localhost:3000/
- **Health Check**: http://localhost:3000/health
- **API Info**: http://localhost:3000/api

## 🚀 Deployment

1. Build the application:
```bash
npm run build
```

2. Set environment variables for production
3. Start the server:
```bash
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

ISC License