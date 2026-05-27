import { Routes, Route } from "react-router-dom";

import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

import Hero from "./components/shared/Hero";

import About from "./components/project/About";
import Problem from "./components/project/Problem";
import Solution from "./components/project/Solution";

import ScopeHero from "./components/scope/ScopeHero";
import Objectives from "./components/scope/Objectives";
import Technologies from "./components/scope/Technologies";

function Home() {
  return (
    <>
      <Hero />

      <About />

      <Problem />

      <Solution />
    </>
  );
}

export default function App() {
  return (
    <div className="overflow-x-hidden bg-[#f8fbff]">

      <div className="fixed top-0 left-0 w-full z-[999]">
        <Navbar />
      </div>

      <main className="flex flex-col">

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/escopo"
            element={<ScopeHero />}
          />

          <Route
            path="/objetivos"
            element={<Objectives />}
          />

          <Route
            path="/tecnologias"
            element={<Technologies />}
          />

        </Routes>

        <Footer />

      </main>

    </div>
  );
}