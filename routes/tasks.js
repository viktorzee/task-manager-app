const express = require('express');
const
    { getAllTasks,
    createTasks,
    UpdateTasks,
    getTask,
    deleteTasks} = require('../controllers/tasks.ctrl');
const router = express.Router();

router.route('/').get(getAllTasks).post(createTasks)
router.route('/:id').get(getTask).patch(UpdateTasks).delete(deleteTasks)


module.exports = router