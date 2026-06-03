export default function ScopeHero() {
  return (
    <section
      id="escopo"
      className="
        relative
        scroll-mt-40
        overflow-hidden
        bg-[#f8fbff]
        pt-40
        pb-48
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
            lg:grid-cols-[1fr_420px]
            gap-16
            items-start
            max-w-[1200px]
            mx-auto
          "
        >

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

            <span
              className="
                uppercase
                tracking-[0.25em]
                text-[#7f8aa3]
                text-xs
                font-semibold
                block
                mt-15
                mb-4
              "
            >
              Stakeholders
            </span>

            <div className="grid md:grid-cols-2 gap-4 mt-8 max-w-[700px]">

            <div className="bg-white border border-[#dbe8f5] rounded-[20px] p-5">
              Proprietários de veículos
            </div>

            <div className="bg-white border border-[#dbe8f5] rounded-[20px] p-5">
              Desmanches parceiros
            </div>

            <div className="bg-white border border-[#dbe8f5] rounded-[20px] p-5">
              Administrador da plataforma
            </div>

            <div className="bg-white border border-[#dbe8f5] rounded-[20px] p-5">
              Equipe de desenvolvimento
            </div>

        </div>

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
                  Modelo de negócio por assinatura
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
                mt-15
                p-8
                shadow-[0_30px_80px_rgba(0,0,0,0.12)]
              "
            >

              <div className="space-y-5">

                <div
                  className="
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
                    21 desmanches
                  </h3>

                </div>

<div className="pt-4">

  <p
    className="
      uppercase
      tracking-[0.25em]
      text-[#7f8aa3]
      text-xs
      font-semibold
      mb-4
    "
  >
    MVP
  </p>

  <div className="grid grid-cols-2 gap-3">

    <div
      className="
        rounded-[14px]
        border
        border-[#dbe8f5]
        bg-white
        p-3
        text-sm
        text-[#004aad]
        font-medium
      "
    >
      Cadastro e Login
    </div>

    <div
      className="
        rounded-[14px]
        border
        border-[#dbe8f5]
        bg-white
        p-3
        text-sm
        text-[#004aad]
        font-medium
      "
    >
      Cadastro de Desmanches e peças
    </div>

    <div
      className="
        rounded-[14px]
        border
        border-[#dbe8f5]
        bg-white
        p-3
        text-sm
        text-[#004aad]
        font-medium
      "
    >
     Pesquisa de Peças
    </div>

    <div
      className="
        rounded-[14px]
        border
        border-[#dbe8f5]
        bg-white
        p-3
        text-sm
        text-[#004aad]
        font-medium
      "
    >
      Anúncio de Peças
    </div>

  </div>

</div>                

              </div>

            </div>

          </div>

          <div />

        </div>

    <div
      className="
        mt-20
        grid
        grid-cols-[0.25fr_1.2fr_0.8fr_0.25fr]
        gap-16
      "
    >

      <div />

      <div className="col-span-2">

          <span
            className="
              uppercase
              tracking-[0.25em]
              text-[#7f8aa3]
              text-xs
              font-semibold
            "
          >
            Requisitos Funcionais
          </span>

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <div className="bg-white border border-[#dbe8f5] rounded-[20px] p-6">
              RF01 - Cadastro de usuários
            </div>

            <div className="bg-white border border-[#dbe8f5] rounded-[20px] p-6">
              RF02 - Cadastro de peças
            </div>

            <div className="bg-white border border-[#dbe8f5] rounded-[20px] p-6">
              RF03 - Pesquisa de peças
            </div>

            <div className="bg-white border border-[#dbe8f5] rounded-[20px] p-6">
              RF04 - Controle de anúncios
            </div>

            <div className="bg-white border border-[#dbe8f5] rounded-[20px] p-6">
              RF05 - Cadastro de desmanches
            </div>

            <div className="bg-white border border-[#dbe8f5] rounded-[20px] p-6">
              RF06 - Dashboard administrativo
            </div>

          </div>

          <span
            className="
              uppercase
              tracking-[0.25em]
              text-[#7f8aa3]
              text-xs
              font-semibold
              block
              mt-20
            "
          >
            Requisitos Não Funcionais
          </span>

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <div className="bg-white border border-[#dbe8f5] rounded-[20px] p-6">
              RNF01 - Sistema responsivo
            </div>

            <div className="bg-white border border-[#dbe8f5] rounded-[20px] p-6">
              RNF02 - Interface intuitiva
            </div>

            <div className="bg-white border border-[#dbe8f5] rounded-[20px] p-6">
              RNF03 - Segurança dos dados
            </div>

            <div className="bg-white border border-[#dbe8f5] rounded-[20px] p-6">
              RNF04 - Disponibilidade contínua
            </div>

          </div>

          <span
            className="
              uppercase
              tracking-[0.25em]
              text-[#7f8aa3]
              text-xs
              font-semibold
              block
              mt-20
            "
          >
            Casos de Uso
          </span>

          <div className="mt-8 overflow-hidden rounded-[24px] border border-[#dbe8f5] bg-white">

            <table className="w-full">

              <thead className="bg-[#f4f9ff]">

                <tr>

                  <th className="px-6 py-4 text-left text-[#004aad]">
                    Ator
                  </th>

                  <th className="px-6 py-4 text-left text-[#004aad]">
                    Ação
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-t border-[#edf2f7]">
                  <td className="px-6 py-5">Usuário</td>
                  <td className="px-6 py-5">Pesquisar peças</td>
                </tr>

                <tr className="border-t border-[#edf2f7]">
                  <td className="px-6 py-5">Usuário</td>
                  <td className="px-6 py-5">Solicitar orçamento</td>
                </tr>

                <tr className="border-t border-[#edf2f7]">
                  <td className="px-6 py-5">Desmanche</td>
                  <td className="px-6 py-5">Cadastrar peças</td>
                </tr>

                <tr className="border-t border-[#edf2f7]">
                  <td className="px-6 py-5">Desmanche</td>
                  <td className="px-6 py-5">Gerenciar anúncios</td>
                </tr>

              </tbody>

           </table>

          </div>

        </div>

        <div />

      </div>

      </div>

    </section>
  );
}