export default function Problem() {
  return (
    <section
      id="problema"
      className="
        scroll-mt-25
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        bg-white
        pt-25
        pb-32
      "
    >

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[-180px] left-[-180px] w-[500px] h-[500px] bg-[#dff7fa] rounded-full blur-[120px] opacity-20" />

        <div className="absolute bottom-[-220px] right-[-220px] w-[620px] h-[620px] bg-[#edf9ff] rounded-full blur-[140px] opacity-25" />

      </div>

      <div className="flex justify-center flex-col items-center z-10 w-full max-w-[1700px] mx-auto px-14 lg:px-20">

          <div>

          <div className="w-full">

            <span className="uppercase tracking-[0.28em] text-[#7f8aa3] text-xs font-semibold">
              Problema
            </span>

            <h2 className="text-[35px] lg:text-[50px] leading-[1.5] font-bold text-[#004aad] mt-5 max-w-[1100px]">
              A busca por peças automotivas usadas ainda é lenta, descentralizada e pouco eficiente.
            </h2>

            <div className="mt-10 max-w-[1120px]">

              <p className="text-[#4f5665] text-[18px] leading-[2.4] text-justify">

                Atualmente, consumidores enfrentam dificuldades para localizar peças automotivas usadas de maneira rápida e confiável. A maioria das buscas depende de contatos individuais, ligações telefônicas ou visitas presenciais em diversos desmanches.
                
              </p>

              <div className="my-10 grid grid-cols-3 gap-12 max-w-[1380px]">

                <div className="
                    min-h-[120px]
                    flex
                    flex-col
                    justify-center
                    items-center
                    text-center
                    px-14
                    py-12
                    rounded-[18px]
                    bg-[#f8fbff]
                    border
                    border-[#dbe8f5]
                ">

                  <h3 className="text-[18px] font-bold text-[#004aad]">
                    Falta de Padronização
                  </h3>

                  <p className="text-[#5f6470] text-[14px] leading-[2] mt-5">
                    Cada fornecedor utiliza métodos diferentes para cadastro e divulgação das peças.
                  </p>

                </div>

                <div className="
                  flex
                  flex-col
                  justify-center
                  items-center
                  text-center
                  px-14
                  py-12
                  rounded-[18px]
                  bg-gradient-to-r
                  from-[#5de0e6]
                  to-[#004aad]
                  text-white
                ">

                  <h3 className="text-[17px] leading-[1.5] font-bold">
                    Comunicação Descentralizada
                  </h3>

                  <p className="text-[14px] leading-[2] mt-5 opacity-95 max-w-[260px]">
                    Consumidores precisam entrar em contato com diversos locais separadamente.
                  </p>

                </div>

                <div className="
                  flex
                  flex-col
                  justify-center
                  items-center
                  text-center
                  px-14
                  py-12
                  rounded-[18px]
                  bg-[#f8fbff]
                  border
                  border-[#dbe8f5]
                ">

                  <h3 className="text-[18px] font-bold text-[#004aad]">
                    Perda de Tempo
                  </h3>

                  <p className="text-[#5f6470] text-[14px] leading-[2] mt-5">
                    O processo atual exige deslocamentos e pesquisas demoradas.
                  </p>

                </div>

              </div>

              <p className="text-[#4f5665] text-[18px] leading-[2.4] text-justify">

                Esse cenário gera baixa eficiência tanto para consumidores quanto para fornecedores, dificultando a modernização do setor e reduzindo a acessibilidade ao mercado de peças usadas.

              </p>

            </div>

          </div>

          <div></div>

        </div>

      </div>

    </section>
  );
}