const skills = [
    {id: 101, skill: 'HTML', learned: true},
    {id: 102, skill: 'CSS ', learned: true},
    {id: 103, skill: 'Javascript', learned: true},
    {id: 104, skill: 'Python', learned: false},
];

module.exports = {
    getAll,
    getOne,
    create, 
    deleteOne,
    updateOne,
};

function getAll() {
    return skills;
}
function getOne(id) {
    return skills.find(skill => skill.id == id);
}

function create(skillObj) {
    // add the id
    skillObj.id = Math.floor(Math.random() * 1000);
    skillObj.learned = false;
    skills.push(skillObj);
}

function deleteOne(id) {
    const skillIdx = skills.findIndex(skill => skill.id == id);
    skills.splice(skillIdx, 1);
}

function updateOne(id, newSkill) {
    const skillIdx = skills.findIndex(skill => skill.id == id);
    skills[skillIdx].skill = newSkill;
}