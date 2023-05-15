import { Link } from "@/app/components/link"
import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"
import { FaReact } from "react-icons/fa"
import { HiArrowNarrowRight } from "react-icons/hi"

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image 
        width={420} 
        height={304} 
        src={'/images/graphqlproject.png'} 
        alt="Thumbmail do projeto Graphql Project"
        className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <FaReact 
          size={20}
          className="text-emerald-400"
          />
          Graphl
        </h3>

        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora impedit saepe cumque rem ipsa ut a labore deleniti veniam enim vero, ipsum quae perferendis itaque odio voluptatibus voluptate recusandae quidem dolorem. Neque ad ullam consequatur eveniet optio libero at perspiciatis tempore doloremque aliquid. Nihil commodi iste provident illum consequuntur? Consequatur.
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
        </div>

        <Link href="/projects/book-wise">
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}