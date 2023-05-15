import { SectionTitle } from "@/app/components/section-title"
import { KnownTech } from "./known-tech"
import { TbBrandNextjs } from "react-icons/tb"

export const KnowsTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="compoetências" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {Array.from({ length: 14}).map((_, index) => (
          <KnownTech key={index} tech={{
            icon: <TbBrandNextjs />,
            name: 'Next.js',
            startDate: '2021-01-01'
          }} />
        ))}
      </div>
    </section>
  )
}