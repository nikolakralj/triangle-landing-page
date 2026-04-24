import React from 'react';
import Section from '@/components/layout/Section';
import { CheckCircle2 } from 'lucide-react';

const Compliance = () => {
  const documents = [
    "Company registration and VAT",
    "Bank details and insurance certificate",
    "Safety policy and HSE manual",
    "Incident reporting procedure",
    "Worker onboarding checklist",
    "Worker document checklist",
    "Sample timesheet and daily report",
    "Crew CV template and role list",
    "Reference project sheet",
    "Anti-corruption statement",
    "GDPR / privacy statement",
    "Subcontractor agreement template",
    "A1 / posting process description",
    "Accommodation and transport process",
    "Rate card and pricing model"
  ];

  return (
    <Section variant="light" id="compliance">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.5fr] gap-12 lg:gap-32 items-start">
        <div className="animate-fade-rise">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Vendor registration, ready on day one.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Most contractors lose weeks onboarding a new labor provider. We ship a complete vendor-registration package the same day you ask for it — because we keep it up to date, all the time.
          </p>
        </div>

        <div className="bg-[#F6F7F9] p-8 md:p-12 rounded-sm border border-black/5 animate-fade-rise">
          <h3 className="font-bold text-sm uppercase tracking-widest mb-10 text-primary">Document Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {documents.map((doc, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#0E1116]">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Compliance;
