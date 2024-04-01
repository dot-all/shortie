import { FormEvent, useState } from 'react';
import * as yup from 'yup';

const urlSchema = yup.string().url("Por favor, introduce una URL válida.").trim().required("Por favor, introduce una URL.");

interface Url {
  url: string;
  clicked: number;
  code?: string;
}

interface FormProps {
  setData: React.Dispatch<React.SetStateAction<Url | undefined>>;
}

export default function Form({ setData }: FormProps) {

  const [newUrl, setNewUrl] = useState<string>("");
  const [error, setError] = useState<string | null>();

  function checkProtocol(url: string) {
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      return 'http://' + url;
    }
    return url;
  }

  const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const url = checkProtocol(newUrl);
      await urlSchema.validate(url);

      const sessionToken = localStorage.getItem("token-db-shortie");
      setNewUrl("");

      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ url: url, sessionToken }),
      });

      const content = await response.json();
      if (content) {
        setData(content);
        setError(null);
      }
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setError(error.errors[0]);
      } else {
        setError('Se ha producido un error interno. Por favor, inténtalo de nuevo.')
        throw error;
      }
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Ingresa un enlace aquí"
          value={newUrl}
          onChange={(event) => setNewUrl(event.target.value)}
          className="w-full h-16 rounded-xl pl-4"
          />
        <button type="submit" className="bg-[#1864FC] hover:bg-[#1864FC] text-white font-bold py-3 px-5 rounded-xl absolute right-2 top-2">
          Shortie
        </button>
      </div>
      {
        error ? <p className='pt-4 text-sm w-fit font-bold' >{error}</p>
        : <></>
      }
    </form>
    )
}



