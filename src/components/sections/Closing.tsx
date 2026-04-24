import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

const Closing = () => {
  return (
    <section className="bg-[#0E1116] text-[#F6F7F9] py-24 md:py-32 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-12 animate-fade-rise">
          Stop losing weeks to electrical manpower gaps. <span className="text-primary italic">Ship the package on time.</span>
        </h2>
        
        <Button asChild size="lg" className="h-16 px-10 text-lg font-bold bg-primary text-background hover:bg-primary/90 animate-fade-rise">
          <Link href="#contact" className="flex items-center gap-3">
            Request a Crew <MoveRight className="w-6 h-6" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Closing;
