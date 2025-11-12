import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default async function Home() {
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
