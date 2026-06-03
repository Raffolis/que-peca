import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/que-peca.png";

export default function Navbar() {
  const location = useLocation();
const [activeSection, setActiveSection] = useState("");

useEffect(() => {
  if (
  location.pathname !== "/desenvolvimento" &&
  location.pathname !== "/projeto"
) {
  return;
}

  setActiveSection(window.location.hash.replace("#", ""));

  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
  window.history.replaceState(
    null,
    "",
    `${location.pathname}#${entry.target.id}`
  );

  if (activeSection !== entry.target.id) {
  setActiveSection(entry.target.id);
}
}
      });
    },
    {
      threshold: 0.5,
      rootMargin: "-180px 0px -65% 0px",
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, [location.pathname, location.hash]);

const navClass = (section) =>
  `relative font-medium transition-all duration-300 ${
    activeSection === section
      ? "text-[#004aad]"
      : "text-[#004aad] hover:text-[#5de0e6]"
  }`;
  return (
    <header className="relative z-50 w-full flex justify-center pt-4">

      <div className="w-[90%] max-w-[1280px] mt-6 rounded-[28px] border border-white/40 bg-white/40 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] overflow-hidden">

        <div className="grid grid-cols-[40px_auto_1fr_auto_40px] items-center py-5">

          <div />

          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="shrink-0"
          >

            <img
              src={logo}
              alt="QuePeça"
              className="w-[160px]"
            />

          </Link>

          <nav className="hidden lg:flex items-center justify-center gap-8">

            <div className="flex items-center gap-4">

              <span className="text-[11px] uppercase tracking-[0.25em] text-[#7f8aa3] font-semibold">
                Projeto
              </span>

              <div className="flex items-center gap-4">

                <Link
                  to="/projeto#sobre"
                  className={navClass("sobre")}
                >
                  Sobre

                  {activeSection === "sobre" && (
                    <span
                      className="
                        absolute
                        left-0
                        -bottom-2
                        h-[3px]
                        w-full
                        rounded-full
                        bg-[#5de0e6]
                      "
                    />
                  )}
                </Link>

                <Link
                  to="/projeto#problema"
                  className={navClass("problema")}
                >
                  Problema

                  {activeSection === "problema" && (
                    <span
                      className="
                        absolute
                        left-0
                        -bottom-2
                        h-[3px]
                        w-full
                        rounded-full
                        bg-[#5de0e6]
                      "
                    />
                  )}
                </Link>

               <Link
                  to="/projeto#solucao"
                  className={navClass("solucao")}
                >
                  Solução

                  {activeSection === "solucao" && (
                    <span
                      className="
                        absolute
                        left-0
                        -bottom-2
                        h-[3px]
                        w-full
                        rounded-full
                        bg-[#5de0e6]
                      "
                    />
                  )}
                </Link>

              </div>

            </div>

            <div className="w-[1px] h-8 bg-[#dbe8f5]" />

            <div className="flex items-center gap-4">

              <span className="text-[11px] uppercase tracking-[0.25em] text-[#7f8aa3] font-semibold">
                Desenvolvimento
              </span>

              <div className="flex items-center gap-4">

                <Link
                  to="/desenvolvimento#escopo"
                  className={navClass("escopo")}
                >
                  Escopo

                  {activeSection === "escopo" && (
                    <span
                      className="
                        absolute
                        left-0
                        -bottom-2
                        h-[3px]
                        w-full
                        rounded-full
                        bg-[#5de0e6]
                      "
                    />
                  )}
                </Link>

                <Link
                  to="/desenvolvimento#objetivos"
                  className={navClass("objetivos")}
                >
                  Objetivos

                  {activeSection === "objetivos" && (
                    <span
                      className="
                        absolute
                        left-0
                        -bottom-2
                        h-[3px]
                        w-full
                        rounded-full
                        bg-[#5de0e6]
                      "
                    />
                  )}
                </Link>

                <Link
                  to="/desenvolvimento#tecnologias"
                  className={navClass("tecnologias")}
                >
                  Tecnologias

                  {activeSection === "tecnologias" && (
                    <span
                      className="
                        absolute
                        left-0
                        -bottom-2
                        h-[3px]
                        w-full
                        rounded-full
                        bg-[#5de0e6]
                      "
                    />
                  )}
                </Link>

              </div>

            </div>

          </nav>

          <a
            href="#footer"
            className="hidden lg:flex items-center justify-center h-[44px] px-6 rounded-[16px] bg-gradient-to-r from-[#5de0e6] to-[#004aad] text-white text-[14px] font-semibold shadow-[0_12px_30px_rgba(0,74,173,0.18)] hover:scale-105 transition-all duration-300 shrink-0"
          >
            Equipe
          </a>

          <div />

        </div>

      </div>

    </header>
  );
}