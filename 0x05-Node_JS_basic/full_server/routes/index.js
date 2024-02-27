/**
 * Write the routes
 */
import { Router } from 'express';
import AppController from '../controllers/AppController';
import studentController from '../controllers/StudentsController';

const router = Router();

router.get('/', AppController.getHomepage);
router.get('/students', studentController.getAllStudents);
router.get('/students/:major', studentController.getAllStudentsByMajor);

export default router;
