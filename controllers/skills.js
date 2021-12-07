// We need to require the Todo model
const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    update: updateSkill,
};



function index(req, res) {
    let skills = Skill.getAll();
    res.render('skills/index', {skills});
}

function show(req, res) {
    let skill = Skill.getOne(req.params.id);
    res.render('skills/show', {skill})
}

function newSkill(req, res) {
    res.render('skills/new');
}

function create(req, res) {
    console.log(req.body);
    strArray = req.body.skill.split('');
    strArray[0] = strArray[0].toUpperCase();
    req.body.skill = strArray.join('');
    // Interact with the model to add skill to list
    Skill.create(req.body);
    // After creating data, respond with a redirect
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    // Using id from req.params, delete the skill
    Skill.deleteOne(req.params.id);
    // After deleting data respond with a redirect
    res.redirect('/skills');
}

function updateSkill(req, res) {

    
    // After updating data respond with a redirect 
    //res.redirect('/skills/edit');
}