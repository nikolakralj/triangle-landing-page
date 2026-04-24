import React from 'react';
import Section from '@/components/layout/Section';
import { Quote } from 'lucide-react';

const Proof = () => {
  const stats = [
    { label: "typical peak crew size deployed for a single customer", value: "20+" },
    { label: "standard mobilisation window, documents in order", value: "10–14 days" },
    { label: "active deployment region across AT, DE and CEE", value: "6 countries" },
    { label: "signed daily timesheets and weekly reporting, every project", value: "100%" }
  ];

  return (
    <Section variant="dark" id="proof">
      <div className="mb-20 animate-fade-rise text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          What disciplined delivery looks like.
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center animate-fade-rise">
            <span className="text-5xl md:text-7xl font-bold text-primary mb-4 tabular-nums">
              {stat.value}
            </span>
            <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-widest max-w-[180px] leading-relaxed">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto animate-fade-rise">
        <div className="bg-[#1A2029] p-10 md:p-16 relative rounded-sm border border-white/5">
          <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
          <blockquote className="relative">
            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 italic">
              "A recent deployment required a 20-person electrical team in Central Europe for a vehicle-electrical retrofit program. We mobilised, supervised and ran the full documentation cycle — IDs, certificates, A1 and posting notifications, daily reports, photo evidence and weekly timesheets — for the full duration of the peak phase. Crew was on site on the agreed date, and the client had one point of contact from day one."
            </p>
            <footer className="flex flex-col gap-2">
              <cite className="not-italic font-bold text-sm uppercase tracking-widest text-primary">
                Deployment Story (Anonymised)
              </cite>
              <p className="text-xs text-muted-foreground">
                Client details on request. NDA-respected references available for qualified inquiries.
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
    </Section>
  );
};

export default Proof;
