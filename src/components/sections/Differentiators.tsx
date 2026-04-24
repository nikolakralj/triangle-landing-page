import React from 'react';
import Section from '@/components/layout/Section';

const Differentiators = () => {
  const cards = [
    {
      title: "Real technical leadership",
      description: "Our founders come from industrial automation, commissioning and site management, not from recruiting. When your project manager has a technical question, they get a technical answer — not a hand-off to HR."
    },
    {
      title: "Supervised, not rented",
      description: "Every crew ships with its own supervisor. You get a single point of accountability, not a list of names on a timesheet."
    },
    {
      title: "Documentation discipline",
      description: "Daily reports, photo evidence, signed timesheets, punch-list tracking, change-order evidence, claims-support documentation. Everything traceable, everything auditable."
    },
    {
      title: "Cross-border compliance handled",
      description: "A1 certificates, posting notifications, BUAK for Austria, social-security paperwork, contracts, safety briefings — we run the compliance, you don't."
    },
    {
      title: "Multi-sector capability",
      description: "Industrial, rail, data center, HVAC, steel, shutdowns. We don't pretend to be everywhere — but across these six sectors we have first-hand project experience."
    },
    {
      title: "Fast, but not reckless",
      description: "Mobilisation in 10–14 days is our standard. Faster is possible. But we don't put people on a site without documents, safety briefings and a named supervisor — ever."
    }
  ];

  return (
    <Section variant="dark" id="why-triangle">
      <div className="mb-20 animate-fade-rise text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Why contractors pick Triangle over a generic labor broker.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="bg-[#1A2029] p-10 border border-white/5 rounded-sm animate-fade-rise">
            <h3 className="text-xl font-bold mb-6 text-primary">{card.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Differentiators;
