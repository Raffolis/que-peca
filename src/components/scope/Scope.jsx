export default function Scope() {
  return (
    <section
      id="escopo"
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

      {/* BACKGROUND BLUR */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-[-220px] right-[-220px] w-[620px] h-[620px] bg-[#dff7fa] rounded-full blur-[140px] opacity-30" />

        <div className="absolute bottom-[-260px] left-[-220px] w-[520px] h-[520px] bg-[#edf9ff] rounded-full blur-[120px] opacity-25" />

      </div>

      {/* CONTAINER PRINCIPAL */}
      <div className="relative z-10 w-full max-w-[1700px] mx-auto px-14 lg:px-20">

        <div className="grid grid-cols-[1.4fr_1150px_0.6fr] gap-10 items-start">

          <div></div>

          {/* CONTEÚDO */}
          <div className="w-full">

            {/* TAG */}
            <span className="uppercase tracking-[0.28em] text-[#7f8aa3] text-xs font-semibold">
              Escopo
            </span>

            {/* TÍTULO */}
            <h2 className="text-[35px] lg:text-[50px] leading-[1.5] font-bold text-[#004aad] mt-5 max-w-[1100px]">
              Estrutura funcional da plataforma QuePeça.
            </h2>

            {/* TEXTO */}
            <div className="mt-24 max-w-[1120px]">

              <p className="text-[#4f5665] text-[18px] leading-[2.4] text-justify">

                O escopo do QuePeça define os principais módulos,
                funcionalidades e estruturas responsáveis pelo
                funcionamento da plataforma, permitindo que usuários,
                desmanches e anúncios sejam gerenciados de forma
                centralizada, moderna e eficiente.

              </p>

            </div>

            <div className="grid grid-cols-3 gap-10 max-w-[1080px] mx-auto mt-24">

            {/* CARD 1 */}
            <div className="
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
                Usuários
                </h3>

                <p className="text-[#5f6470] text-[15px] leading-[2.1] mt-6">

                Cadastro, autenticação e gerenciamento
                de perfis dos usuários da plataforma.

                </p>

            </div>

            {/* CARD 2 */}
            <div className="
                flex
                flex-col
                justify-center
                items-center
                px-12
                py-10
                rounded-[18px]
                bg-gradient-to-r
                from-[#5de0e6]
                to-[#004aad]
                text-white
                shadow-[0_16px_45px_rgba(0,74,173,0.16)]
                text-center
            ">

                <h3 className="text-[19px] leading-[1.3] font-bold">
                Desmanches
                </h3>

                <p className="text-[15px] leading-[2.1] mt-6 opacity-95">

                Controle de empresas cadastradas
                e anúncios publicados.

                </p>

            </div>

            {/* CARD 3 */}
            <div className="
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
                Peças Automotivas
                </h3>

                <p className="text-[#5f6470] text-[15px] leading-[2.1] mt-6">

                Cadastro de peças, categorias,
                disponibilidade e estoque.

                </p>

            </div>

            {/* CARD 4 */}
            <div className="
                flex
                flex-col
                justify-center
                items-center
                px-12
                py-10
                rounded-[18px]
                bg-gradient-to-r
                from-[#5de0e6]
                to-[#004aad]
                text-white
                shadow-[0_16px_45px_rgba(0,74,173,0.16)]
                text-center
            ">

                <h3 className="text-[19px] leading-[1.3] font-bold">
                Pesquisa de Peças
                </h3>

                <p className="text-[15px] leading-[2.1] mt-6 opacity-95">

                Busca inteligente com filtros,
                localização e disponibilidade
                das peças automotivas.

                </p>

            </div>

            {/* CARD 5 */}
            <div className="
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
                Controle de Anúncios
                </h3>

                <p className="text-[#5f6470] text-[15px] leading-[2.1] mt-6">

                Publicação, atualização
                e gerenciamento dos anúncios
                disponíveis na plataforma.

                </p>

            </div>

            {/* CARD 6 */}
            <div className="
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
                Dashboard Administrativo
                </h3>

                <p className="text-[#5f6470] text-[15px] leading-[2.1] mt-6">

                Administração centralizada
                do sistema e gerenciamento
                operacional da plataforma.

                </p>

            </div>

            </div>

          </div>

          <div></div>

        </div>

      </div>

    </section>
  );
}