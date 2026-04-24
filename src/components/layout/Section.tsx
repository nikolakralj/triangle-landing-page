"use client";

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'light' | 'dark' | 'paper';
  noPadding?: boolean;
}

const Section = ({ 
  children, 
  className, 
  id, 
  variant = 'paper',
  noPadding = false 
}: SectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-fade-rise');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('in-view');
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const variants = {
    light: 'bg-white text-[#0E1116]',
    paper: 'bg-[#F6F7F9] text-[#0E1116]',
    dark: 'bg-[#0E1116] text-[#F6F7F9]',
  };

  return (
    <section 
      ref={sectionRef}
      id={id} 
      className={cn(
        'w-full overflow-hidden',
        !noPadding && 'py-12 md:py-20 lg:py-32',
        variants[variant],
        className
      )}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
