var express = require('express');
var router = express.Router();

// Require the controller that exports To-do CRUD functions
const skillsCtrl = require('../controllers/skills');

// GET "/skills" - Index Route
router.get('/', skillsCtrl.index);

// GET "/skills:id" - Show Route
router.get('/:id', skillsCtrl.show)


module.exports = router;
