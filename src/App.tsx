import React from 'react';
import { SkillHeatmap } from './components/skill-heatmap';
import { GapAnalysis } from './components/gap-analysis';
import { TeamMember, ProjectRequirement } from './types/types';

const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'Frontend Developer',
    skills: [
      { name: 'React', category: 'Frontend', proficiency: 'expert' },
      { name: 'TypeScript', category: 'Programming', proficiency: 'proficient' },
      { name: 'CSS', category: 'Frontend', proficiency: 'expert' }
    ]
  },
  {
    id: '2',
    name: 'Jane Smith',
    role: 'Backend Developer',
    skills: [
      { name: 'Node.js', category: 'Backend', proficiency: 'expert' },
      { name: 'TypeScript', category: 'Programming', proficiency: 'proficient' },
      { name: 'MongoDB', category: 'Database', proficiency: 'familiar' }
    ]
  },
  {
    id: '3',
    name: 'Alex Johnson',
    role: 'Full Stack Developer',
    skills: [
      { name: 'React', category: 'Frontend', proficiency: 'proficient' },
      { name: 'Node.js', category: 'Backend', proficiency: 'proficient' },
      { name: 'TypeScript', category: 'Programming', proficiency: 'expert' },
      { name: 'MongoDB', category: 'Database', proficiency: 'familiar' }
    ]
  }
];



const mockProjectRequirements: ProjectRequirement[] = [
  {
    id: '1',
    name: 'Frontend Development',
    requiredSkills: [
      { skillName: 'React', minimumProficiency: 'proficient', count: 2 },
      { skillName: 'CSS', minimumProficiency: 'proficient', count: 1 },
      { skillName: 'TypeScript', minimumProficiency: 'familiar', count: 1 }
    ]
  },
  {
    id: '2',
    name: 'Backend Development',
    requiredSkills: [
      { skillName: 'Node.js', minimumProficiency: 'expert', count: 1 },
      { skillName: 'mongODB', minimumProficiency: 'proficient', count: 1 }
    ]
  }
];



function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Skill Map Visualiser</h1>
      </header>
      <main>
        <section className="intro">
          <h2>Team Skill Visualization Tool</h2>
          <p>This tool will help visualize team skills and identify gaps.</p>
        </section>
        
        <section className="visualization">
          <SkillHeatmap teamMembers={mockTeamMembers} />
        </section>
        
        <section className="analysis">
          <GapAnalysis 
            teamMembers={mockTeamMembers} 
            projectRequirements={mockProjectRequirements} 
          />
        </section>
        
        <section className="features">
          <h3>Planned Features:</h3>
          <ul>
            <li>Skill heatmap visualization</li>
            <li>Gap analysis</li>
            <li>Skill trends tracking</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

/*
add skill trends component
data persistence with localStorage or a backend
add filtering options for the heatmap
a form to add/edit team members and skills
export  
responsivemess
dark mode toggle
*/