import { Card, List, ListItem, ListItemText, Typography } from '@mui/material';
import { SkillGap } from '../types/types';

interface GapAnalysisProps {
    skillGaps: SkillGap[];
}

export const GapAnalysis = ({ skillGaps }: GapAnalysisProps) => {
    return (
        <Card sx={{ 
            p: 2,
            height: '100%',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <Typography variant="h6" gutterBottom>
                Skill Gaps Analysis
            </Typography>
            <List>
                {skillGaps.map((gap, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primary={gap.skillName}
                            secondary={`Required: ${gap.required} | Available: ${gap.available}`}
                            sx={{
                                '& .MuiListItemText-primary': {
                                    fontWeight: gap.criticalGap ? 600 : 400,
                                },
                                '& .MuiListItemText-secondary': {
                                    color: gap.criticalGap ? 'error.main' : 'text.secondary',
                                },
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Card>
    );
}; 