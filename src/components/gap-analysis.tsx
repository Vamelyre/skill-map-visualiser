import React, { useMemo } from 'react';

import { TeamMember, ProjectRequirement, SkillGap, ProficiencyLevel } from '../types/types';

interface GapAnalysisProps {
  teamMembers: TeamMember[];
  projectRequirements: ProjectRequirement[];
}

const isProficiencyAtLeast = (current: ProficiencyLevel, required: ProficiencyLevel): boolean => {
  const levels: ProficiencyLevel[] = ['none', 'familiar', 'proficient', 'expert'];
  return levels.indexOf(current) >= levels.indexOf(required);
};

export const GapAnalysis: React.FC<GapAnalysisProps> = ({ teamMembers, projectRequirements }) => {


    const skillGaps: SkillGap[] = useMemo(() => {
    return projectRequirements.flatMap(project => 
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
  }, [teamMembers, projectRequirements]);

  return (
    <div className="gap-analysis">
      <h2>Skill Gap Analysis</h2>
      <p>Analysis of skill gaps between project requirements and team capabilities.</p>
      
      {skillGaps.length === 0 ? (
        <p>No skill gaps identified.</p>
      ) : (
        <div className="gaps-list">
          {skillGaps.map((gap, index) => (
            <div 
              key={index} 
              className={`gap-item ${gap.criticalGap ? 'critical' : ''}`}
            >
              <h3>{gap.skillName}</h3>
              <div className="gap-details">
                <p>Required: {gap.required}</p>
                <p>Available: {gap.available}</p>
                {gap.criticalGap && (
                  <p className="critical-warning">Critical gap!</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


