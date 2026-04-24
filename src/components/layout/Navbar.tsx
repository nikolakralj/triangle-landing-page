import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full h-[72px] bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-[1280px] h-full mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/images/logo.png" 
            alt="Triangle Services Logo" 
            width={180} 
            height={40} 
            className="h-10 w-auto invert brightness-0 underline-offset-4"
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm font-medium hover:text-secondary transition-colors">Services</Link>
          <Link href="#industries" className="text-sm font-medium hover:text-secondary transition-colors">Industries</Link>
          <Link href="#process" className="text-sm font-medium hover:text-secondary transition-colors">Process</Link>
          <Link href="#proof" className="text-sm font-medium hover:text-secondary transition-colors">Proof</Link>
          <Link href="#about" className="text-sm font-medium hover:text-secondary transition-colors">About</Link>
          <Link href="#contact" className="text-sm font-medium hover:text-secondary transition-colors">Contact</Link>
        </div>

        <Button asChild className="font-bold">
          <Link href="#contact">Request a Crew</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
