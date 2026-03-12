import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Process } from "./components/Process";
import { CTA } from "./components/CTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingTelegram } from "./components/FloatingTelegram";

export default function Home() {
  return (
    <div className="min-h-screen bg-black font-sans text-neutral-50">
      <Navbar />
      <main className="pt-14">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <WhyChooseUs />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingTelegram />
    </div>
  );
}
