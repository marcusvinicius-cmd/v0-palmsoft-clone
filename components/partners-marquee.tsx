const partners = [
  { name: "WEG", file: "weg" },
  { name: "Ambev", file: "ambev" },
  { name: "Sebrae", file: "sebrae" },
  { name: "Tigre", file: "tigre" },
  { name: "Sicoob", file: "sicoob" },
  { name: "Flamengo", file: "flamengo" },
  { name: "CTG Brasil", file: "ctg-brasil" },
  { name: "Amaggi", file: "amaggi" },
  { name: "Marisol", file: "marisol" },
  { name: "Vialaser", file: "vialaser" },
  { name: "AltoQi", file: "alto-qi" },
  { name: "AMCRED-SUL", file: "amcred" },
  { name: "GAM", file: "gam" },
  { name: "Data Tech ACATE", file: "acate-datatech" },
  { name: "RD Resultados Digitais", file: "rd-resultados-digitais" },
  { name: "Dot", file: "dot" },
  { name: "Neoway", file: "neoway" },
  { name: "Nexxera", file: "nexxera" },
  { name: "FIESC", file: "fiesc" },
  { name: "SESI", file: "sesi" },
  { name: "Bistek", file: "bistek" },
  { name: "Herval", file: "herval" },
  { name: "Mormaii", file: "mormaii" },
  { name: "Brognoli", file: "brognoli" },
  { name: "Rockfeller", file: "rockfeller" },
  { name: "Habitat", file: "habitat" },
  { name: "Imperatriz", file: "imperatriz" },
  { name: "Bittencourt", file: "bittencourt" },
  { name: "Plurio", file: "plurio" },
  { name: "Mowa", file: "mowa" },
  { name: "Bewiki", file: "bewiki" },
  { name: "Biorc", file: "biorc" },
  { name: "Ecom", file: "ecom" },
  { name: "Pincred", file: "pincred" },
  { name: "Banco da Família", file: "banco-da-familia" },
  { name: "Banco Hoje", file: "banco-hoje" },
  { name: "Accredito", file: "accredito" },
]

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-14 pr-14"
      aria-hidden={ariaHidden}
    >
      {partners.map((p, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`${p.file}-${i}`}
          src={`/${p.file}.svg`}
          alt={ariaHidden ? "" : p.name}
          className="h-11 w-auto shrink-0 opacity-90 transition-opacity hover:opacity-100 sm:h-11"
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  )
}

export function PartnersMarquee() {
  return (
    <div
      aria-label="Clientes e parceiros que confiam na PalmSoft"
      className="group relative flex mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <div className="flex w-max animate-[marquee_50s_linear_infinite] group-hover:paused motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:gap-x-14 motion-reduce:px-14">
        <LogoRow />
        <LogoRow ariaHidden />
      </div>
    </div>
  )
}
