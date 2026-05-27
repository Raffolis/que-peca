import { Link } from "react-router-dom";
import logo from "../../assets/que-peca.png";

export default function Navbar() {
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

                <a
                  href="#sobre"
                  className="text-[#004aad] font-medium hover:text-[#5de0e6] transition-all duration-300"
                >
                  Sobre
                </a>

                <a
                  href="#problema"
                  className="text-[#004aad] font-medium hover:text-[#5de0e6] transition-all duration-300"
                >
                  Problema
                </a>

                <a
                  href="#solucao"
                  className="text-[#004aad] font-medium hover:text-[#5de0e6] transition-all duration-300"
                >
                  Solução
                </a>

              </div>

            </div>

            <div className="w-[1px] h-8 bg-[#dbe8f5]" />

            <div className="flex items-center gap-4">

              <span className="text-[11px] uppercase tracking-[0.25em] text-[#7f8aa3] font-semibold">
                Desenvolvimento
              </span>

              <div className="flex items-center gap-4">

                <Link
                  to="/escopo"
                  className="text-[#004aad] font-medium hover:text-[#5de0e6] transition-all duration-300"
                >
                  Escopo
                </Link>

                <Link
                  to="/objetivos"
                  className="text-[#004aad] font-medium hover:text-[#5de0e6] transition-all duration-300"
                >
                  Objetivos
                </Link>

                <Link
                  to="/tecnologias"
                  className="text-[#004aad] font-medium hover:text-[#5de0e6] transition-all duration-300"
                >
                  Tecnologias
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