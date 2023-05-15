import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { KnowsTechs } from "./components/pages/home/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnowsTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  )
}
