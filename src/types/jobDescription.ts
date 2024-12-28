export interface JobDescription {
  id: string;
  title: string;
  company: string;
  date: string;
  formData: {
    jobTitle: string;
    companyName: string;
    qualifications: string;
    keyPriorities: string;
    careerGrowth: string;
    additionalNotes: string;
  };
}