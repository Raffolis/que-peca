export default function ScopeHero() {
  return (
    <section
      id="escopo"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#f8fbff]
        flex
        items-center
        pt-40
        pb-32
      "
    >

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            top-[-250px]
            left-[-250px]
            w-[700px]
            h-[700px]
            bg-[#dff7fa]
            rounded-full
            blur-[140px]
            opacity-40
          "
        />

        <div
          className="
            absolute
            bottom-[-300px]
            right-[-250px]
            w-[800px]
            h-[800px]
            bg-[#cfefff]
            rounded-full
            blur-[160px]
            opacity-40
          "
        />

      </div>

      <div
        className="
          relative
          z-10
          w-full
          max-w-[1700px]
          mx-auto
          px-8
        "
      >

        <div
          className="
            grid
            grid-cols-[0.25fr_1.2fr_0.8fr_0.25fr]
            gap-16
            items-center
          "
        >

          <div />

          <div>

            <span
              className="
                uppercase
                tracking-[0.25em]
                text-[#7f8aa3]
                text-xs
                font-semibold
              "
            >
              Escopo do Projeto
            </span>

            <h2
              className="
                mt-6
                text-[42px]
                leading-[1.1]
                font-bold
                text-[#004aad]
                max-w-[700px]
              "
            >
              Tecnologia para modernizar a busca por peças automotivas usadas.
            </h2>

            <p
              className="
                mt-10
                text-[#4f5665]
                text-[18px]
                leading-[2]
                max-w-[620px]
              "
            >
              O QuePeça foi desenvolvido para centralizar anúncios
              de peças automotivas usadas em uma plataforma moderna,
              conectando consumidores e desmanches de maneira rápida,
              prática e inteligente.
            </p>

            <div
              className="
                mt-14
                grid
                grid-cols-2
                gap-5
                max-w-[520px]
              "
            >

              <div
                className="
                  rounded-[24px]
                  bg-white
                  border
                  border-[#dbe8f5]
                  p-6
                  shadow-[0_12px_30px_rgba(0,74,173,0.06)]
                "
              >

                <h3 className="text-[34px] font-bold text-[#004aad]">
                  168h
                </h3>

                <p className="text-[#5f6470] mt-2 text-sm">
                  Tempo estimado de desenvolvimento
                </p>

              </div>

              <div
                className="
                  rounded-[24px]
                  bg-white
                  border
                  border-[#dbe8f5]
                  p-6
                  shadow-[0_12px_30px_rgba(0,74,173,0.06)]
                "
              >

                <h3 className="text-[34px] font-bold text-[#004aad]">
                  R$20K
                </h3>

                <p className="text-[#5f6470] mt-2 text-sm">
                  Investimento estimado do projeto
                </p>

              </div>

              <div
                className="
                  rounded-[24px]
                  bg-gradient-to-r
                  from-[#5de0e6]
                  to-[#004aad]
                  p-6
                  text-white
                  shadow-[0_18px_40px_rgba(0,74,173,0.18)]
                "
              >

                <h3 className="text-[34px] font-bold">
                  48%
                </h3>

                <p className="mt-2 text-sm opacity-90">
                  Margem de lucro prevista
                </p>

              </div>

              <div
                className="
                  rounded-[24px]
                  bg-white
                  border
                  border-[#dbe8f5]
                  p-6
                  shadow-[0_12px_30px_rgba(0,74,173,0.06)]
                "
              >

                <h3 className="text-[34px] font-bold text-[#004aad]">
                  SaaS
                </h3>

                <p className="text-[#5f6470] mt-2 text-sm">
                  Modelo escalável para desmanches
                </p>

              </div>

            </div>

          </div>

          <div className="relative flex justify-center">

            <div
              className="
                absolute
                w-[520px]
                h-[520px]
                bg-[#dff7fa]
                rounded-full
                blur-[120px]
                opacity-70
              "
            />

            <div
              className="
                relative
                w-[420px]
                rounded-[40px]
                border
                border-white/60
                bg-white/70
                backdrop-blur-xl
                p-8
                shadow-[0_30px_80px_rgba(0,0,0,0.12)]
              "
            >

              <div className="space-y-5">

                <div
                  className="
                    h-[90px]
                    rounded-[22px]
                    bg-gradient-to-r
                    from-[#5de0e6]
                    to-[#004aad]
                    p-6
                    text-white
                  "
                >

                  <p className="text-sm opacity-90">
                    Receita mensal prevista
                  </p>

                  <h3 className="text-[32px] font-bold mt-2">
                    R$ 12.000
                  </h3>

                </div>

                <div
                  className="
                    rounded-[22px]
                    border
                    border-[#dbe8f5]
                    p-6
                    bg-white
                  "
                >

                  <p className="text-[#7f8aa3] text-sm">
                    Desmanches cadastrados
                  </p>

                  <h3 className="text-[28px] font-bold text-[#004aad] mt-2">
                    40 parceiros
                  </h3>

                </div>

                <div
                  className="
                    rounded-[22px]
                    border
                    border-[#dbe8f5]
                    p-6
                    bg-white
                  "
                >

                  <p className="text-[#7f8aa3] text-sm">
                    Ponto de equilíbrio
                  </p>

                  <h3 className="text-[28px] font-bold text-[#004aad] mt-2">
                    21 clientes
                  </h3>

                </div>

              </div>

            </div>

          </div>

          <div />

        </div>

      </div>

    </section>
  );
}