import { useEffect } from "react";

import logo from "../../assets/que-peca.png";
import phone from "../../assets/phone.png";

export default function Hero() {

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleNavigation = () => {
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-[#f8fbff] flex items-center justify-center px-6"
    >

      <div className="absolute top-[-250px] left-[-180px] w-[900px] h-[900px] bg-[#dff7fa] rounded-[38%] blur-[140px] opacity-90 rotate-12"></div>

      <div className="absolute bottom-[-350px] right-[-250px] w-[1000px] h-[1000px] bg-[#cfefff] rounded-[45%] blur-[150px] opacity-90"></div>

      <div className="absolute top-[18%] right-[18%] w-[500px] h-[500px] bg-[#edf9ff] rounded-[40%] blur-[120px] opacity-80"></div>

      <div className="absolute bottom-[5%] left-[25%] w-[400px] h-[400px] bg-[#e4f8ff] rounded-[35%] blur-[110px] opacity-70"></div>

      <div className="relative z-10 max-w-[1280px] w-full">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

          <div className="max-w-2xl pl-10">

            <img
              src={logo}
              alt="QuePeça"
              className="w-[620px] lg:w-[720px] max-w-none relative left-[-5px]"
            />

            <p className="text-[19px] lg:text-[22px] leading-[1.5] text-[#4f5665] mt-12 max-w-[600px]">
              Plataforma digital desenvolvida para facilitar
              a busca por peças automotivas usadas,
              conectando consumidores e desmanches
              de forma rápida, prática e inteligente.

              <br />
              <br />

            </p>

            <div className="flex items-center gap-5">

              <a
                href="#sobre"
                onClick={handleNavigation}
                className="min-w-[170px] h-[52px] px-10 rounded-[18px] bg-gradient-to-r from-[#5de0e6] to-[#004aad] text-white text-[15px] leading-none font-semibold shadow-[0_12px_30px_rgba(0,74,173,0.22)] hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Explorar Projeto
              </a>

              <a
                href="#escopo"
                onClick={handleNavigation}
                className="min-w-[160px] h-[52px] px-10 rounded-[18px] border border-[#004aad] text-[#004aad] text-[15px] font-semibold bg-white/60 backdrop-blur-md hover:bg-[#004aad] hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                Ver Escopo
              </a>

            </div>

          </div>

          <div className="relative flex justify-end w-full">

            <div className="absolute w-[450px] h-[450px] bg-[#dff7fa] rounded-full blur-3xl opacity-60"></div>

            <img
              src={phone}
              alt="Aplicativo QuePeça"
              className="relative right-[-120px] z-10 w-[320px] lg:w-[520px] drop-shadow-[0_35px_70px_rgba(0,0,0,0.25)] hover:scale-105 transition-all duration-500"
            />

          </div>

        </div>

      </div>

    </section>
  );
}