import React from 'react';
import Section from '@/components/layout/Section';

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Scoping call",
      description: "You send your request through the form or email. Within one working day we set up a 30-minute scoping call — crew size, scope, duration, location, certifications needed, language requirement, start date."
    },
    {
      number: "02",
      title: "Commercial offer",
      description: "Inside 48 hours you receive a written offer with crew composition, bill rate, mobilisation plan, documents we will produce, and our standard terms for timesheets, reporting and payment. Nothing hidden."
    },
    {
      number: "03",
      title: "Vendor registration & mobilisation",
      description: "We submit our vendor-registration package (company registration, VAT, insurance, safety policy, HSE manual, GDPR statement, anti-corruption statement, subcontractor agreement, posting/A1 documentation). Workers are onboarded, documents are verified, travel and accommodation are coordinated."
    },
    {
      number: "04",
      title: "On-site delivery",
      description: "Crew arrives on the agreed date with the agreed supervisor. Daily site reports, signed timesheets and photo evidence from day one. One named point of contact for your project manager. Replacements handled by us, not by you."
    }
  ];

  return (
    <Section variant="paper" id="process">
      <div className="mb-20 animate-fade-rise">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          From first request to crew on site — four steps, no surprises.
        </h2>
      </div>

      <div className="relative">
        {/* Connection Line (Desktop) */}
        <div className="hidden lg:block absolute top-10 left-0 w-full h-[1px] bg-black/10 z-0" />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col animate-fade-rise">
              <div className="w-20 h-20 bg-white border border-black/5 flex items-center justify-center mb-8 relative">
                <span className="text-3xl font-bold text-primary">{step.number}</span>
                {/* Dot for connection (Desktop) */}
                <div className="hidden lg:block absolute -top-[11px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Process;
