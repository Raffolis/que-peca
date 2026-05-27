import uml from "../../assets/uml.jpeg";

export default function Technologies() {

  const methodologies = [
    {
      title: "Scrum",
      description:
        "Metodologia ágil utilizada para organização das sprints, backlog e desenvolvimento incremental do projeto.",
      icon: "⚡",
    },

    {
      title: "UML",
      description:
        "Modelagem utilizada para representar classes, relacionamentos e estrutura geral do sistema.",
      icon: "📐",
    },

    {
      title: "Orientação a Objetos",
      description:
        "Aplicação de classes, atributos, métodos e encapsulamento na estrutura do sistema.",
      icon: "🧩",
    },

    {
      title: "MVP",
      description:
        "Construção do Produto Mínimo Viável para validação inicial da plataforma QuePeça.",
      icon: "🚀",
    },

    {
      title: "Product Backlog",
      description:
        "Organização e priorização das funcionalidades do sistema com foco nas entregas principais.",
      icon: "📋",
    },

    {
      title: "Story Points",
      description:
        "Estimativa de esforço e complexidade utilizada durante o planejamento das sprints.",
      icon: "📊",
    },
  ];

  return (
    <section
      id="tecnologias"
      className="
        scroll-mt-30
        relative
        py-32
        bg-[#f8fbff]
        overflow-hidden
      "
    >

      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            bottom-[-200px]
            left-[-200px]
            w-[500px]
            h-[500px]
            bg-[#dff7fa]
            rounded-full
            blur-[140px]
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
            grid-cols-[0.2fr_1fr_0.2fr]
          "
        >

          <div />

          <div>

            <div
              className="
                grid
                grid-cols-[1.15fr_420px]
                gap-12
                items-start
              "
            >

              <div>

                <div className="max-w-[760px]">

                  <span
                    className="
                      uppercase
                      tracking-[0.25em]
                      text-[#7f8aa3]
                      text-[11px]
                      font-semibold
                    "
                  >
                    Metodologias Utilizadas
                  </span>

                  <h2
                    className="
                      mt-5
                      text-[32px]
                      lg:text-[46px]
                      leading-[1.1]
                      font-bold
                      text-[#004aad]
                    "
                  >
                    Engenharia de software aplicada no desenvolvimento do QuePeça.
                  </h2>

                  <p
                    className="
                      mt-6
                      text-[#5f6470]
                      text-[16px]
                      leading-[1.9]
                      max-w-[720px]
                    "
                  >
                    O projeto foi estruturado utilizando metodologias ágeis,
                    modelagem UML e conceitos de orientação a objetos para
                    garantir organização, escalabilidade e eficiência.
                  </p>

                </div>

                <div
                  className="
                    mt-14
                    grid
                    grid-cols-2
                    gap-6
                  "
                >

                  {methodologies.map((item, index) => (

                    <div
                      key={index}
                      className="
                        group
                        rounded-[28px]
                        border
                        border-[#dbe8f5]
                        bg-white/80
                        backdrop-blur-xl
                        p-7
                        hover:-translate-y-2
                        hover:shadow-[0_20px_40px_rgba(0,74,173,0.08)]
                        transition-all
                        duration-500
                      "
                    >

                      <div
                        className="
                          w-14
                          h-14
                          rounded-[18px]
                          bg-gradient-to-r
                          from-[#5de0e6]
                          to-[#004aad]
                          flex
                          items-center
                          justify-center
                          text-white
                          text-2xl
                          shadow-[0_10px_25px_rgba(0,74,173,0.18)]
                        "
                      >
                        {item.icon}
                      </div>

                      <h3
                        className="
                          mt-7
                          text-[22px]
                          font-semibold
                          text-[#004aad]
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-4
                          text-[#5f6470]
                          text-[14px]
                          leading-[1.9]
                        "
                      >
                        {item.description}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

              <div
                className="
                  rounded-[32px]
                  bg-gradient-to-br
                  from-[#5de0e6]
                  to-[#004aad]
                  p-8
                  text-white
                  shadow-[0_25px_60px_rgba(0,74,173,0.18)]
                  sticky
                  top-32
                "
              >

                <span
                  className="
                    uppercase
                    tracking-[0.22em]
                    text-[11px]
                    font-semibold
                    opacity-80
                  "
                >
                  UML
                </span>

                <h3
                  className="
                    mt-4
                    text-[30px]
                    leading-[1.2]
                    font-bold
                  "
                >
                  Modelagem Orientada a Objetos
                </h3>

                <p
                  className="
                    mt-5
                    text-[15px]
                    leading-[1.9]
                    opacity-90
                  "
                >
                  O sistema foi modelado utilizando classes e relacionamentos
                  entre usuários, peças, anúncios e desmanches.
                </p>

                <div
                  className="
                    mt-10
                    rounded-[24px]
                    overflow-hidden
                    border
                    border-white/10
                    bg-white/10
                    backdrop-blur-xl
                    p-4
                  "
                >

                  <img
                    src={uml}
                    alt="Diagrama UML"
                    className="
                      w-full
                      rounded-[18px]
                      object-cover
                      shadow-[0_15px_35px_rgba(0,0,0,0.18)]
                    "
                  />

                </div>

              </div>

            </div>

            <div
              className="
                mt-24
                rounded-[32px]
                border
                border-[#dbe8f5]
                bg-white
                p-8
                shadow-[0_20px_45px_rgba(0,74,173,0.05)]
              "
            >

              <span
                className="
                  uppercase
                  tracking-[0.22em]
                  text-[#7f8aa3]
                  text-[11px]
                  font-semibold
                "
              >
                Scrum
              </span>

              <h3
                className="
                  mt-4
                  text-[30px]
                  font-bold
                  text-[#004aad]
                "
              >
                Product Backlog
              </h3>

              <p
                className="
                  mt-4
                  text-[#5f6470]
                  text-[15px]
                  leading-[1.9]
                  max-w-[700px]
                "
              >
                Organização das funcionalidades utilizando backlog,
                prioridades e Story Points para gerenciamento ágil do projeto.
              </p>

              <div className="mt-8 overflow-hidden rounded-[22px] border border-[#dbe8f5]">

                <table className="w-full">

                  <thead className="bg-[#f4f9ff]">

                    <tr>

                      <th className="text-left px-6 py-4 text-[#004aad] text-sm">
                        ID
                      </th>

                      <th className="text-left px-6 py-4 text-[#004aad] text-sm">
                        Funcionalidade
                      </th>

                      <th className="text-left px-6 py-4 text-[#004aad] text-sm">
                        Story Points
                      </th>

                    </tr>

                  </thead>

                  <tbody>

                    <tr className="border-t border-[#edf2f7]">

                      <td className="px-6 py-5 text-sm text-[#5f6470]">
                        PB01
                      </td>

                      <td className="px-6 py-5 text-sm text-[#5f6470]">
                        Cadastro de usuários
                      </td>

                      <td className="px-6 py-5 text-sm font-semibold text-[#004aad]">
                        2
                      </td>

                    </tr>

                    <tr className="border-t border-[#edf2f7]">

                      <td className="px-6 py-5 text-sm text-[#5f6470]">
                        PB04
                      </td>

                      <td className="px-6 py-5 text-sm text-[#5f6470]">
                        Cadastro de peças
                      </td>

                      <td className="px-6 py-5 text-sm font-semibold text-[#004aad]">
                        5
                      </td>

                    </tr>

                    <tr className="border-t border-[#edf2f7]">

                      <td className="px-6 py-5 text-sm text-[#5f6470]">
                        PB05
                      </td>

                      <td className="px-6 py-5 text-sm text-[#5f6470]">
                        Pesquisa de peças
                      </td>

                      <td className="px-6 py-5 text-sm font-semibold text-[#004aad]">
                        5
                      </td>

                    </tr>

                    <tr className="border-t border-[#edf2f7]">

                      <td className="px-6 py-5 text-sm text-[#5f6470]">
                        PB08
                      </td>

                      <td className="px-6 py-5 text-sm text-[#5f6470]">
                        Controle de anúncios
                      </td>

                      <td className="px-6 py-5 text-sm font-semibold text-[#004aad]">
                        3
                      </td>

                    </tr>

                  </tbody>

                </table>

              </div>

            </div>

          </div>

          <div />

        </div>

      </div>

    </section>
  );
}