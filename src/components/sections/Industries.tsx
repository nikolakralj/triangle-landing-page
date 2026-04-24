import React from 'react';
import Section from '@/components/layout/Section';
import { Database, Train, Factory, Wind, Settings, Zap } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Data Centers",
      description: "Cable pulling, containment, LV/MV support and commissioning assistance for hyperscale and colocation builds across AT, DE and CEE.",
      stat: "The European data-center construction market is in the tens of billions annually and electrical manpower is one of its hardest-to-fill roles."
    },
    {
      icon: <Train className="w-8 h-8 text-primary" />,
      title: "Rail & Rolling Stock",
      description: "Electrical retrofit, cable replacement, routing and installation work on vehicles and depot infrastructure, executed under strict OEM site procedures.",
      stat: "Strict compliance with safety standards and rolling-stock regulations is our baseline, not an extra."
    },
    {
      icon: <Factory className="w-8 h-8 text-primary" />,
      title: "Industrial & Steel",
      description: "Installation, erection and commissioning support for line builders, rolling mill suppliers, robotics integrators and panel builders.",
      stat: "Our own technical background is in steel and heavy industry — so we speak the language."
    },
    {
      icon: <Wind className="w-8 h-8 text-primary" />,
      title: "HVAC / MEP",
      description: "Chiller and AHU wiring support, pump and motor connections, control cabling, panel and cable-tray installation for HVAC packages.",
      stat: "Precise coordination with mechanical teams to ensure electrical packages don't delay MEP milestones."
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Automation & OEM Projects",
      description: "Commissioning crews for drive and PLC rollouts, panel shops, factory acceptance support and on-site start-up under tight OEM schedules.",
      stat: "Technical depth for Siemens, ABB, and Allen-Bradley systems as standard."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Shutdowns & Maintenance",
      description: "Short-duration, high-intensity crews for plant shutdowns, turnaround windows and maintenance sprints where timing is non-negotiable.",
      stat: "24/7 deployment capabilities for time-critical industrial maintenance windows."
    }
  ];

  return (
    <Section variant="light" id="industries">
      <div className="mb-16 animate-fade-rise text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Built for peak-load phases of technical construction.
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl">
          We focus on sectors where a missing electrical crew can delay an entire project — not on anything and everything.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {industries.map((industry, index) => (
          <div key={index} className="group p-8 bg-[#F6F7F9] border border-transparent hover:border-primary/20 hover:bg-white transition-all duration-300 rounded-sm animate-fade-rise">
            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
              {industry.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{industry.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {industry.description}
            </p>
            <div className="pt-6 border-t border-black/5">
              <p className="text-xs italic text-[#0E1116]/60 leading-relaxed">
                {industry.stat}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Industries;
