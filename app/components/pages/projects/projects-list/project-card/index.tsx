import Image from "next/image"

export const ProjectCard = () => {
  return (
    <div className="rounded-lg h-[436px] flex flex-col bg-gray-800 overflow-hidden border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group">
      <div className="w-full h-48 overflow-hidden">
        <Image
        width={380}
        height={200}
        src={'/images/graphqlproject.png'}
        alt="Thumbnail do projeto Graphql"
        unoptimized
        className="w-full h-full object-cover duration-500 transition-all group-hover:scale-110"
        />
      </div>

      <div className="flex-1  flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-colors">Graphql</strong>
        <p className="mp-2 text-gray-400 line-clamp-4">
        GraphQL Aulas Grátis e um Web App com o intuito de disponibilizar aulas gratuitas com foco em GraphQl ministrada pelo professor Matheus Silva.
        </p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          React, Typescript, Tailwind, Handless Ui, GraphQL, Apollo 
        </span>
      </div>
    </div>
  )
}