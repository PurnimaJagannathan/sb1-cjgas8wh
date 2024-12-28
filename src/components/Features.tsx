import React from 'react';
import { Brain, FileText, MessageSquareText } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

export function Features() {
  const features = [
    {
      Icon: Brain,
      title: 'Context-Aware',
      description: 'Our AI understands your specific needs and company culture'
    },
    {
      Icon: FileText,
      title: 'Customized Output',
      description: 'Get tailored JDs that match your requirements perfectly'
    },
    {
      Icon: MessageSquareText,
      title: 'Expert Review',
      description: 'AI-powered with human expertise in recruitment'
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-12">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
}