import sp from "../../assets/sao-paulo.png";

export default function About() {
  return (
    <section
      id="sobre"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        bg-[#f8fbff]
        pt-40
        pb-32
      "
    >

      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[-220px] right-[-220px] w-[620px] h-[620px] bg-[#dff7fa] rounded-full blur-[140px] opacity-30" />

        <div className="absolute bottom-[-260px] left-[-220px] w-[520px] h-[520px] bg-[#edf9ff] rounded-full blur-[120px] opacity-25" />

      </div>

      <div className="relative z-10 w-full max-w-[1700px] mx-auto px-10 lg:px-20">

        <div className="grid grid-cols-[1.4fr_1150px_0.6fr] gap-10 items-start">

          <div></div>

          <div className="w-full">

            <span className="uppercase tracking-[0.28em] text-[#7f8aa3] text-xs font-semibold">
              Sobre o QuePeça
            </span>

            <h2 className="text-[35px] lg:text-[50px] leading-[1.5] font-bold text-[#004aad] mt-5 max-w-[1100px]">
              Tecnologia para simplificar a busca por peças automotivas usadas.
            </h2>

            <div className="mt-25 max-w-[1120px]">

              <p className="text-[#4f5665] text-[18px] leading-[2.4] text-justify">

                O QuePeça é um software desenvolvido para facilitar a busca
                por peças automotivas usadas de forma rápida, prática e
                acessível. A plataforma conecta consumidores e desmanches
                da região de São Paulo em uma experiência moderna e
                centralizada, permitindo localizar peças sem a necessidade
                de deslocamento físico até cada estabelecimento.

              </p>

              <div className="flex justify-center my-28">

                <img
                  src={sp}
                  alt="São Paulo"
                  className="w-[260px] opacity-[0.5]"
                />

              </div>

              <p className="text-[#4f5665] text-[18px] leading-[2.4] text-justify">

                Os desmanches cadastrados inserem informações como descrição,
                preço, disponibilidade e localização das peças, permitindo
                que o usuário visualize rapidamente onde o item desejado está
                disponível. A proposta da plataforma é simplificar a comunicação
                entre consumidores e fornecedores através de uma interface
                intuitiva, acessível e eficiente.

                <br />
                <br />

              </p>

            </div>

          </div>

          <div></div>

        </div>

        <div className="grid grid-cols-[1.4fr_1150px_0.6fr] mt-48">

          <div></div>

          <div className="grid grid-cols-3 gap-8 max-w-[1080px] mx-auto mt-8 items-stretch">

            <div className="
              h-full
              flex
              flex-col
              justify-center
              items-center
              px-12
              py-10
              rounded-[18px]
              bg-white
              border
              border-[#dbe8f5]
              shadow-[0_12px_35px_rgba(0,74,173,0.05)]
              text-center
            ">

              <h3 className="text-[19px] leading-[1.3] font-bold text-[#004aad]">
                Busca Inteligente
              </h3>

              <p className="text-[#5f6470] text-[15px] leading-[2.1] mt-6">

                Localização rápida de peças automotivas usadas através de filtros e categorias.

              </p>

            </div>

            <div className="
              min-h-[110px]
              flex
              flex-col
              justify-center
              items-center
              px-12
              py-12
              rounded-[18px]
              bg-gradient-to-r
              from-[#5de0e6]
              to-[#004aad]
              text-white
              shadow-[0_16px_45px_rgba(0,74,173,0.16)]
              text-center
            ">

              <h3 className="text-[19px] leading-[1.3] font-bold">
                Comunicação Centralizada
              </h3>

              <p className="text-[15px] leading-[2.1] mt-6 opacity-95">

                Consumidores e desmanches conectados em uma única plataforma.

              </p>

            </div>

            <div className="
              h-full
              flex
              flex-col
              justify-center
              items-center
              px-12
              py-10
              rounded-[18px]
              bg-white
              border
              border-[#dbe8f5]
              shadow-[0_12px_35px_rgba(0,74,173,0.05)]
              text-center
            ">

              <h3 className="text-[19px] leading-[1.3] font-bold text-[#004aad]">
                Experiência Simplificada
              </h3>

              <p className="text-[#5f6470] text-[15px] leading-[2.1] mt-6">

                Interface moderna e intuitiva desenvolvida com foco em usabilidade.

              </p>

            </div>

          </div>

          <div></div>

        </div>

      </div>

    </section>
  );
}