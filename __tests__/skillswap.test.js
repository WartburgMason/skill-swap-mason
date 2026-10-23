const { filterSkillsByCategory } = require('../skillswap-functions.js');
const skills= [
    {title: "JavaScript", category: "Programming",tutor: "John Doe", price: 20},
    {title: "Python", category: "Programming", tutor: "Jane Smith", price: 25},
    {title: "Web Development", category: "Programming", tutor: "Bob Johnson", price: 0},
    {title: "Guitar Lessons", category: "Music", tutor: "Alice Brown", price: 15},
    {title: "Italian Cooking", category: "Cooking", tutor: "Mario Rossi", price: 30},
    {title: "Yoga Instruction", category: "Fitness", tutor: "Sarah Davis", price: 20}
]
describe('Category filters', () => {
    test('filters skills by category', () => {
        const result = filterSkillsByCategory(skills,'Programming');
        expect(result).toEqual([
            { title: "JavaScript", category: "Programming", price: 20 },
            { title: "Python", category: "Programming", price: 25 },
            { title: "Web Development", category: "Programming", price: 0 }
        ]);
    });
    test('returns all skills when category is "All"', () => {
        const result = filterSkillsByCategory('All');
        expect(result).toEqual([
            { title: "JavaScript", category: "Programming", price: 20 },
            { title: "Python", category: "Programming", price: 25 },
            { title: "Web Development", category: "Programming", price: 0 },
            { title: "Guitar Lessons", category: "Music", price: 15 },
            { title: "Italian Cooking", category: "Cooking", price: 30 },
            { title: "Yoga Instruction", category: "Fitness", price: 20 }
        ]);
    });
    test('returns an empty array when no skills match the category', () => {
        const result = filterSkillsByCategory('Art');
        expect(result).toEqual([]);
    });
});


