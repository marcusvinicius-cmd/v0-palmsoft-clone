const pillars = [
  {
    phase: "Planejamento",
    title: "Antecipatório.",
    body: "Incorpora um processo contínuo de aprendizagem, combinando-o com a participação e o envolvimento efetivo dos membros da organização, a partir de uma visão holística. O conhecimento do negócio se combina de forma sinérgica e contínua com o conhecimento em tecnologia no processo de planejamento.",
  },
  {
    phase: "Desenvolvimento",
    title: "Ágil.",
    body: "As metodologias ágeis já nasceram com a finalidade de aliviar a forma de lidar com problemas complicados. Avaliando constantemente o grau de incerteza e complexidade das demandas e conhecendo o negócio, é possível lidar com a complexidade com excelentes resultados.",
  },
  {
    phase: "Implementação Contínua",
    title: "Antifrágil.",
    body: "Para inovar, evoluir e beneficiar-se com choques e mudanças, é preciso adotar uma estratégia de construção contínua de soluções, que se integram a ecossistemas inovadores e que se fortalecem sob estresse.",
  },
]

export function Strategy() {
  return (
    <section id="estrategia" className="bg-[#070f1c] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-14 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#4d9fff]">
            Estratégia A³
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Antecipatório, Ágil e Antifrágil
          </h2>
        </header>

        <div className="grid gap-10 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.phase} className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-medium text-white">{p.phase}</h3>
              <p className="mt-1 text-2xl font-semibold text-[#4d9fff]">
                {p.title}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
