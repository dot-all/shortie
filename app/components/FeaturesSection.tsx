import Card from "./Card"

const features = [
  {
    title: 'Acortador de URL',
    description: 'SHORTIE es un potente acortador de URL que no solo te permite reducir tus enlaces, sino que también ofrece estadísticas sobre su uso, ayudándote a identificar áreas de interés.',
    border: true,
    icon: 'icons/link-outline.svg'
  },
  {
    title: 'Creación código QR',
    description: 'SHORTIE va más allá del acortamiento de enlaces al permitirte crear códigos QR, mejorando así la experiencia del usuario.',
    border: false,
    icon: 'icons/qr-code-outline.svg'
  },
  {
    title: 'Experiencia de usuario',
    description: 'Optimiza tu presencia en línea con SHORTIE y garantiza una experiencia de usuario de primera categoría mediante nuestras herramientas especializadas.',
    border: false,
    icon: 'icons/person-add-outline.svg'
  },
]

export default function FeaturesSection() {
  return (
    <article className="min-h-screen flex flex-col m:grid m:grid-rows-2 bg-[#1864FC]/5 l:pb-48 l:gap-y-28">
      <section className="mt-40 mb-20 m:mb-0 m:mt-0 w-11/12 m:w-10/12 mx-auto flex flex-col gap-2 items-center justify-end max-w-7xl">
        <h2 className="text-xl s:text-2xl m:text-3xl l:text-4xl font-bold">Despídete de los enlaces largos</h2>
        <p className="text-center">Acorta tus enlaces y libera tu creatividad. Explora un mundo de posibilidades con nuestras soluciones</p>
      </section>
      <section className="mb-20 m:mb-0 w-11/12 s:w-10/12 mx-auto flex flex-col m:flex-row gap-2 items-center justify-end max-w-7xl">
        {
          features.map((feature, index) => ( <Card key={index} title={feature.title} description={feature.description} border={feature.border} icon={feature.icon}/> ))
        }
      </section>
    </article>
  )
}
