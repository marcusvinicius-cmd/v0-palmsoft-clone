"use client"

import { useLanguage } from "@/lib/i18n/context"
import { withBasePath } from "@/lib/base-path"

const partners = [
  { name: "WEG", file: "weg.svg" },
  { name: "Ambev", file: "ambev.svg" },
  { name: "Acatemanufatura", file: "acatemanufatura.png" },
  { name: "Sebrae", file: "sebrae.svg" },
  { name: "Tigre", file: "tigre.svg" },
  { name: "Sicoob", file: "sicoob.svg" },
  { name: "Flamengo", file: "flamengo.svg" },
  { name: "CTG Brasil", file: "ctg-brasil.svg" },
  { name: "Amaggi", file: "amaggi.svg" },
  { name: "Marisol", file: "marisol.svg" },
  { name: "Vialaser", file: "vialaser.svg" },
  { name: "AltoQi", file: "alto-qi.svg" },
  { name: "AMCRED-SUL", file: "amcred.svg" },
  { name: "GAM", file: "gam.svg" },
  { name: "Data Tech ACATE", file: "acate-datatech.svg" },
  { name: "RD Resultados Digitais", file: "rd-resultados-digitais.svg" },
  { name: "Dot", file: "dot.svg" },
  { name: "Neoway", file: "neoway.svg" },
  { name: "Nexxera", file: "nexxera.svg" },
  { name: "FIESC", file: "fiesc.svg" },
  { name: "SESI", file: "sesi.svg" },
  { name: "Bistek", file: "bistek.svg" },
  { name: "Herval", file: "herval.svg" },
  { name: "Mormaii", file: "mormaii.svg" },
  { name: "Brognoli", file: "brognoli.svg" },
  { name: "Rockfeller", file: "rockfeller.svg" },
  { name: "Habitat", file: "habitat.svg" },
  { name: "Imperatriz", file: "imperatriz.svg" },
  { name: "Bittencourt", file: "bittencourt.svg" },
  { name: "Plurio", file: "plurio.svg" },
  { name: "Mowa", file: "mowa.svg" },
  { name: "Bewiki", file: "bewiki.svg" },
  { name: "Biorc", file: "biorc.svg" },
  { name: "Ecom", file: "ecom.svg" },
  { name: "Pincred", file: "pincred.svg" },
  { name: "Banco da Família", file: "banco-da-familia.svg" },
  { name: "Banco Hoje", file: "banco-hoje.svg" },
  { name: "Accredito", file: "accredito.svg" },
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
          src={withBasePath(`/${p.file}`)}
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
  const { t } = useLanguage()
  return (
    <div
      aria-label={t.partnersMarquee.ariaLabel}
      className="group relative flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <div className="flex w-max animate-[marquee_50s_linear_infinite] group-hover:paused motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:gap-x-14 motion-reduce:px-14">
        <LogoRow />
        <LogoRow ariaHidden />
      </div>
    </div>
  )
}
