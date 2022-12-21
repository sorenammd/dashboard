import express from 'express'
import { getAdmins } from '../controllers/management.js';
const router = express.Router();

router.get("/admin",getAdmins);
export default router;