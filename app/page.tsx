import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Strategy } from "@/components/strategy"
import { Team } from "@/components/team"
import { Areas } from "@/components/areas"
import { Cases } from "@/components/cases"
import { Verticals } from "@/components/verticals"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Strategy />
        <Team />
        <Areas />
        <Cases />
        <Verticals />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
