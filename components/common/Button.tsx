import React from 'react'

interface ButtonProps {
  text: string;
  className: string;
  submit?: boolean;
}

export default function Button({text, className, submit}: ButtonProps) {
  return (
      <button className={`flex justify-center items-center ${className}`} type={submit ? 'submit' : 'button'}>
        <span className="i h-full w-full bg-[#9D00A3] rounded-lg shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-105 hover:scale-y-105 transition duration-300 ease-out">
        </span>
        <span className='pointer-events-none text-white font-bold z-10'>{text}</span>
      </button>
  )
}
