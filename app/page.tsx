import { HeroSection } from "./components/pages/home/hero-section";
import { KnowsTechs } from "./components/pages/home/known-techs";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnowsTechs />
    </>
  )
}
