import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { TeamMember, ProficiencyLevel } from '../types/types';

interface SkillHeatmapProps {
  teamMembers: TeamMember[];
}

const proficiencyColors: Record<ProficiencyLevel, string> = {
  expert: '#2ecc71',
  proficient: '#3498db',
  familiar: '#f1c40f',
  none: '#ecf0f1'
};

export const SkillHeatmap: React.FC<SkillHeatmapProps> = ({ teamMembers }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!teamMembers.length || !svgRef.current) return;

    d3.select(svgRef.current).selectAll('*').remove();

    const allSkills = Array.from(
      new Set(
        teamMembers.flatMap(member => 
          member.skills.map(skill => skill.name)
        )
      )
    ).sort();

    const margin = { top: 50, right: 50, bottom: 100, left: 150 };
    const width = Math.max(allSkills.length * 40, 800);
    const height = teamMembers.length * 40 + margin.top + margin.bottom;

    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height);

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand<string>()
      .domain(allSkills)
      .range([0, width])
      .padding(0.05);

    const y = d3.scaleBand<string>()
      .domain(teamMembers.map(d => d.name))
      .range([0, height - margin.top - margin.bottom])
      .padding(0.05);

    g.append('g')
      .attr('transform', `translate(0,${height - margin.top - margin.bottom})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'rotate(-45)')
      .style('text-anchor', 'end');

    g.append('g')
      .call(d3.axisLeft(y));

    teamMembers.forEach(member => {
      allSkills.forEach(skillName => {
        const skill = member.skills.find(s => s.name === skillName);
        const proficiency = skill?.proficiency || 'none';
        
        const xPos = x(skillName);
        const yPos = y(member.name);
        
        if (xPos !== undefined && yPos !== undefined) {
          g.append('rect')
            .attr('x', xPos)
            .attr('y', yPos)
            .attr('width', x.bandwidth())
            .attr('height', y.bandwidth())
            .attr('fill', proficiencyColors[proficiency])
            .attr('stroke', '#fff')
            .attr('stroke-width', 1)
            .append('title')
            .text(`${member.name} - ${skillName}: ${proficiency}`);
        }
      });
    });

    const legend = svg.append('g')
      .attr('transform', `translate(${width + margin.left + 10}, ${margin.top})`);

    Object.entries(proficiencyColors).forEach(([level, color], i) => {
      legend.append('rect')
        .attr('x', 0)
        .attr('y', i * 20)
        .attr('width',15)
        .attr('height',15)
        .attr('fill', color)
        .attr('rx', 3);

      legend.append('text')
        .attr('x', 20)
        .attr('y', i * 20 + 12)
        .text(level.charAt(0).toUpperCase() + level.slice(1))
        .style('font-size', '12px');
    });

  }, [teamMembers]);

  return (
    <div className="skill-heatmap">
      <h2>Skill Heatmap</h2>
      <p>Visualization of team members' skills and proficiency levels.</p>
      <div className="heatmap-container">
        <svg ref={svgRef}></svg>
      </div>
    </div>
  );
};

/* filter heatmap by skill category
zoom for large datasets
sort skills
export heatmap data
tooltips with more detailed information
highlight specific skillS and compare (to check improvement )*/