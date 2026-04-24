"use client";

import React, { useState } from 'react';
import Section from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MoveRight } from 'lucide-react';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <Section variant="dark" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="animate-fade-rise">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Tell us what you need. <span className="text-primary">We reply in one working day.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl">
            Fill in the form or call us directly. A 30-minute scoping call is usually enough for us to tell you what we can mobilise, in what time frame, and at what rate.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 bg-[#1A2029] border border-white/5 flex items-center justify-center rounded-sm group-hover:border-primary transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Phone (Europe)</p>
                <p className="text-xl font-bold group-hover:text-primary transition-colors">+385 XX XXX XXX</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 bg-[#1A2029] border border-white/5 flex items-center justify-center rounded-sm group-hover:border-primary transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                <p className="text-xl font-bold group-hover:text-primary transition-colors">info@triangle-services.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-fade-rise">
          <div className="bg-[#F6F7F9] p-8 md:p-12 rounded-sm text-[#0E1116]">
            {isSubmitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-primary text-background rounded-full flex items-center justify-center mx-auto mb-8">
                  <MoveRight className="w-10 h-10 -rotate-45" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Request Sent</h3>
                <p className="text-muted-foreground">Thank you. We'll be in touch within 24 hours.</p>
                <Button variant="outline" className="mt-8" onClick={() => setIsSubmitted(false)}>Send another</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs uppercase tracking-widest font-bold">Name and company</Label>
                  <Input id="name" required placeholder="e.g. John Doe, MEP Solutions Ltd" className="h-12 border-black/10 focus-visible:ring-primary" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-xs uppercase tracking-widest font-bold">Email or phone</Label>
                  <Input id="contact" type="text" required placeholder="j.doe@company.com" className="h-12 border-black/10 focus-visible:ring-primary" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-xs uppercase tracking-widest font-bold">Project location and start date</Label>
                  <Input id="location" required placeholder="e.g. Vienna, starting mid-July" className="h-12 border-black/10 focus-visible:ring-primary" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="scope" className="text-xs uppercase tracking-widest font-bold">Crew size and scope</Label>
                  <Textarea 
                    id="scope" 
                    required 
                    placeholder="e.g. 8 electricians + 1 supervisor, cable pulling and tray installation, data-center project near Frankfurt, 12 weeks" 
                    className="min-h-[120px] border-black/10 focus-visible:ring-primary" 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-xs uppercase tracking-widest font-bold">Anything else we should know? (Optional)</Label>
                  <Textarea 
                    id="notes" 
                    placeholder="Certifications required, language requirements, site-specific rules..." 
                    className="min-h-[100px] border-black/10 focus-visible:ring-primary" 
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full h-14 text-base font-bold bg-primary text-background hover:bg-primary/90">
                  {isSubmitting ? "Sending..." : "Send request →"}
                </Button>

                <p className="text-[10px] text-muted-foreground text-center pt-4">
                  By submitting you agree to our Privacy Policy. We reply within one working day. We never share your details with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactForm;
