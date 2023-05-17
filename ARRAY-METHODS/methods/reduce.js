const { students } = require("../modules/data");

const totalAges = students.reduce((total, student) => total + student.age, 0);

totalAges;

const developers = [
  {
    id: 1,
    name: "John",
    skills: ["HTML", "React", "JavaScript", "Java"],
  },
  {
    id: 2,
    name: "Jane",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
  {
    id: 3,
    name: "Jack",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS"],
  },
];
const skillsDev = developers.reduce((allSkills, devSkill) => {
  return Array.from(new Set([...allSkills, ...devSkill.skills]));
}, []);
console.log(skillsDev);
