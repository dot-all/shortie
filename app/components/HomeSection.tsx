import React, { useEffect, useRef, useState } from 'react'
import Form from './Form'
import Achievements from './Achievements'
import Image from 'next/image'
import { nanoid } from 'nanoid';
import { QRCode } from 'react-qrcode-logo';

interface Url {
  url: string;
  clicked: number;
  code?: string;
  date?: string;
}

export default function HomeSection() {

  const [data, setData] = useState<Url>();
  const [isLoading, setIsLoading] = useState(false);
  const canvasRef = useRef<QRCode>(null);
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  const [sessionToken, setSessionToken] = useState<string>();

  // Cada sesión debe tener su token, si no la posee, se crea una
  useEffect(() => {
    const token = localStorage.getItem("token-db-shortie");
    if(!token) {
      const token = nanoid(20);
      localStorage.setItem("token-db-shortie", token);
      setSessionToken(token);
    } else {
      setSessionToken(token);
    }
  }, [])

  // Si no posee token de sesión no es necesario obtener información desde la bd, porque no tiene registros.
  useEffect(() => {
    
    if (!sessionToken) return;
    setIsLoading(true);

    fetch(`/api`, {
        headers: {
          'sessionToken': `${sessionToken}`
        }
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, [sessionToken]);

  // Mongo retorna un formato de fecha 2024-03-29T23:24:48.667+00:00, es necesario formatear
  const formatDate = (dateString: string | undefined) => {
    if(!dateString) return;
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', options);
  };

  // Descargar canvas como png

  const handleDownloadQr = () => {
    const canvas = document.getElementById('QR') as HTMLCanvasElement;
    if (canvas) {
      const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `codigo_qr.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  }

  const handleCopyUrl = (text: string) => {
    navigator.clipboard.writeText(text);
  }

  return (
    <article className="w-full relative" style={{background: "linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(24,100,252,0.2) 20.4%, rgba(14,60,150,0.2) 100%)"}}>
      <section className="w-11/12 s:w-10/12 mx-auto flex flex-col items-center l:grid l:grid-cols-2 relative justify-between grid-auto-rows-min min-h-screen max-w-7xl">
        <h1 className="absolute left-0 top-4 text-2xl font-bold">SHORTIE</h1>
        <div className="flex flex-col col-start-1 row-start-3 mt-24 s:mt-44 mb-20 w-full s:w-11/12">
          <span className="bg-[#1864FC]/20 w-fit text-[#1864FC] rounded-full text-sm s:text-base py-2 px-4 s:py-3 s:px-8 mb-6">Hazlo realidad con un simple click.</span>
          <h2 className="text-4xl font-bold leading-tight mb-12">Todo para tus enlaces en <br /> un solo lugar.</h2>
          <p className="text-sm mb-9">Transforma tu forma de trabajar. Accede a nuestra plataforma y lleva tus <br /> enlaces y códigos QR al siguiente nivel.</p>
          <Form setData={setData} />
          {
            data ? 
            <div className={`bg-white w-full flex flex-row relative rounded-xl mt-8 s:gap-10 p-4 h-44 transition-opacity duration-200 overflow-hidden`}>
              <div className="col-start-1 flex flex-col">
                <h3 className="font-bold">CÓDIGO QR</h3>
                {
                  data ? 
                  <QRCode value={`https://shortie-url.vercel.app//api/${data.code}`} ref={canvasRef} id='QR' size={100} eyeRadius={10} qrStyle='dots'/>
                  : <></>
                }
              </div>
              <div className="flex flex-col gap-y-1 s:gap-y-0">
                {
                  data ?
                  <React.Fragment key={data.code}>
                    <span className='h-5 w-5'></span>
                    <span className='h-5 w-5'></span>
                    <div className='flex flex-row'><img className='w-5 mr-1' src="icons/link-outline.svg" alt="link icono" /><a target="_blank" href={`/api/${data.code}`} className="hover:underline text-[12px] s:text-base font-medium">https://shortie-url.vercel.app/{data.code}</a>
                      <button onClick={() => handleCopyUrl(`https://shortie-url.vercel.app//api/${data.code}`)}>
                        <img src="icons/copy-outline.svg" alt="copy icon" className='ml-1 mb-2 w-4' title='Copiar'/>
                      </button>
                    </div>
                    <div className='flex flex-row'><img className='w-5 mr-1' src="icons/calendar-clear-outline.svg" alt="calendario icono" /><p className='text-[12px] s:text-base font-medium'>{formatDate(data.date)}</p></div>
                    <div className='flex flex-row'><img className='w-5 mr-1' src="icons/eye-outline.svg" alt="ojo calendario" /><p className='text-[12px] s:text-base font-medium'>{data.clicked}</p></div>
                  </React.Fragment>
                  : <></>
                }  
              </div>
              <button className="absolute top-2 right-2 bg-[#1864FC] text-white font-bold py-3 px-3 text-sm s:text-base s:py-3 rounded-xl" onClick={handleDownloadQr}>Descargar</button>
            </div>
            : <></>
          }
        </div>
        <Image className="hidden l:block col-start-2 row-start-3 ml-auto mt-28" src="shortie-home.svg" alt="Imagen obtenida desde Freepik" title="Imagen obtenida desde Freepik" width={500} height={500} priority={true}/>
        </section>
        <section className="h-44"></section>
        <Achievements/>
      </article>
  )
}






