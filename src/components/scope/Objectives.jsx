export default function Objectives() {
  return (
    <section
      id="objetivos"
      className="
        relative
        overflow-hidden
        bg-white
        pt-28
        pb-28
      "
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[-220px] left-[-220px] w-[620px] h-[620px] bg-[#dff7fa] rounded-full blur-[140px] opacity-20" />

        <div className="absolute bottom-[-260px] right-[-220px] w-[520px] h-[520px] bg-[#edf9ff] rounded-full blur-[120px] opacity-25" />

      </div>

      {/* CONTAINER */}
      <div className="flex justify-center flex-col items-centerz-10 w-full max-w-[1450px] mx-auto px-14 lg:px-20">

        <div className="flex justify-center flex-col items-center w-full max-w-[1280px] mx-auto px-6">

          <div></div>

          {/* CONTEÚDO */}
          <div className="w-full">

            {/* TAG */}
            <span className="uppercase tracking-[0.28em] text-[#7f8aa3] text-xs font-semibold">
              Objetivos
            </span>

            {/* TÍTULO */}
            <h2 className="text-[35px] lg:text-[50px] leading-[1.5] font-bold text-[#004aad] mt-5 w-full">
              Objetivos estratégicos da plataforma QuePeça.
            </h2>

            {/* TEXTO */}
            <div className="mt-14 w-full">

              <p className="text-[#4f5665] text-[18px] leading-[2.4] text-justify">

                O QuePeça foi desenvolvido com o objetivo de
                modernizar a busca por peças automotivas usadas,
                centralizando informações e conectando consumidores
                e desmanches em uma única plataforma digital.

              </p>

            </div>

            {/* HERO CARD */}
            <div className="mt-14">

              <div className="
                rounded-[28px]
                bg-gradient-to-r
                from-[#5de0e6]
                to-[#004aad]
                px-10
                py-8
                shadow-[0_16px_45px_rgba(0,74,173,0.16)]
                w-full
              ">

                <span className="
                  uppercase
                  tracking-[0.28em]
                  text-[11px]
                  font-semibold
                  text-white/80
                ">
                  Objetivo Geral
                </span>

                <h3 className="
                  text-white
                  text-[24px]
                  leading-[1.5]
                  font-bold
                  mt-6
                  w-full
                ">

                  Facilitar a localização de peças automotivas usadas
                  através de uma plataforma moderna, acessível e
                  centralizada.

                </h3>

              </div>

            </div>

            {/* MINI CARDS */}
            <div
            className="
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-3
                gap-10
                mt-14
                max-w-[1100px]
                mx-auto
            "
            >

            {/* CARD 1 */}
            <div className="
                flex
                flex-col
                items-center
                text-center
                px-8
                py-12
                rounded-[26px]
                bg-white
                border
                border-[#dbe8f5]
                shadow-[0_12px_35px_rgba(0,74,173,0.05)]
            ">

                {/* ÍCONE */}
                <div className="
                    w-20
                    h-20
                    rounded-full
                    bg-[#f4f8ff]
                    flex
                    items-center
                    justify-center
                    shrink-0
                ">

                <span className="text-[#004aad] text-[30px]">
                    ⌕
                </span>

                </div>

                {/* TÍTULO */}
                <h3 className="
                    text-[21px]
                    leading-[1.3]
                    font-bold
                    text-[#004aad]
                    mt-8
                    min-h-[56px]
                    flex
                    items-center
                ">
                    Busca Inteligente
                </h3>

                {/* LINHA */}
                <div className="
                    w-10
                    h-[3px]
                    rounded-full
                    bg-[#5de0e6]
                    mt-5
                    shrink-0
                " />

                {/* TEXTO */}
                <p className="
                    text-[#5f6470]
                    text-[16px]
                    leading-[2]
                    mt-7
                    max-w-[260px]
                ">

                    Permitir pesquisas rápidas
                    utilizando filtros e categorias
                    automotivas.

                </p>

            </div>

            {/* CARD 2 */}
            <div className="
                flex
                flex-col
                items-center
                text-center
                px-8
                pt-12
                pb-10
                rounded-[26px]
                bg-gradient-to-r
                from-[#5de0e6]
                to-[#004aad]
                text-white
                shadow-[0_16px_45px_rgba(0,74,173,0.16)]
            ">

                {/* ÍCONE */}
                <div className="
                    w-20
                    h-20
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    shrink-0
                ">

                <span className="text-white text-[30px]">
                    ◎
                </span>

                </div>

                {/* TÍTULO */}
                <h3 className="
                    text-[21px]
                    leading-[1.3]
                    font-bold
                    mt-8
                    min-h-[56px]
                    flex
                    items-center
                ">
                    Centralização
                </h3>

                {/* LINHA */}
                <div className="
                    w-10
                    h-[3px]
                    rounded-full
                    bg-white/60
                    mt-5
                    shrink-0
                " />

                {/* TEXTO */}
                <p className="
                    text-[16px]
                    leading-[2]
                    mt-7
                    opacity-95
                    max-w-[260px]
                ">

                    Conectar consumidores
                    e desmanches em uma
                    única plataforma.

                </p>

            </div>

            {/* CARD 3 */}
            <div className="
                flex
                flex-col
                items-center
                text-center
                px-8
                pt-12
                pb-10
                rounded-[26px]
                bg-white
                border
                border-[#dbe8f5]
                shadow-[0_12px_35px_rgba(0,74,173,0.05)]
            ">

                {/* ÍCONE */}
                <div className="
                    w-20
                    h-20
                    rounded-full
                    bg-[#f4f8ff]
                    flex
                    items-center
                    justify-center
                    shrink-0
                ">

                <span className="text-[#004aad] text-[30px]">
                    ✦
                </span>

                </div>

                {/* TÍTULO */}
                <h3 className="
                    text-[21px]
                    leading-[1.3]
                    font-bold
                    text-[#004aad]
                    mt-8
                    min-h-[56px]
                    flex
                    items-center
                ">
                    Experiência Moderna
                </h3>

                {/* LINHA */}
                <div className="
                    w-10
                    h-[3px]
                    rounded-full
                    bg-[#5de0e6]
                    mt-5
                    shrink-0
                " />

                {/* TEXTO */}
                <p className="
                    text-[#5f6470]
                    text-[16px]
                    leading-[2]
                    mt-7
                    max-w-[260px]
                ">

                    Modernizar o processo
                    de busca por peças
                    automotivas usadas.

                </p>

            </div>

            </div>

          </div>

          {/* OBJETIVOS ESPECÍFICOS */}

<div className="mt-24 max-w-[1100px] mx-auto">

  <span
    className="
      uppercase
      tracking-[0.25em]
      text-[#7f8aa3]
      text-xs
      font-semibold
    "
  >
    Objetivos Específicos
  </span>

  <div
    className="
      grid
      md:grid-cols-2
      xl:grid-cols-5
      gap-5
      mt-8
    "
  >

    <div className="bg-white border border-[#dbe8f5] rounded-[20px] p-5 text-center">
      Centralizar anúncios automotivos
    </div>

    <div className="bg-white border border-[#dbe8f5] rounded-[20px] p-5 text-center">
      Facilitar a localização de peças
    </div>

    <div className="bg-white border border-[#dbe8f5] rounded-[20px] p-5 text-center">
      Conectar consumidores e desmanches
    </div>

    <div className="bg-white border border-[#dbe8f5] rounded-[20px] p-5 text-center">
      Aumentar a visibilidade dos desmanches
    </div>

    <div className="bg-white border border-[#dbe8f5] rounded-[20px] p-5 text-center">
      Viabilizar um modelo SaaS escalável
    </div>

  </div>

</div>

        </div>

      </div>

    </section>
  );
}