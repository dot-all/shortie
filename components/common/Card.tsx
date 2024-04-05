interface CardProps {
  title: string;
  icon?: string;
  description: string;
}
export default function Card({ title, icon, description}: CardProps) {
  return (
    <div className='flex flex-col p-7 min-w-1/2 lg:min-w-0 lg:w-1/2 lg:h-[280px] rounded-xl font-medium'>
      <div className="flex flex-row items-center mb-5">
        <img src={icon} alt={title} className="w-5 h-5 sm:w-6 sm:h-6 mr-1 mb-3"/>
        <h3 className="text-xl l:text-2xl font-bold h-10">{title}</h3>
      </div>
      <p className="text-pretty">{description}</p>
    </div>
  )
}
