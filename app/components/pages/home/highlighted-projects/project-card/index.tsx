import { Link } from "@/app/components/link"
import { TechBadge } from "@/app/components/tech-badge"
import { Project } from "@/app/types/projects"
import Image from "next/image"
import { FaReact } from "react-icons/fa"
import { HiArrowNarrowRight } from "react-icons/hi"

type ProjectCardProps = {
  project: Project
}

export const ProjectCard = ({ project }:ProjectCardProps) => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image 
        width={420} 
        height={304} 
        src={project.thumbnail.url} 
        alt={`Thumbnail do projeto ${project.title}`}
        className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div className="lg:py-[18px]">
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <FaReact 
          size={20}
          className="text-emerald-400"
          />
          {project.title}
        </h3>

        <p className="text-gray-400 my-6">
          {project.shortDescription}
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          {project.technologies.map(tech => (
            <TechBadge key={`${project.title}-tech-${tech.name}`} name={tech.name} />
          ))}
        </div>

        <Link href={`/projects/${project.slug}`}>
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}