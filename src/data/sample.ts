import { TeamMember, ProjectRequirement, SkillTrend } from '../types/types';

//chatgpt to generate the data
export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "adgb gds",
    role: "Frontend Developer",
    skills: [
      { name: "React", category: "Frontend", proficiency: "expert" },
      { name: "TypeScript", category: "Programming", proficiency: "proficient" },
      { name: "CSS", category: "Frontend", proficiency: "expert" },
      { name: "D3.js", category: "Data Visualization", proficiency: "familiar" },
      { name: "Node.js", category: "Backend", proficiency: "familiar" }
    ]
  },
  {
    id: "2",
    name: "plkjhgfdvbn",
    role: "Backend Developer",
    skills: [
      { name: "Node.js", category: "Backend", proficiency: "expert" },
      { name: "TypeScript", category: "Programming", proficiency: "proficient" },
      { name: "MongoDB", category: "Database", proficiency: "expert" },
      { name: "React", category: "Frontend", proficiency: "familiar" },
      { name: "Docker", category: "DevOps", proficiency: "proficient" }
    ]
  },
  {
    id: "3",
    name: "sdfghjkl",
    role: "Full Stack Developer",
    skills: [
      { name: "React", category: "Frontend", proficiency: "proficient" },
      { name: "Node.js", category: "Backend", proficiency: "proficient" },
      { name: "TypeScript", category: "Programming", proficiency: "expert" },
      { name: "MongoDB", category: "Database", proficiency: "proficient" },
      { name: "D3.js", category: "Data Visualization", proficiency: "none" }
    ]
  },
  {
    id: "4",
    name: "bob bobby",
    role: "UI/UX Designer",
    skills: [
      { name: "Figma", category: "Design", proficiency: "expert" },
      { name: "CSS", category: "Frontend", proficiency: "expert" },
      { name: "React", category: "Frontend", proficiency: "familiar" },
      { name: "TypeScript", category: "Programming", proficiency: "none" },
      { name: "D3.js", category: "Data Visualization", proficiency: "none" }
    ]
  },
  {
    id: "5",
    name: "hiii jhg",
    role: "DevOps Engineer",
    skills: [
      { name: "Docker", category: "DevOps", proficiency: "expert" },
      { name: "Kubernetes", category: "DevOps", proficiency: "expert" },
      { name: "Node.js", category: "Backend", proficiency: "proficient" },
      { name: "React", category: "Frontend", proficiency: "none" },
      { name: "TypeScript", category: "Programming", proficiency: "familiar" }
    ]
  }
];

export const projectRequirements: ProjectRequirement[] = [
  {
    id: "p1",
    name: "E-commerce Platform",
    requiredSkills: [
      { skillName: "React", minimumProficiency: "expert", count: 2 },
      { skillName: "Node.js", minimumProficiency: "proficient", count: 1 },
      { skillName: "MongoDB", minimumProficiency: "proficient", count: 1 },
      { skillName: "TypeScript", minimumProficiency: "proficient", count: 2 }
    ]
  },
  {
    id: "p2",
    name: "Data Visualization Dashboard",
    requiredSkills: [
      { skillName: "React", minimumProficiency: "proficient", count: 1 },
      { skillName: "D3.js", minimumProficiency: "expert", count: 1 },
      { skillName: "TypeScript", minimumProficiency: "proficient", count: 1 }
    ]
  },
  {
    id: "p3",
    name: "Mobile App",
    requiredSkills: [
      { skillName: "React", minimumProficiency: "expert", count: 2 },
      { skillName: "TypeScript", minimumProficiency: "proficient", count: 1 },
      { skillName: "CSS", minimumProficiency: "proficient", count: 1 }
    ]
  }
];

export const skillTrends: SkillTrend[] = [
  {
    skillName: "React",
    growthRate: 25,
    timeFrame: "last 6 months"
  },
  {
    skillName: "TypeScript",
    growthRate: 20,
    timeFrame: "last 6 months"
  },
  {
    skillName: "D3.js",
    growthRate: 10,
    timeFrame: "last 6 months"
  },
  {
    skillName: "Node.js",
    growthRate: 15,
    timeFrame: "last 6 months"
  },
  {
    skillName: "MongoDB",
    growthRate: 10,
    timeFrame: "last 6 months"
  }
]; 