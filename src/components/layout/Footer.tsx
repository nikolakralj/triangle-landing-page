import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#0E1116] text-[#F6F7F9] pt-20 pb-10 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 - Company */}
          <div>
            <Image 
              src="/images/logo.png" 
              alt="Triangle Services Logo" 
              width={160} 
              height={36} 
              className="h-9 w-auto invert brightness-0 mb-6"
            />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Industrial manpower partner for technical construction projects across Austria, Germany and CEE.
            </p>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>[company address placeholder]</p>
              <p>VAT: [placeholder]</p>
              <p>Registration: [placeholder]</p>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Electrical Installation Crews</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Rail & Rolling Stock</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Automation & Commissioning</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Site Supervision & Reporting</Link></li>
            </ul>
          </div>

          {/* Column 3 - Industries */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Industries</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Data Centers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Industrial & Steel</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Rail</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">HVAC / MEP</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Automation & OEM</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Shutdowns & Maintenance</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact & Legal */}
          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-wider">Contact & Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground mb-6">
              <li><Link href="mailto:info@triangle-services.com" className="hover:text-primary transition-colors">info@triangle-services.com</Link></li>
              <li><Link href="tel:+385XXXXXXXX" className="hover:text-primary transition-colors">+385 XX XXX XXX</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">LinkedIn</Link></li>
            </ul>
            <div className="flex gap-4 text-xs">
              <Link href="#" className="hover:text-primary transition-colors">Imprint</Link>
              <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Triangle Services. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="text-primary">EN</span>
            <span className="hover:text-white cursor-pointer transition-colors">DE</span>
            <span className="hover:text-white cursor-pointer transition-colors">HR</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
