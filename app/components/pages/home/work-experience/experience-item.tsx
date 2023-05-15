import { TechBadge } from "@/app/components/tech-badge"
import Image from "next/image"

export const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
          width={40}
          height={40}
          className="rounded-full"
          src={'/images/logo-resource-it.png'}
          alt="Logo Resource It"
          />
        </div>

        <div className="h-full w-[1px] bg-gray-800" />
      </div>

      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a 
          href="https://www.linkedin.com/company/resource-it-solutions/mycompany/verification/"
          target="_blank"
          className="text-gray-500 hover:text-emerald-500 transition-colors">
            @ ResourceIT
          </a>
          <h4 className="text-gray-300">Analista de Suporte Junior N2</h4>
          <span className="text-gray-500">jan 2014 • O momento • (9 anos e 5 meses) </span>
          <p className="text-gray-400">
          Alocado em Cliente - <strong className="text-gray-200">Umicore Guarulhos</strong>.
          Experiência na operacionalização e manutenção de sistemas de computadores, monitorando o desempenho dos aplicativos, garantindo o melhor desempenho deles.
          Habilidade na configuração dos computadores (Windows), aplicativos do próprio cliente e telefonia móvel (iPhone, Android e Windows Phone).
          Realização de atendimento aos clientes e usuários, orientando na utilização e realizando a manutenção de software como: SAP, Pacote Office, aplicativos da receita entre outros.
          Responsável pela abertura de chamados e o direcionamento dos chamados abertos pelos usuários através da ferramenta Solman do SAP.
          Responsável pelo atendimento remoto e soluções da maioria dos chamados em primeiro nível (N1), onde as solicitações são feitas via telefone, Solman e/ou e-mail.
          Responsável pela solução de chamados em segundo nível (N2), atendendo os chamados pessoalmente na empresa, através de chamados enviados pela equipe de N1.
          </p>
        </div>

        <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold">Competências</p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
          <TechBadge name="Windows" />
          <TechBadge name="Iphone" />
          <TechBadge name="Android" />
          <TechBadge name="Suporte" />
          <TechBadge name="Hardware" />
          <TechBadge name="Redes" />
          <TechBadge name="ITIL" />
          <TechBadge name="N1" />
          <TechBadge name="N2" />
        </div>
      </div>
    </div>
  )
}