import React from 'react';
import { Hero } from './Hero';
import { Brain, FileText, MessageSquareText } from 'lucide-react';
import { AboutFounder } from './AboutFounder';
import { Testimonials } from './Testimonials';
import { ContactForm } from './ContactForm';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why JobDescript?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <Brain className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Context-Aware AI</h3>
                <p className="text-slate-600">Understands your company's unique needs through meeting notes and discussions</p>
              </div>
              <div className="text-center p-6">
                <FileText className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Custom Output</h3>
                <p className="text-slate-600">Creates tailored JDs that reflect your company culture and requirements</p>
              </div>
              <div className="text-center p-6">
                <MessageSquareText className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Human Touch</h3>
                <p className="text-slate-600">Combines AI power with human expertise in recruitment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutFounder />
      <Testimonials />
      <ContactForm />
    </div>
  );
}