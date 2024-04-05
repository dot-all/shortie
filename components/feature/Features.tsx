import Card from "../common/Card"

const features = [
  {
    title: 'Acortador de URL',
    description: 'Es un potente acortador de URL que no solo te permite reducir tus enlaces, sino que también ofrece estadísticas sobre su uso.',
    icon: 'icons/unlink-outline.svg'
  },
  {
    title: 'Estadística',
    description: 'Puedes evaluar el impacto de tus enlaces mediante el seguimiento de las interacciones que han generado a lo largo de su vida útil.',
    icon: 'icons/bar-chart-outline.svg'
  },
  {
    title: 'Creación código QR',
    description: 'Va más allá del acortamiento de enlaces al permitirte crear códigos QR, mejorando así la experiencia del usuario.',
    icon: 'icons/qr-code-outline.svg'
  },
]

export default function Features() {
  return (
    <article className="min-h-screen w-11/12 sm:w-10/12 mx-auto bg-gradient-to-b from-[#121180]/10 via-white flex flex-col items-center mt-20" id="features">
      <section className="w-10/12 mx-auto flex flex-col items-center gap-8 mb-8">
        <span className="text-sm font-bold mt-32 sm:mt-40 text-[#121180]">¿SHORTIE?</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-center">Despídete de los enlaces largos</h2>
        <p className="text-center text-base md:text-lg w-4/5 md:w-1/2">Acorta tus enlaces y libera tu creatividad. Explora un mundo de posibilidades con nuestras soluciones</p>
      </section>
      <section className="flex flex-row w-10/12 mx-auto flex-wrap">
        {
          features.map((feature, index) => ( <Card key={index} title={feature.title} description={feature.description} icon={feature.icon}/> ))
        }
      </section>
    </article>
  )
}
