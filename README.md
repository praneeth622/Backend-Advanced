# Backend-with-devops

A backend API built with Express.js and TypeScript.

## Features

- 🚀 Express.js server with TypeScript
- 📝 Type-safe development with full TypeScript support
- 🔄 Hot reload development with nodemon
- 🏗️ Build system with TypeScript compiler
- 📁 Clean project structure with source maps and declarations

## Quick Start

### Installation

```bash
npm install
```

### Development

Start the development server with hot reload:

```bash
npm run dev
```

### Production

Build and start the production server:

```bash
npm run build
npm start
```

## API Endpoints

- `GET /` - Welcome message with API information
- `GET /health` - Health check endpoint

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm test` - Run tests (placeholder)

## Project Structure

```
src/
  └── index.ts          # Main Express server file
dist/                   # Built JavaScript files (generated)
node_modules/           # Dependencies
tsconfig.json          # TypeScript configuration
package.json           # Project dependencies and scripts
.gitignore            # Git ignore rules
```