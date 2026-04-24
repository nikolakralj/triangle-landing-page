import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-[#0E1116] text-[#F6F7F9] overflow-hidden min-h-[calc(100vh-72px)] flex items-center">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 py-12 md:py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="animate-fade-rise in-view">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-8">
              Electrical installation crews, <span className="text-primary">ready to mobilise</span> across Europe.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10">
              Supervised teams of 4 to 20+ electricians for industrial, rail, data-center and HVAC projects in Austria, Germany and CEE. We deliver the people, the site supervision, the documentation and the compliance — so your electrical package stays on schedule.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="h-14 px-8 text-base font-bold bg-primary text-[#0E1116] hover:bg-primary/90">
                <Link href="#contact" className="flex items-center gap-2">
                  Request a Crew <MoveRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base font-bold border-white text-white bg-transparent hover:bg-white/10">
                <Link href="#process">See how we work</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8 border-t border-white/10">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 whitespace-nowrap">A1 & posting-ready</span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 whitespace-nowrap">BUAK-compliant for Austria</span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 whitespace-nowrap">Insured</span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 whitespace-nowrap">EN / DE site supervisors</span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60 whitespace-nowrap">Mobilisation in 10–14 days</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[600px] rounded-sm overflow-hidden group">
            <Image 
              src="/images/hero-crew.png" 
              alt="Triangle Services Crew installing cable tray in an industrial hall"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1116]/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
