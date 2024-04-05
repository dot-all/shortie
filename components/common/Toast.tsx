interface ToastProps {
  setIsCopied: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Toast({setIsCopied}: ToastProps) {
  return (
    <div id="toast-undo" className="hidden sm:flex items-center w-full max-w-xs p-4 text-white bg-green-600 rounded-lg shadow fixed bottom-10 right-10 z-50" role="alert">
      <div className="text-sm font-medium">
        El enlace ha sido copiado con éxito
      </div>
      <div className="flex items-center ms-auto space-x-2 rtl:space-x-reverse">
        <button type="button" onClick={() => setIsCopied(false)} className="ms-auto -mx-1.5 -my-1.5 text-white hover:text-gray-300 rounded-lg focus:ring-2  p-1.5 inline-flex items-center justify-center h-8 w-8" data-dismiss-target="#toast-undo" aria-label="Close">
          <span className="sr-only">Close</span>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
      </button>
      </div>
    </div>


  )
}
