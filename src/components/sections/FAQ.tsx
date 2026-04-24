import React from 'react';
import Section from '@/components/layout/Section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How fast can you mobilise a crew?",
      answer: "Standard window is 10–14 days from signed order, assuming vendor-registration and documents are in place. Faster is possible for small crews; larger crews (15+) need the full window to prepare documents, travel and accommodation."
    },
    {
      question: "Where do your workers come from, and in what languages do they work?",
      answer: "Primary workforce is based in Croatia and the wider CEE region. Crews work in English and Croatian as standard; supervisors are English- and/or German-speaking. German-speaking electricians are available on request."
    },
    {
      question: "Are you a temporary employment agency or a subcontractor?",
      answer: "Our primary delivery model is subcontracting with our own supervision — the crew works under our crew leader on your site. We can also structure commercial engagements differently where it fits the client's legal setup; we discuss this on the scoping call."
    },
    {
      question: "How does pricing work?",
      answer: "Time and materials at an agreed hourly or daily rate, signed weekly on timesheets. Accommodation and travel are either included in the rate or billed separately, agreed upfront. No hidden surcharges."
    },
    {
      question: "What are your payment terms?",
      answer: "Weekly timesheets, biweekly invoicing, 14-day payment terms is our standard for new clients. We discuss longer terms with established clients on a case-by-case basis."
    },
    {
      question: "Do you handle A1 certificates and posting notifications?",
      answer: "Yes. Every worker posted to Austria, Germany or another EU country arrives with their A1 certificate, posting notification and — where required — BUAK registration. We run the paperwork; you don't."
    },
    {
      question: "Can you send references?",
      answer: "Yes, on request, under NDA where applicable. We respect our clients' confidentiality — which is also why we don't publish their logos on this site."
    },
    {
      question: "What's the minimum project size?",
      answer: "No strict minimum, but crews below four people are rarely cost-efficient once travel and accommodation are included. Specialist commissioning engineers can be engaged individually."
    }
  ];

  return (
    <Section variant="light" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 animate-fade-rise text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Frequently asked questions.
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4 animate-fade-rise">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-black/5 bg-[#F6F7F9] px-6 rounded-sm overflow-hidden">
              <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline hover:text-[#0E1116] transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pt-2 border-t border-black/5 mt-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
};

export default FAQ;
