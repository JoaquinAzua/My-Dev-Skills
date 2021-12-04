const skills = [
    {id: 001, skill: 'HTML', learned: true},
    {id: 002, skill: 'CSS ', learned: true},
    {id: 003, skill: 'Javascript', learned: true},
    {id: 004, skill: 'Python', learned: false},
];

module.exports = {
    getAll,
    getOne,
};

function getAll() {
    return skills;
}
function getOne(id) {
    return skills.find(skill => skill.id == id);
}