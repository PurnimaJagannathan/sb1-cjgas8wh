import { JobDescription } from '../types/jobDescription';

export const mockPreviousDescriptions: JobDescription[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    date: '2024-03-15',
    formData: {
      jobTitle: 'Senior Frontend Developer',
      companyName: 'TechCorp Inc.',
      qualifications: 'Minimum 5 years of experience with React and modern JavaScript. Strong understanding of web performance and optimization techniques.',
      keyPriorities: 'Lead frontend architecture decisions, mentor junior developers, implement design system',
      careerGrowth: 'Path to Lead Engineer or Engineering Manager role',
      additionalNotes: 'Remote-friendly position with quarterly on-site meetings'
    }
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'Innovation Labs',
    date: '2024-03-14',
    formData: {
      jobTitle: 'Product Manager',
      companyName: 'Innovation Labs',
      qualifications: '3+ years of product management experience in B2B SaaS products',
      keyPriorities: 'Define product strategy, work with engineering teams, conduct market research',
      careerGrowth: 'Senior PM and Director of Product opportunities',
      additionalNotes: 'Focus on AI/ML products'
    }
  }
];