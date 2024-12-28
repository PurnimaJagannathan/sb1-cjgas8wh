import React from 'react';
import { Clock, ChevronRight } from 'lucide-react';
import { JobDescription } from '../types/jobDescription';
import { mockPreviousDescriptions } from '../data/mockDescriptions';

interface PreviousDescriptionsProps {
  onSelectDescription: (description: JobDescription) => void;
}

export function PreviousDescriptions({ onSelectDescription }: PreviousDescriptionsProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="px-6 py-4 bg-slate-50 border-b border-slate-100">
        <div className="flex items-center">
          <Clock className="w-5 h-5 text-emerald-500 mr-2" />
          <h2 className="text-lg font-semibold text-slate-900">Previously Generated Descriptions</h2>
        </div>
      </div>
      <div className="divide-y divide-slate-100">
        {mockPreviousDescriptions.map((desc) => (
          <button
            key={desc.id}
            onClick={() => onSelectDescription(desc)}
            className="w-full px-6 py-4 hover:bg-slate-50 transition-colors flex items-center justify-between group"
          >
            <div>
              <h3 className="font-medium text-slate-900">{desc.title}</h3>
              <p className="text-sm text-slate-600">{desc.company}</p>
              <p className="text-xs text-slate-500 mt-1">
                Generated on {new Date(desc.date).toLocaleDateString()}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-500 transition-colors" />
          </button>
        ))}
      </div>
    </div>
  );
}