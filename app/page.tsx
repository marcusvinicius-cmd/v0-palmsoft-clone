import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { AreasOverview } from "@/components/areas-overview"
import { Problems } from "@/components/problems"
import { VerticalCards } from "@/components/vertical-cards"
import { WhyPalmsoft } from "@/components/why-palmsoft"
import { Testimonials } from "@/components/testimonials"
import { Strategy } from "@/components/strategy"
import { HowWeWork } from "@/components/how-we-work"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <AreasOverview />
        <Problems />
        <VerticalCards />
        <WhyPalmsoft />
        <HowWeWork />
        <Testimonials />
        <Strategy />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
