import React from 'react'

const achievements = [
  {
    title: '300+',
    subtitle: 'enlaces acortados',
    icon: 'icons/link-outline.svg',
  },
  {
    title: '20+',
    subtitle: 'usuarios activos',
    icon: 'icons/person-outline.svg',
  },
  {
    title: '99%',
    subtitle: 'servicio operativo',
    icon: 'icons/rocket-outline.svg',
  },
]

export default function Achievements() {
  return (
    <section className="h-44 w-11/12 m:w-10/12 bg-white absolute left-0 right-0 mx-auto -bottom-20 drop-shadow-xl flex flex-row items-center rounded-xl justify-between pl-4 pr-1 s:pl-10 m:pl-0 s:pr-10 max-w-7xl">
      <h2 className="hidden m:block l:text-3xl font-medium ml-12">Porque usar nuestro <br /> servicio </h2>
      {
        achievements.map((achievement, index) => (
          <div key={index} className='flex flex-row items-center gap-2'>
            <img src={achievement.icon} alt={achievement.subtitle} className='w-6 s:w-8 m:w-9 l:w-10 l:h-10' />
            <div className='flex flex-col'>
              <p className='s:text-xl m:text-2xl l:text-3xl font-medium'>{achievement.title}</p>
              <p className='text-[12px] m:text-sm l:text-base font-medium'>{achievement.subtitle}</p>
            </div>
          </div>
        ))
      }
    </section>
  )
}
