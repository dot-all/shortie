import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Questions() {
  return (
    <article className="w-11/12 sm:w-10/12 mx-auto sm:min-h-screen flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mx-auto mb-8" >Preguntas frecuentes</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>¿Qué es un acortador de URLs?</AccordionTrigger>
          <AccordionContent>
            Un acortador de URLs es una herramienta en línea que permite convertir una URL larga en una versión más corta y manejable. Estos servicios son útiles en situaciones donde se necesita compartir un enlace de manera más concisa, como en redes sociales, mensajes de texto o correos electrónicos, donde los caracteres están limitados.
            <br /> <br />
            Pero, shortie no es solo un acortador de URL, es una estrategia.
            <br /> <br />
            Úsalo para: 
            <br /> <span className="font-medium text-[#9D00A3]">1.</span> Comprimir URLs largas en publicaciones de redes sociales.
            <br /> <span className="font-medium text-[#9D00A3]">2.</span> Mejorar la estética de tus emails y boletines informativos.
            <br /> <span className="font-medium text-[#9D00A3]">2.</span> Crear códigos QR para facilitar el acceso a tu contenido.
            <br /> <span className="font-medium text-[#9D00A3]">4.</span> Rastrear el tráfico y las conversiones de tus campañas de marketing.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>¿Cómo funciona un acortador de URLs?</AccordionTrigger>
          <AccordionContent>
            Un acortador de URLs funciona de la siguiente manera: <br /><br />
            <span className="font-medium text-[#9D00A3]">1.</span> Ingresas la URL larga que deseas acortar. <br />
            Pegas o escribes la URL completa en el campo de texto del acortador de URLs.
            <br />
            <span className="font-medium text-[#9D00A3]">2.</span> El acortador genera una URL corta equivalente. <br />
            El acortador utiliza un algoritmo para convertir la URL larga en una URL corta. La URL corta suele ser una combinación de letras y números aleatorios.
            <br />
            <span className="font-medium text-[#9D00A3]">3.</span> Al hacer clic en la URL corta, se redirige al usuario a la URL original. <br />
            Cuando un usuario hace clic en la URL corta, es redirigido automáticamente a la página web o el archivo que se encuentra detrás de la URL original.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>¿Qué es un código QR?</AccordionTrigger>
          <AccordionContent>
            Un código QR (del inglés Quick Response, respuesta rápida) es un código de barras bidimensional que puede ser leído por un smartphone o un dispositivo móvil con cámara. Los códigos QR se utilizan para almacenar información, como una URL, un número de teléfono, un mensaje de texto o una dirección de correo electrónico.
            <br /><br />
            Los códigos QR se utilizan para una variedad de propósitos, como:
            <br />
            <br /><span className="font-medium text-[#9D00A3]">1.</span> Compartiendo información: Se pueden usar para compartir una URL, un número de teléfono, un mensaje de texto o una dirección de correo electrónico.
            <br /><span className="font-medium text-[#9D00A3]">2.</span> Acceso a contenido: Se pueden usar para acceder a contenido exclusivo, como un video o un sitio web.
            <br /><span className="font-medium text-[#9D00A3]">3.</span> Pagos: Se pueden usar para realizar pagos móviles.
            <br /><span className="font-medium text-[#9D00A3]">4.</span> Marketing: Se pueden usar para promocionar productos o servicios.
            <br /><span className="font-medium text-[#9D00A3]">5.</span> Seguimiento de datos: Se pueden usar para rastrear el tráfico o las conversiones.

          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>¿Qué beneficios tiene utilizar shortie?</AccordionTrigger>
          <AccordionContent>
            Usar shortie puede ayudarte a mejorar la gestión de tus URLs, aumentar el tráfico a tu sitio web o blog, interactuar con tu audiencia y optimizar tus estrategias de marketing. Esto, ofrece una serie de beneficios, entre los que se incluyen:
            <br />
            <br /><span className="font-medium text-[#9D00A3]">1.</span> Facilitar el intercambio de enlaces: Los enlaces largos pueden ser difíciles de recordar y pueden ocupar mucho espacio en plataformas de redes sociales o mensajes de texto. Al acortarlos, se vuelven más manejables y fáciles de compartir.
            <br /><span className="font-medium text-[#9D00A3]">2.</span> Mejorar la estética de los enlaces: Los enlaces acortados son más limpios y estéticamente agradables que los enlaces largos, lo que puede mejorar la apariencia de su contenido en línea.
            <br /><span className="font-medium text-[#9D00A3]">3.</span> Aumenta la tasa de conversión: Los códigos QR pueden aumentar la tasa de conversión al proporcionar a los usuarios una forma rápida y conveniente de acceder a información adicional, realizar una compra o completar una acción específica.
            <br /><span className="font-medium text-[#9D00A3]">4.</span> Versatilidad en la promoción: Los códigos QR se pueden utilizar en una variedad de materiales de marketing, como carteles, folletos, tarjetas de visita y vallas publicitarias, lo que los convierte en una herramienta versátil para promocionar productos, servicios o eventos.
            <br /><span className="font-medium text-[#9D00A3]">5.</span> Fomenta la interactividad: Los códigos QR invitan a los usuarios a interactuar con su contenido de una manera más activa, lo que puede aumentar el compromiso y la participación del público objetivo.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>¿Es shortie gratis?</AccordionTrigger>
          <AccordionContent>
            <span className="font-medium text-[#9D00A3]">Si.</span> Con Shortie, tienes la garantía de que nuestro servicio es completamente gratuito. Disfruta de todas sus funcionalidades sin necesidad de desembolsar ningún tipo de costo, permitiéndote aprovechar al máximo todas las herramientas y beneficios que ofrecemos sin restricciones económicas.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </article>
  )
}
