import React, { useState } from 'react';
import { FileUpload } from './FileUpload';
import { FormSection } from './FormSection';
import { PageHeader } from './PageHeader';
import { FormField } from './FormField';
import { GeneratedDescription } from './GeneratedDescription';
import { PreviousDescriptions } from './PreviousDescriptions';
import { JobDescription } from '../types/jobDescription';

const initialFormData = {
  jobTitle: '',
  companyName: '',
  qualifications: '',
  keyPriorities: '',
  careerGrowth: '',
  additionalNotes: ''
};

export function JobDescriptionGenerator() {
  const [files, setFiles] = useState<File[]>([]);
  const [formData, setFormData] = useState(initialFormData);
  const [showGenerated, setShowGenerated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowGenerated(true);
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }, 100);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectPreviousDescription = (description: JobDescription) => {
    setFormData(description.formData);
    setShowGenerated(true);
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <PageHeader />
      
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000" 
              alt="Professional workspace with laptop and notebook" 
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Form sections remain the same */}
                <FormSection
                  title="Basic Information"
                  description="Start with the fundamental details about the position"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      label="Job Title"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      required
                    />
                    <FormField
                      label="Company Name"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </FormSection>

                <FormSection
                  title="Role Requirements"
                  description="Define the qualifications and experience needed for success"
                >
                  <FormField
                    label="Essential Qualifications and Work Experience"
                    name="qualifications"
                    value={formData.qualifications}
                    onChange={handleInputChange}
                    type="textarea"
                    required
                  />
                </FormSection>

                <FormSection
                  title="Role Details"
                  description="Outline the key aspects and growth opportunities of the position"
                >
                  <div className="space-y-6">
                    <FormField
                      label="Key Priorities"
                      name="keyPriorities"
                      value={formData.keyPriorities}
                      onChange={handleInputChange}
                      type="textarea"
                      required
                    />
                    <FormField
                      label="Career Growth Opportunities"
                      name="careerGrowth"
                      value={formData.careerGrowth}
                      onChange={handleInputChange}
                      type="textarea"
                      required
                    />
                  </div>
                </FormSection>

                <FormSection
                  title="Additional Information"
                  description="Include any other relevant details or context"
                >
                  <div className="space-y-6">
                    <FormField
                      label="Additional Notes"
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      type="textarea"
                    />
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Upload Files (Meeting Notes, Requirements, etc.)
                      </label>
                      <FileUpload files={files} onFilesChange={setFiles} />
                    </div>
                  </div>
                </FormSection>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-4 rounded-lg font-semibold transition-colors text-lg shadow-sm"
                  >
                    Generate Job Description
                  </button>
                </div>
              </form>
            </div>

            <div className="md:col-span-1">
              <PreviousDescriptions onSelectDescription={handleSelectPreviousDescription} />
            </div>
          </div>

          {showGenerated && (
            <GeneratedDescription jobData={formData} />
          )}
        </div>
      </div>
    </div>
  );
}