import React from 'react';
import Section from '@/components/layout/Section';
import { AlertCircle, Clock, FileText } from 'lucide-react';

const PainPoints = () => {
  const points = [
    {
      icon: <Clock className="w-10 h-10 text-primary" />,
      title: "1. You don't have enough electricians on site.",
      description: "Peak installation phase hits and your own workforce can't absorb it. Every week of delay eats into your margin."
    },
    {
      icon: <AlertCircle className="w-10 h-10 text-primary" />,
      title: "2. The crew you brought in isn't supervised.",
      description: "Unsupervised subcontracted labor creates rework, safety incidents, missing documentation and awkward conversations with the client."
    },
    {
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: "3. Cross-border paperwork is a nightmare.",
      description: "A1 certificates, posting notifications, BUAK in Austria, working-time records, safety briefings — one missed document stops the whole crew at the gate."
    }
  ];

  return (
    <Section variant="light" id="pain-points">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 animate-fade-rise">
          If your electrical package is slipping, it's usually one of these three problems.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        {points.map((point, index) => (
          <div key={index} className="flex flex-col items-start gap-6 animate-fade-rise">
            <div className="p-4 bg-[#F6F7F9] rounded-sm">
              {point.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center animate-fade-rise">
        <p className="text-2xl md:text-3xl font-bold italic text-[#0E1116]">
          We solve all three.
        </p>
      </div>
    </Section>
  );
};

export default PainPoints;
