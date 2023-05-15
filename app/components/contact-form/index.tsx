'use client'

import { HiArrowNarrowRight } from "react-icons/hi";
import { Button } from "../button";
import { SectionTitle } from "../section-title";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500)
})

type ContactFormData = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
  const {handleSubmit, register, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = (data: ContactFormData) => {
    console.log(data)
    reset()
  }

  return (
    <section id="contact" className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-[420px] max-auto">
      <SectionTitle 
      subtitle="contato"
      title="Vamos trabalhar juntos? Entre em contato"
      className="item-center text-center"
      />

      <form 
      className="mt-12 w-full flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
      >
        <input 
          placeholder="Nome"
          className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-400"
          {...register('name')}
        />

        <input 
          placeholder="Email"
          type="email"
          className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-400"
          {...register('email')}
        />

        <textarea
          placeholder="Mensagem"
          className=" resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-400"
          max-length={500}
          {...register('message')}
        />

        <Button className="w-max mx-auto mt-6 shadow-sm">
          Enviar Mensagem
          <HiArrowNarrowRight size={18} />
        </Button>

      </form>
      </div>
    </section>
  )
}