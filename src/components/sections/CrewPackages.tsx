import React from 'react';
import Section from '@/components/layout/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Train, Cpu, ClipboardCheck, Check } from 'lucide-react';
import Link from 'next/link';

const CrewPackages = () => {
  const packages = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Package 1 — Electrical Installation Crew",
      size: "4 to 20+ electricians plus 1 supervisor",
      bestFor: "MEP contractors, industrial GCs, data-center electrical packages, large shutdowns",
      scope: [
        "Cable pulling and cable-tray / ladder / containment installation",
        "Electrical erection and installation support",
        "Panel and equipment placement",
        "Cable labelling, routing and redline updates",
        "Terminations where crew is qualified",
        "Punch-list closing",
        "Daily site report and signed timesheets"
      ]
    },
    {
      icon: <Train className="w-6 h-6" />,
      title: "Package 2 — Rail & Rolling-Stock Electrical Crew",
      size: "8 to 20 electricians plus 1 supervisor",
      bestFor: "rail OEMs, depot retrofit projects, rolling-stock modification programs",
      scope: [
        "Cable replacement on vehicles",
        "Cable routing and harness installation",
        "Electrical modification support under site rules",
        "Labelling, testing support and photo documentation",
        "Work under strict depot/OEM site procedures"
      ]
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Package 3 — Industrial Automation & Commissioning Support",
      size: "1 to 6 specialists",
      bestFor: "OEMs, line builders, panel builders, steel & metals projects, drive & PLC rollouts",
      scope: [
        "PLC commissioning (Siemens S7, TIA Portal, PCS 7, WinCC, Allen-Bradley Studio 5000)",
        "Drive commissioning (Siemens, ABB, Danfoss, Schneider)",
        "Site troubleshooting and punch-list closing",
        "Commissioning supervision and customer hand-over",
        "Site documentation and test records"
      ]
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Package 4 — Site Supervision & Reporting",
      size: "1 supervisor plus coordination support",
      bestFor: "contractors using mixed subcontracted labor who need a single accountable lead",
      scope: [
        "Site coordination across multiple trades",
        "Daily reports, timesheet control, photo evidence",
        "Productivity tracking and punch-list management",
        "Change-order evidence and claims-support documentation",
        "Single point of contact for client project management"
      ]
    }
  ];

  return (
    <Section variant="dark" id="services">
      <div className="mb-16 animate-fade-rise">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          Four crew packages. Clear scope. Signed timesheets.
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl">
          Every crew comes with a designated supervisor, a scope definition, a daily report template and a timesheet process agreed before mobilisation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {packages.map((pkg, index) => (
          <Card key={index} className="bg-[#1A2029] border-white/5 text-[#F6F7F9] rounded-sm group hover:border-primary/50 transition-colors animate-fade-rise">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-primary flex items-center justify-center text-background mb-6">
                {pkg.icon}
              </div>
              <CardTitle className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {pkg.title}
              </CardTitle>
              <div className="flex flex-col gap-1 text-sm">
                <p><span className="text-primary font-bold">Crew size:</span> {pkg.size}</p>
                <p><span className="text-primary font-bold">Best for:</span> {pkg.bestFor}</p>
              </div>
            </CardHeader>
            <CardContent>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-muted-foreground">Scope</h4>
              <ul className="space-y-3 mb-8">
                {pkg.scope.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="#contact" className="text-sm font-bold text-primary flex items-center gap-2 hover:gap-3 transition-all">
                See details <span className="text-lg">→</span>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default CrewPackages;
