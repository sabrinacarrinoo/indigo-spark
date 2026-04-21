import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Footer } from "@/components/portfolio/Footer";
import { GithubSection } from "@/components/portfolio/GithubSection";
import { Hero } from "@/components/portfolio/Hero";
import { Identity } from "@/components/portfolio/Identity";
import { Navbar } from "@/components/portfolio/Navbar";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GithubSection />
      <Identity />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
