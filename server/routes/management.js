import express from 'express'
import { getAdmins,getUserPerformance } from '../controllers/management.js';
const router = express.Router();

router.get("/admin",getAdmins);
router.get("/performance/:id",getUserPerformance);
export default router;