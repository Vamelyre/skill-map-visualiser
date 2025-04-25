import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { Box, Card, Typography } from '@mui/material';
import { SkillTrend } from '../types/types';

interface SkillTrendsProps {
    trends: SkillTrend[];
}

export const SkillTrends = ({ trends }: SkillTrendsProps) => {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!svgRef.current || !trends.length) return;

        const margin = { top: 30, right: 120, bottom: 50, left: 120 };
        const width = 800 - margin.left - margin.right;
        const height = 300;

        d3.select(svgRef.current).selectAll('*').remove();

        const svg = d3.select(svgRef.current)
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const x = d3.scaleLinear()
            .domain([0, 100])
            .range([0, width]);

        const y = d3.scaleBand<string>()
            .domain(trends.map(d => d.skillName))
            .range([0, height])
            .padding(0.3);

        g.append('g')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(x).ticks(5))
            .call(g => g.select('.domain').remove())
            .call(g => g.selectAll('.tick line').attr('stroke-opacity', 0.1));

        g.append('text')
            .attr('x', width / 2)
            .attr('y', height + 40)
            .attr('text-anchor', 'middle')
            .text('Growth Rate (%)');

        g.append('g')
            .call(d3.axisLeft(y))
            .call(g => g.select('.domain').remove())
            .call(g => g.selectAll('.tick line').attr('stroke-opacity', 0.1));

        const bars = g.selectAll('.bar')
            .data(trends)
            .enter()
            .append('g');

        bars.append('rect')
            .attr('class', 'bar')
            .attr('y', d => y(d.skillName) ?? 0)
            .attr('height', y.bandwidth())
            .attr('x', 0)
            .attr('width', d => x(d.growthRate))
            .attr('fill', d => {
                if (d.growthRate >= 70) return '#cc0066';
                if (d.growthRate >= 40) return '#ff69b4';
                return '#ffb6c1';
            })
            .attr('rx', 4);

        bars.append('text')
            .attr('class', 'value-label')
            .attr('x', d => x(d.growthRate) + 5)
            .attr('y', d => (y(d.skillName) ?? 0) + y.bandwidth() / 2)
            .attr('dy', '0.35em')
            .attr('fill', '#666')
            .text(d => `${d.growthRate}%`);

        g.append('g')
            .attr('class', 'grid')
            .call(d3.axisBottom(x)
                .ticks(5)
                .tickSize(height)
                .tickFormat(() => '')
            )
            .call(g => g.select('.domain').remove())
            .call(g => g.selectAll('.tick line')
                .attr('stroke', '#e0e0e0')
                .attr('stroke-dasharray', '2,2')
            );

    }, [trends]);

    return (
        <Card sx={{ 
            p: 2,
            height: '100%',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <Typography variant="h6" gutterBottom>
                Skill Trends
            </Typography>
            <Box sx={{ 
                width: '100%', 
                height: 400,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <svg ref={svgRef} />
            </Box>
            <Typography 
                variant="caption" 
                color="text.secondary" 
                sx={{ 
                    mt: 2, 
                    display: 'block',
                    textAlign: 'center',
                    fontStyle: 'italic'
                }}
            >
                Shows percentage of team members learning or improving in each skill area
            </Typography>
        </Card>
    );
};