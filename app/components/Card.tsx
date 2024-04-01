interface CardProps {
  title: string;
  icon?: string;
  description: string;
  border?: boolean;
}
export default function Card({ title, icon, description, border }: CardProps) {
  return (
    <div className={`flex flex-col p-7 w-full s:w-9/12 m:w-1/3 h-[245px] rounded-xl bg-white font-medium ${ border ? 'border border-[#1864FC]/50' : ''}`}>
      <div className="flex flex-row items-center mb-5">
        <img src={icon} alt={title} className="w-5 h-5 s:w-6 s:h-6 m:w-7 m:h-7 l:w-8 l:h-8 mr-1 mb-1"/>
        <h3 className="text-xl l:text-2xl font-bold h-10">{title}</h3>
      </div>
      <p className="text-[12px] l:text-sm text-pretty">{description}</p>
    </div>
  )
}
