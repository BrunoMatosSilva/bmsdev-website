import { HeroSection } from "./components/pages/home/hero-section";
import { HighlightedProjects } from "./components/pages/home/highlighted-projects";
import { KnowsTechs } from "./components/pages/home/known-techs";
import { WorkExperience } from "./components/pages/home/work-experience";
import { HomePageData } from "./types/page-info";
import { fetchHyGraphQuery } from "./utils/fetch-hygraph-query";

const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query PageHomeQuery {
    page(where: {slug: "home"}) {
      introduction {
        raw
      }
      technologies {
        name
      }
      profilePicture {
        url
      }
      socials {
        url
        iconSvg
      }
      knownTechs {
        iconSvg
        name
        startDate
      }
      highlightProjects {
        slug
        thumbnail {
          url
        }
        title
        shortDescription
        technologies {
          name
        }
      }
    }
  }
`

  return fetchHyGraphQuery(
    query,
    60 * 60 * 24 // 24 hours
  )
}

export default async function Home() {
  const {page: pageData} = await getPageData();

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnowsTechs techs={pageData.knownTechs}/>
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperience />
    </>
  )
}
