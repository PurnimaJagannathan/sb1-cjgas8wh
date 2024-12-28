import React from 'react';
import { FileText } from 'lucide-react';

interface GeneratedDescriptionProps {
  jobData: {
    jobTitle: string;
    companyName: string;
    qualifications: string;
    keyPriorities: string;
    careerGrowth: string;
    additionalNotes: string;
  };
}

export function GeneratedDescription({ jobData }: GeneratedDescriptionProps) {
  // Default content for Director of Software Engineering
  const defaultContent = {
    companyOverview: `Maverick Systems is a pioneering technology company at the forefront of digital transformation. With over a decade of experience delivering innovative solutions to Fortune 500 companies, we've built a reputation for technical excellence and forward-thinking leadership. Our collaborative culture and commitment to innovation have made us a preferred partner for organizations seeking cutting-edge software solutions.`,
    
    jobPurpose: `As the Director of Software Engineering at Maverick Systems, you will lead and inspire multiple engineering teams to deliver high-quality software solutions that drive business value. This role combines technical leadership, strategic thinking, and people management to shape the future of our engineering organization and technical direction.`,
    
    responsibilities: [
      "Drive technical vision and architecture decisions across multiple product lines",
      "Lead and mentor a team of 50+ software engineers across various technology stacks",
      "Establish engineering best practices, coding standards, and quality metrics",
      "Collaborate with Product and Business teams to align technical strategy with business goals",
      "Oversee the entire software development lifecycle and implement process improvements",
      "Drive innovation and technical excellence through research and adoption of new technologies",
      "Manage resource allocation, capacity planning, and engineering budgets",
      "Foster a culture of continuous learning and technical growth"
    ],
    
    keyQualifications: [
      "10+ years of software engineering experience with 5+ years in leadership roles",
      "Strong background in modern software architecture and design patterns",
      "Experience with cloud platforms (AWS/Azure/GCP) and distributed systems",
      "Track record of successfully delivering large-scale software projects",
      "Bachelor's degree in Computer Science or related field (Master's preferred)",
      "Experience with Agile methodologies and modern development practices"
    ],
    
    functionalCompetencies: [
      "Expert knowledge of software architecture and system design",
      "Strong understanding of cloud-native technologies and microservices",
      "Proficiency in multiple programming languages and technology stacks",
      "Experience with CI/CD, DevOps practices, and automation",
      "Strong project management and risk assessment skills",
      "Data-driven decision making and analytical problem-solving"
    ],
    
    behavioralCompetencies: [
      "Strategic thinking and vision setting",
      "Strong leadership and team building capabilities",
      "Excellent communication and stakeholder management",
      "Adaptability and change management",
      "Mentorship and talent development",
      "Innovation and creative problem-solving"
    ],
    
    inclusivity: `At Maverick Systems, we're committed to building a diverse and inclusive workplace where everyone feels valued and empowered to do their best work. We welcome applications from candidates of all backgrounds, experiences, and perspectives. We believe that diverse teams drive innovation and help us better serve our global customer base. We offer equal employment opportunities to all candidates and support flexible working arrangements.`
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden mt-12">
      <div className="bg-emerald-500 px-6 py-4 flex items-center">
        <FileText className="w-6 h-6 text-white mr-3" />
        <h2 className="text-xl font-semibold text-white">Generated Job Description</h2>
      </div>
      
      <div className="p-6 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Director of Software Engineering</h1>
          <p className="text-xl text-emerald-600 font-semibold">Maverick Systems</p>
        </div>

        <section>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Company Overview</h3>
          <p className="text-slate-700 leading-relaxed">{defaultContent.companyOverview}</p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Job Purpose</h3>
          <p className="text-slate-700 leading-relaxed">{defaultContent.jobPurpose}</p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Role Responsibilities</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            {defaultContent.responsibilities.map((item, index) => (
              <li key={index} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Key Qualifications</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            {defaultContent.keyQualifications.map((item, index) => (
              <li key={index} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Functional Competencies</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            {defaultContent.functionalCompetencies.map((item, index) => (
              <li key={index} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Behavioral Competencies</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-700">
            {defaultContent.behavioralCompetencies.map((item, index) => (
              <li key={index} className="leading-relaxed">{item}</li>
            ))}
          </ul>
        </section>

        <section className="bg-slate-50 -mx-6 -mb-6 mt-8 p-6 border-t border-slate-100">
          <h3 className="text-xl font-semibold text-slate-900 mb-3">Inclusivity Statement</h3>
          <p className="text-slate-700 leading-relaxed">{defaultContent.inclusivity}</p>
        </section>
      </div>
    </div>
  );
}