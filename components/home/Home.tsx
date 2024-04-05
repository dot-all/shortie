import React, { useEffect, useRef, useState } from 'react'
import Form from './Form'
import { nanoid } from 'nanoid';
import { QRCode } from 'react-qrcode-logo';
import ButtonDot from '../common/ButtonDot';
import Toast from '../common/Toast';

interface Url {
  url: string;
  clicked: number;
  code?: string;
  date?: string;
}

export default function HomeShortie() {

  const [data, setData] = useState<Url>();
  const [isLoading, setIsLoading] = useState(false);
  const [sessionToken, setSessionToken] = useState<string>();
  const [isCopied, setIsCopied] = useState(false);

  const canvasRef = useRef<QRCode>(null);


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
    setIsCopied(true);
  }

  return (
    <>
    <article className="w-full relative bg-[#121180] min-h-screen pt-32" id='product'>
      <section className="w-11/12 sm:w-10/12 mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <div className='flex flex-row text-sm justify-center'>
            <span className="text-white bg-[#FFB549] px-1 rounded mr-2">Click</span>
            <p className='text-white'>Prueba Shortie gratis con un <span className='text-[#D72363]'>simple click!</span></p>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-white text-center">Todo para tus enlaces en <br /> un solo lugar.</h1>
          <p className="text-base text-white text-center mb-12">Transforma tu forma de trabajar. Accede a nuestra plataforma y lleva tus <br /> enlaces y códigos QR al siguiente nivel.</p>
          <Form setData={setData} />
          {
            data ? 
            <div className={`bg-white w-full flex flex-row relative rounded-lg mt-8 p-4 h-44 transition-opacity duration-200 overflow-hidden`}>
              <div className="col-start-1 flex flex-col">
                <h3 className="ml-2 font-bold text-[#121180]">CÓDIGO QR</h3>
                {
                  data ? 
                  <QRCode value={`https://shortie-url.vercel.app//api/${data.code}`} ref={canvasRef} id='QR' size={100} eyeRadius={10} qrStyle='dots'/>
                  : <></>
                }
              </div>
              <div className="flex flex-col gap-y-1 sm:gap-y-0">
                {
                  data ?
                  <React.Fragment key={data.code}>
                    <span className='h-5 w-5'></span>
                    <span className='h-5 w-5'></span>
                    <div className='flex flex-row'><img className='w-5 mr-1' src="icons/unlink-outline.svg" alt="link icono" /><a target="_blank" href={`/api/${data.code}`} className="select-none hover:underline text-[12px] sm:text-base font-medium">shortie-url/{data.code}</a>
                      <button onClick={() => handleCopyUrl(`https://shortie-url.vercel.app//api/${data.code}`)}>
                        <img src="icons/copy-outline.svg" alt="copy icon" className='ml-1 mb-2 w-4' title='Copiar'/>
                      </button>
                    </div>
                    <div className='flex flex-row'><img className='w-5 mr-1' src="icons/calendar-clear-outline.svg" alt="calendario icono" /><p className='text-[12px] sm:text-base font-medium'>{formatDate(data.date)}</p></div>
                    <div className='flex flex-row'><img className='w-5 mr-1' src="icons/eye-outline.svg" alt="ojo calendario" /><p className='text-[12px] sm:text-base font-medium'>{data.clicked}</p></div>
                  </React.Fragment>
                  : <></>
                }
              </div>
              <ButtonDot def={handleDownloadQr}/>
            </div>
            : <></>
          }
        </div>
        </section>
        <section className="h-44"></section>
      </article>
      {
        isCopied ? <Toast setIsCopied={setIsCopied} /> : <></>
      }
      </>
  )
}






