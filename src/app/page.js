import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Education from "./Components/Education";
import LaboralExperience from "./Components/LaboralExperience";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center">
        <Navbar/>
        <Hero/>
        <Education/>
        <LaboralExperience />
      </main>
  );
}
