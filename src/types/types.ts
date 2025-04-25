export type ProficiencyLevel = 'expert' | 'proficient' | 'familiar' | 'none';

export interface Skill {
    name: string;
    category: string;
    proficiency: ProficiencyLevel;
    lastUsed?: Date;  // ? means optional
}
export interface TeamMember {
    id: string;
    name: string;
    role: string;
    skills: Skill[];
    githubUsername?: string;  //get data from github wheenver
    linkedinUrl?: string;     // same here
}

export interface SkillGap {
    skillName: string;
    required: number;  // how many people we need with this skill
    available: number; // how many we have
    criticalGap: boolean;  //a problem?
}

export interface SkillTrend {
    skillName: string;
    growthRate: number; // percentage of team members learning
    timeFrame: string;  // like last few months 
}

export interface ProjectRequirement {
    id: string;
    name: string;
    requiredSkills: {
        skillName: string;
        minimumProficiency: ProficiencyLevel;
        count: number; 
    }[];
} 