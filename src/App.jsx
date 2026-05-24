import Navbar from "./components/shared/Navbar";
import Hero from "./components/shared/Hero";
import About from "./components/project/About";

export default function App() {
  return (
    <div className="overflow-x-hidden bg-[#f8fbff]">

      <div className="fixed top-0 left-0 w-full z-[999]">
        <Navbar />
      </div>

      <main className="flex flex-col">

        <Hero />

        <About />

      </main>

    </div>
  );
}