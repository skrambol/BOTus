import express from 'express';
import * as controller from './user.controller';

const router = express.Router();

router.get('/', controller.getAll);

export default router;
