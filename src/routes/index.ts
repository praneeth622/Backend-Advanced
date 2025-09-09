import { Router, Request, Response } from 'express';

const router = Router();

// Example API routes
router.get('/users', (req: Request, res: Response) => {
  res.json({
    message: 'Users endpoint',
    users: [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ],
    timestamp: new Date().toISOString()
  });
});

router.get('/status', (req: Request, res: Response) => {
  res.json({
    service: 'Backend with DevOps',
    status: 'operational',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

export default router;