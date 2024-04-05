interface ButtonDotProps {
  def: () => void
}

export default function ButtonDot({def}: ButtonDotProps) {
  return (
    <button className="b absolute top-2 right-2" onClick={def}>
      <span className="relative py-3 px-4 flex justify-center items-center ">
        <span className="i h-full w-full bg-[#9D00A3] items-center rounded-lg shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
        </span>
        <span className="absolute flex h-4 w-4 top-1 right-1 transform translate-x-2.5 -translate-y-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D72363]/50 opacity-75"></span>
          <span className="absolute inline-flex rounded-full h-4 w-4 bg-[#D72363]"></span>
        </span>
        <span className="pointer-events-none text-white font-bold z-10 text-sm">Descargar</span>
      </span>
    </button> 
  )
}
