import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <Projects />
      <About />
      <Contato />
      <Footer />
    </div>
  );
}
