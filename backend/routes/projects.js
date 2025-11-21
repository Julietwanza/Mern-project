const express = require('express');
const router = express.Router();
const controller = require('../controllers/projectController');


router.get('/', controller.listProjects);
router.post('/', controller.createProject);
router.get('/:id', controller.getProject);
router.put('/:id', controller.updateProject);
router.delete('/:id', controller.deleteProject);


module.exports = router;
