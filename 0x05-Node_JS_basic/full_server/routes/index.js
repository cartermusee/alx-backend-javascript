/**
 * Write the routes
 */
import AppController from '../controllers/AppController';
import studentController from '../controllers/StudentsController';

const express = require('express');
const router = express.Router();

router.get('/', AppController.getHomepage);
router.get('/students', studentController.getAllStudents);
router.get('/students/:major', studentController.getAllStudentsByMajor);

export default router;