import { Router } from 'express';
const router = Router();

import {postTasks, getTask, getOneTask, deleteTask, updateTask, getTaskByProject} from '../controllers/tasks.controller';

// /api/tasks/
router.post('/', postTasks);
router.get('/', getTask);

// /api/tasks/:id
router.get('/:id', getOneTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);

// /api/tasks/project/projectId
router.get('/project/:project_id', getTaskByProject)

export default router;