import About from "@/components/About";
import HeroSection from "../components/HeroSection";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <About />
      <Skills />
    </main>
  );
}
