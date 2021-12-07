const skills = [
    {id: 111, skill: 'HTML', learned: true},
    {id: 112, skill: 'CSS ', learned: true},
    {id: 113, skill: 'Javascript', learned: true},
    {id: 114, skill: 'Python', learned: false},
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

function updateOne(id) {
    

}