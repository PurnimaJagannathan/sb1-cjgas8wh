import React from 'react';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

export function AboutFounder() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80&w=1000"
                alt="Saba, Founder of JobDescript"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet Saba, Our Founder</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Briefcase className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">15+ Years in Tech Recruitment</h3>
                    <p className="text-slate-600">Led hiring for Fortune 500 companies and startups</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">AI & HR Expert</h3>
                    <p className="text-slate-600">Masters in HR Analytics with focus on AI applications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Industry Recognition</h3>
                    <p className="text-slate-600">Featured in Forbes and HR Tech Weekly for innovative recruitment solutions</p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-slate-700 leading-relaxed">
                "I created JobDescript to combine my years of recruitment expertise with cutting-edge AI technology. Our tool is trained on thousands of successful job placements, ensuring descriptions that truly resonate with top talent."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}