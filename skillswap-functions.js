// Function to display skills dynamically
function displaySkills(skills) {
        const skillGrid = document.getElementById('skill-grid');
        skillGrid.innerHTML='';
        console.log(skillGrid)
        for (const skill of skills) {
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card';
            skillCard.innerHTML = `
                    <h3>${skill.title}</h3>
                    <span class="skill-details">
                        <p class="skill-description">${skill.category}</p>
                        <p class="tutor-name">Tutor: ${skill.tutor}</p>
                        <p class="price">Price: $${skill.price}/hr</p>
                    </span>
                    <button class="button primary-button">Book Now</button>
            `;
            skillGrid.appendChild(skillCard);
        };
};

function calculateTotalCost(hours, rate){
    return ((hours * rate).toFixed(2));
};


//define all skill that will be displayed and filtered.
const skills = [
    {title: "JavaScript", category: "Programming",tutor: "John Doe", price: 20},
    {title: "Python", category: "Programming", tutor: "Jane Smith", price: 25},
    {title: "Web Development", category: "Programming", tutor: "Bob Johnson", price: 0},
    {title: "Guitar Lessons", category: "Music", tutor: "Alice Brown", price: 15},
    {title: "Italian Cooking", category: "Cooking", tutor: "Mario Rossi", price: 30},
    {title: "Yoga Instruction", category: "Fitness", tutor: "Sarah Davis", price: 20}
];
function filterSkillsByCategory(skills, category) {
    if (category === 'All') {
        return skills;
    }
    else{
        return skills.filter(skill => skill.category === category);
    }
};
//module.exports = {filterSkillsByCategory, calculateTotalCost};
//Waits for DOM to load and does initial display and sets event listener to dropdown for category filter

document.addEventListener("DOMContentLoaded", () => {
    displaySkills(skills)
    document.getElementById("skill-filter").addEventListener("change", function() {
        let skill=this.value;
        CategorySkills=filterSkillsByCategory(skills, skill);
        console.log(CategorySkills);
        displaySkills(CategorySkills);
    });
    document.getElementById('hours').addEventListener("change", function(){
        hours=document.getElementById('hours').value;
        rate=document.getElementById('rate').value;
        amount=calculateTotalCost(hours, rate)
        console.log(amount)
        resultBox=document.getElementById('cost-result')
        resultBox.innerHTML = `$${amount}`;
    });
    document.getElementById('rate').addEventListener("change", function(){
        hours=document.getElementById('hours').value;
        rate=document.getElementById('rate').value;
        amount=calculateTotalCost(hours, rate)
        console.log(amount)
        resultBox=document.getElementById('cost-result')
        resultBox.innerHTML = `$${amount}`;
    });
});
