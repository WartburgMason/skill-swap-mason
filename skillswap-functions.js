const skills = [
    {title: "JavaScript", category: "Programming", price: 20},
    {title: "Python", category: "Programming", price: 25},
    {title: "Web Development", category: "Programming", price: 0},
    {title: "Guitar Lessons", category: "Music", price: 15},
    {title: "Italian Cooking", category: "Cooking", price: 30},
    {title: "Yoga Instruction", category: "Fitness", price: 20}
];
function filterSkillsByCategory(category) {
    if (category === 'All') {
        return skills;
    }
    else{
        return skills.filter(skill => skill.category === category);
    }
};

module.exports = { filterSkillsByCategory };