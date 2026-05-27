export default function Technologies() {
  return (
    <section
        id="tecnologias"
        className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-[#f8fbff]
        pt-40
        pb-20
      "
    >

      <div className="text-center">

        <span
          className="
            uppercase
            tracking-[0.28em]
            text-[#7f8aa3]
            text-xs
            font-semibold
          "
        >
          Escopo
        </span>

        <h1
          className="
            text-[42px]
            lg:text-[58px]
            font-bold
            text-[#004aad]
            mt-6
          "
        >
          Tecnologias
        </h1>

        <p
          className="
            text-[#5f6470]
            text-[18px]
            leading-[2]
            mt-6
            max-w-[620px]
          "
        >
          Página em desenvolvimento para apresentação
          das tecnologias utilizadas no projeto QuePeça.
        </p>

      </div>

    </section>
  );
}