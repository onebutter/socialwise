import express from 'express';
import { userRouter } from './controllers/user';
import { authRouter } from './controllers/auth';

const router = express.Router();

router.use('/users', userRouter);
router.use('/auth', authRouter);

export default router;
