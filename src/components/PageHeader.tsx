import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PageHeader() {
  return (
    <div className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Job Description Generator</h1>
          <p className="text-lg text-slate-300">
            Create a customized job description that perfectly captures your requirements and company culture
          </p>
        </div>
      </div>
    </div>
  );
}