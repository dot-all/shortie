import Card from "../common/Card"

const features = [
  {
    title: 'Gratis',
    description: 'Es un servicio totalmente gratuito para todos los usuarios, lo que significa que puedes disfrutar de todas sus funciones y beneficios sin tener que pagar ningún cargo adicional.',
    icon: 'icons/card-outline.svg'
  },
  {
    title: 'Experiencia de usuario',
    description: 'Optimiza tu presencia en línea con SHORTIE y garantiza una experiencia de usuario de primera categoría mediante nuestras herramientas especializadas.',
    icon: 'icons/happy-outline.svg'
  },
  {
    title: 'Eficiencia operativa',
    description: 'Optimiza tu tiempo y recursos al acortar tus enlaces, permitiéndote realizar tareas de manera más rápida y eficiente y dedicar más atención a otras actividades.',
    icon: 'icons/cog-outline.svg'
  },
  {
    title: 'Servicio confiable',
    description: 'Nos esforzamos por ofrecer servicios confiables y sin interrupciones, adaptados a las necesidades de nuestros clientes en un mundo digital en constante cambio.',
    icon: 'icons/shield-outline.svg'
  },
]

export default function Achievements() {
  return (
    <article className="min-h-screen w-11/12 sm:w-10/12 mx-auto bg-gradient-to-b from-[#9D00A3]/10 via-white flex flex-col items-center my-20" id="achievements">
      <section className="w-10/12 mx-auto flex flex-col items-center gap-8 mb-8">
        <span className="text-sm font-bold mt-32 sm:mt-40 text-[#9D00A3]">¿POR QUÉ SHORTIE?</span>
        <h2 className="text-3xl sm:text-4xl font-bold text-center">Porque usar nuestro servicio</h2>
        <p className="text-center text-base md:text-lg w-4/5 md:w-1/2">Desata tu creatividad al acortar tus enlaces. Descubre un mundo de posibilidades con nuestras soluciones, donde la innovación es la clave.</p>
      </section>
      <section className="flex flex-row w-10/12 mx-auto flex-wrap">
        {
          features.map((feature, index) => ( <Card key={index} title={feature.title} description={feature.description} icon={feature.icon}/> ))
        }
      </section>
    </article>
  )
}
