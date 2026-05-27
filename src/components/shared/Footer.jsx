import {
  House,
  LayoutDashboard,
  CircleHelp,
  Lightbulb,
  ExternalLink
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="
        relative
        overflow-hidden
        bg-[#001d47]
        pt-16
      "
    >
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[-180px] left-[-180px] w-[420px] h-[420px] bg-[#5de0e6] rounded-full blur-[140px] opacity-[0.06]" />

        <div className="absolute bottom-[-220px] right-[-220px] w-[520px] h-[520px] bg-[#5de0e6] rounded-full blur-[160px] opacity-[0.06]" />

      </div>

      <div className="relative z-10 w-full px-[40px]">

        <div
          className="
            rounded-t-[28px]
            shadow-[0_0_80px_rgba(0,0,0,0.25)]
            bg-[linear-gradient(135deg,#00173a_0%,#00235a_55%,#003b73_100%)]
            overflow-hidden
            backdrop-blur-sm
          "
        >

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[0.25fr_1.1fr_.9fr_1fr_0.25fr]
              items-start
            "
          >

            <div />

            <div
              className="
                py-12
              "
            >

              <h2
                className="
                  text-white
                  text-[48px]
                  leading-none
                  font-bold
                  tracking-[-2px]
                "
              >
                QuePeça
              </h2>

              <p
                className="
                  text-white/70
                  text-[16px]
                  leading-9
                  mt-6
                  max-w-[360px]
                "
              >
                Plataforma desenvolvida para facilitar a busca
                por peças automotivas usadas através de uma
                experiência moderna, centralizada e acessível.
              </p>

              <div className="flex gap-3 mt-8 flex-wrap">

                <span
                  className="
                    px-4
                    py-2
                    rounded-xl
                    border
                    border-[#5de0e6]/20
                    bg-[#5de0e6]/5
                    text-white/80
                    text-[13px]
                  "
                >
                  React
                </span>

                <span
                  className="
                    px-4
                    py-2
                    rounded-xl
                    border
                    border-[#5de0e6]/20
                    bg-[#5de0e6]/5
                    text-white/80
                    text-[13px]
                  "
                >
                  Tailwind
                </span>

                <span
                  className="
                    px-4
                    py-2
                    rounded-xl
                    border
                    border-[#5de0e6]/20
                    bg-[#5de0e6]/5
                    text-white/80
                    text-[13px]
                  "
                >
                  UX/UI
                </span>

              </div>

            </div>

            <div
              className="
                py-12
              "
            >

              <h3 className="text-white text-[24px] font-semibold">
                Navegação
              </h3>

              <div className="flex flex-col gap-6 mt-8">

                <a
                  href="#inicio"
                  className="
                    flex
                    items-center
                    gap-3
                    text-white/75
                    text-[16px]
                    hover:text-[#5de0e6]
                    transition-all
                    duration-300
                    w-fit
                  "
                >
                  <House size={18} strokeWidth={2} />
                  Início
                </a>

                <a
                  href="#sobre"
                  className="
                    flex
                    items-center
                    gap-3
                    text-white/75
                    text-[16px]
                    hover:text-[#5de0e6]
                    transition-all
                    duration-300
                    w-fit
                  "
                >
                  <LayoutDashboard size={18} strokeWidth={2} />
                  Sobre
                </a>

                <a
                  href="#problema"
                  className="
                    flex
                    items-center
                    gap-3
                    text-white/75
                    text-[16px]
                    hover:text-[#5de0e6]
                    transition-all
                    duration-300
                    w-fit
                  "
                >
                  <CircleHelp size={18} strokeWidth={2} />
                  Problema
                </a>

                <a
                  href="#solucao"
                  className="
                    flex
                    items-center
                    gap-3
                    text-white/75
                    text-[16px]
                    hover:text-[#5de0e6]
                    transition-all
                    duration-300
                    w-fit
                  "
                >
                  <Lightbulb size={18} strokeWidth={2} />
                  Solução
                </a>

                <a
                  href="https://www.figma.com/make/02naTsrqbJRZpfFSDBlH4L/Automotive-Marketplace-App-Prototype?fullscreen=1&t=UMoWajHnnSodWRfr-1&code-node-id=0-9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-3
                    text-white/75
                    text-[16px]
                    hover:text-[#5de0e6]
                    transition-all
                    duration-300
                    w-fit
                  "
                >
                  <ExternalLink size={18} strokeWidth={2} />
                  Protótipo
                </a>

              </div>

            </div>

            <div
              className="
                py-12
              "
            >

              <h3 className="text-white text-[24px] font-semibold">
                Equipe
              </h3>

              <div className="flex flex-col mt-8 gap-4">

                <div className="flex justify-between items-center">

                  <p className="text-white text-[14px]">
                    Ana Julia Morais Moreira
                  </p>

                  <span className="text-white/40 text-[13px]">
                    2405838
                  </span>

                </div>

                <div className="flex justify-between items-center">

                  <p className="text-white text-[14px]">
                    Augusto Teixeira de Freitas Cota
                  </p>

                  <span className="text-white/40 text-[13px]">
                    2401247
                  </span>

                </div>

                <div className="flex justify-between items-center">

                  <p className="text-white text-[14px]">
                    Giovanni Santiago Riva Gemignani
                  </p>

                  <span className="text-white/40 text-[13px]">
                    2411209
                  </span>

                </div>

                <div className="flex justify-between items-center">

                  <p className="text-white text-[14px]">
                    Rafaela da Silva
                  </p>

                  <span className="text-white/40 text-[13px]">
                    2411652
                  </span>

                </div>

                <div className="flex justify-between items-center">

                  <p className="text-white text-[14px]">
                    Vinicius Henrique Esperança
                  </p>

                  <span className="text-white/40 text-[13px]">
                    2401912
                  </span>

                </div>

              </div>

            </div>

            <div />

          </div>

          <div
            className="
              flex
              flex-col
              md:flex-row
              items-center
              justify-between
              gap-4
              px-[60px]
              py-5
              border-t
              border-white/5
              bg-[#00122f]/60
            "
          >

            <p className="text-white/35 text-[13px]">

              © 2026 QuePeça. Projeto acadêmico desenvolvido em Engenharia de Software.

            </p>

            <div className="flex items-center gap-4">

              <div className="w-[6px] h-[6px] rounded-full bg-[#5de0e6]" />

              <p className="text-white/50 text-[14px]">
                UniAnchieta
              </p>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}