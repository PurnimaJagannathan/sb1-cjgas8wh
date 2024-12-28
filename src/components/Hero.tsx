import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  return (
    <header className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Create the Perfect Customized Job Descriptions</h1>
          <p className="text-xl text-slate-300 mb-8">JobDescript uses context-aware AI to generate highly customized job descriptions that truly reflect your company's needs and culture.</p>
          <button 
            onClick={() => navigate('/generator')}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto"
          >
            Try JobDescript Now <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}