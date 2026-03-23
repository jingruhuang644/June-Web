import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExperienceSection from "./components/ExperienceSection";
import HorizontalScroll from "./components/HorizontalScroll";
import Philosophy from "./components/Philosophy";
import Skills from "./components/Skills";
import PersonalSpace from "./components/PersonalSpace";
import HallOfFame from "./components/HallOfFame";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="relative bg-paper min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <ExperienceSection />
      <HorizontalScroll />
      <Philosophy />
      <Skills />
      <PersonalSpace />
      <HallOfFame />
      <Footer />
    </main>
  );
}
