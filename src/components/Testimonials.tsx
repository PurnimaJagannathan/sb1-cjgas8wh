import React from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Head of Talent, TechCorp",
      content: "JobDescript has transformed our hiring process. The AI-generated descriptions are spot-on and have improved our candidate quality significantly.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "HR Director, Innovation Labs",
      content: "The level of customization and attention to company culture is impressive. It's like having an expert recruiter in your pocket.",
      rating: 5
    },
    {
      name: "Emily Thompson",
      role: "Recruiting Manager, StartupX",
      content: "We've seen a 40% increase in qualified applications since using JobDescript. The AI's understanding of technical roles is exceptional.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}