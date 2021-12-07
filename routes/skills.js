var express = require('express');
var router = express.Router();

// Require the controller that exports To-do CRUD functions
const skillsCtrl = require('../controllers/skills');

// GET "/skills" - Index Route
router.get('/', skillsCtrl.index);

// GET "/skills/new" - New Route
router.get('/new', skillsCtrl.new);

// GET "/skills:id" - Show Route
router.get('/:id', skillsCtrl.show);

// POST "/skills" - Create Route
router.post('/', skillsCtrl.create);

// Delete "/skills:id" - Delete Route
router.delete('/:id', skillsCtrl.delete);

// Put "/skills:id" - Update Route
router.put('/:id', skillsCtrl.update);

module.exports = router;
