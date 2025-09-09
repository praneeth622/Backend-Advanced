import app from './app';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`⚡️ Server is running at http://localhost:${port}`);
  console.log(`🚀 Express.js with TypeScript is ready!`);
});