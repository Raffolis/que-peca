export default function Solution() {
  return (
    <section
      id="solucao"
      className="
        scroll-mt-25
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        bg-[#f8fbff]
        pt-20
        pb-32
      "
    >

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[-220px] right-[-220px] w-[620px] h-[620px] bg-[#dff7fa] rounded-full blur-[140px] opacity-30" />

        <div className="absolute bottom-[-260px] left-[-220px] w-[520px] h-[520px] bg-[#edf9ff] rounded-full blur-[120px] opacity-25" />

      </div>

      <div className="relative z-10 w-full max-w-[1700px] mx-auto px-14 lg:px-20">

        <div className="grid grid-cols-[1.4fr_1150px_0.6fr] gap-10 items-start">

          <div></div>

          <div className="w-full">

            <span className="uppercase tracking-[0.28em] text-[#7f8aa3] text-xs font-semibold">
              Solução
            </span>

            <h2 className="text-[35px] lg:text-[50px] leading-[1.5] font-bold text-[#004aad] mt-5 max-w-[1100px]">
              Uma plataforma centralizada para transformar a busca por peças automotivas usadas.
            </h2>

            <div className="mt-10 max-w-[1120px]">

              <p className="text-[#4f5665] text-[18px] leading-[2.4] text-justify">

                O QuePeça surge como uma solução digital desenvolvida para conectar consumidores e desmanches em uma única plataforma moderna, intuitiva e acessível. A proposta é simplificar todo o processo de busca por peças automotivas usadas através de uma experiência centralizada e eficiente.

              </p>

              <div className="grid grid-cols-3 gap-12 max-w-[1380px] my-10">

                <div className="
                  min-h-[150px]
                  flex
                  flex-col
                  justify-center
                  items-center
                  text-center
                  px-14
                  py-12
                  rounded-[20px]
                  bg-gradient-to-r
                  from-[#5de0e6]
                  to-[#004aad]
                  text-white
                  shadow-[0_18px_45px_rgba(0,74,173,0.16)]
                ">

                  <h3 className="text-[20px] font-bold">
                    Busca Inteligente
                  </h3>

                  <p className="text-[15px] leading-[2.2] mt-6 opacity-95 max-w-[290px]">

                    Localização rápida de peças através de filtros, categorias e informações centralizadas.

                  </p>

                </div>

                <div className="
                  min-h-[150px]min-h-[150px]
                  flex
                  flex-col
                  justify-center
                  items-center
                  text-center
                  px-14
                  py-12
                  rounded-[20px]
                  bg-white
                  border
                  border-[#dbe8f5]
                  shadow-[0_12px_35px_rgba(0,74,173,0.05)]
                ">

                  <h3 className="text-[20px] font-bold text-[#004aad]">
                    Plataforma Centralizada
                  </h3>

                  <p className="text-[#5f6470] text-[15px] leading-[2.2] mt-6 max-w-[290px]">

                    Consumidores e fornecedores conectados em um único ambiente digital moderno e acessível.

                  </p>

                </div>

                <div className="
                  min-h-[150px]
                  flex
                  flex-col
                  justify-center
                  items-center
                  text-center
                  px-14
                  py-12
                  rounded-[20px]
                  bg-gradient-to-r
                  from-[#5de0e6]
                  to-[#004aad]
                  text-white
                  shadow-[0_18px_45px_rgba(0,74,173,0.16)]
                ">

                  <h3 className="text-[20px] font-bold">
                    Experiência Moderna
                  </h3>

                  <p className="text-[15px] leading-[2.2] mt-6 opacity-95 max-w-[290px]">

                    Interface intuitiva desenvolvida para tornar a navegação mais simples, rápida e eficiente.



                  </p>

                </div>

              </div>

            <div className="mb-[42px]">

                <p className="text-[#4f5665] text-[18px] leading-[2.4] text-justify">

                    A plataforma reduz o tempo de busca, melhora a comunicação entre usuários e fornecedores e moderniza a experiência de localização de peças automotivas usadas através da tecnologia.

                </p>

            </div>


              <div className="flex justify-center relative top-[10px]">

                <a
                  href="https://www.figma.com/make/02naTsrqbJRZpfFSDBlH4L/Automotive-Marketplace-App-Prototype?fullscreen=1&t=UMoWajHnnSodWRfr-1&code-node-id=0-9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-[320px]
                    h-[30px]
                    flex
                    items-center
                    justify-center
                    text-center
                    rounded-[18px]
                    bg-gradient-to-r
                    from-[#5de0e6]
                    to-[#004aad]
                    text-white
                    text-[15px]
                    font-semibold
                    shadow-[0_16px_45px_rgba(0,74,173,0.16)]
                    transition-all
                    duration-300
                    hover:scale-[1.03]
                    "
                >

                  Acessar Protótipo Completo no Figma

                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}