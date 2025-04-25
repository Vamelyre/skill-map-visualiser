import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { SkillHeatmap } from './components/skill-heatmap';
import { GapAnalysis } from './components/gap-analysis';
import { SkillTrends } from './components/skill-trends';
import { ThemeToggle } from './components/dark-mode-toggle';
import { teamMembers, projectRequirements, skillTrends } from './data/sample';
import { SkillGap, ProficiencyLevel } from './types/types';

//compare proficiency levels
const isProficiencyAtLeast = (current: ProficiencyLevel, required: ProficiencyLevel): boolean => {
  const levels: ProficiencyLevel[] = ['none', 'familiar', 'proficient', 'expert'];
  return levels.indexOf(current) >= levels.indexOf(required);
};

function App() {

  const skillGaps: SkillGap[] = projectRequirements.flatMap(project => 
    project.requiredSkills.map(requirement => {
      const availableCount = teamMembers.filter(member => 
        member.skills.some(skill => 
          skill.name === requirement.skillName && 
          isProficiencyAtLeast(skill.proficiency, requirement.minimumProficiency)
        )
      ).length;

      return {
        skillName: requirement.skillName,
        required: requirement.count,
        available: availableCount,
        criticalGap: availableCount < requirement.count
      };
    })
  );

  return (
    <>
      <ThemeToggle />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dev Team Skill Map Visualizer
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <SkillHeatmap teamMembers={teamMembers} />
        </Box>


        <Box sx={{ mb: 4 }}>
          <SkillTrends trends={skillTrends} />
        </Box>
      </Container>
    </>
  );
}

export default App; 