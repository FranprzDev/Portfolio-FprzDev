import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Education from "./Components/Education";
import LaboralExperience from "./Components/LaboralExperience";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center">
        <Navbar/>
        <Hero/>
        <Education/>
        <LaboralExperience />
        <Projects />
        <Footer />
      </main>
  );
}
