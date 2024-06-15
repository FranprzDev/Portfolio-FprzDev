import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center">
        <Navbar/>
        <Hero/>
      </main>
  );
}
