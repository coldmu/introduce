export interface TeamMember {
    name: string;
    birthDate: string;  // Format: YYYY-MM-DD
    mbti: string;
    image: string;
    role: string;
    bio: string;
    socials: {
        github: string;
        linkedin: string;
    };
}
