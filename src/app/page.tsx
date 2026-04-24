import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import CrewPackages from "@/components/sections/CrewPackages";
import Industries from "@/components/sections/Industries";
import Proof from "@/components/sections/Proof";
import Process from "@/components/sections/Process";
import Differentiators from "@/components/sections/Differentiators";
import Compliance from "@/components/sections/Compliance";
import FAQ from "@/components/sections/FAQ";
import ContactForm from "@/components/sections/ContactForm";
import Closing from "@/components/sections/Closing";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <PainPoints />
      <CrewPackages />
      <Industries />
      <Proof />
      <Process />
      <Differentiators />
      <Compliance />
      <FAQ />
      <ContactForm />
      <Closing />
      <Footer />
      
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-background/80 backdrop-blur-md border-t border-border z-40">
        <button className="w-full h-12 bg-primary text-background font-bold rounded-sm">
          Request a Crew
        </button>
      </div>
    </main>
  );
}
