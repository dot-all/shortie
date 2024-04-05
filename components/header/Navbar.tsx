// import React, { useState, useEffect } from 'react';

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 0;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [scrolled]);

//   return (
//     <header className={`fixed top-0 z-10 w-full h-20 transition-all duration-200 ${scrolled ? 'bg-white' : ''}`}>
//       <nav className='flex w-10/12 mx-auto h-full'>
//         <section className='flex flex-row mr-auto items-center'>
//           <svg className={`w-10 transition-all duration-200 ${scrolled ? 'stroke-[#121180]' :'stroke-white'}`} xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round"><path d="M14 12a6 6 0 1 1-6-6m2 6a6 6 0 0 1 6-6m0 12a6 6 0 0 0 6-6 5.97 5.97 0 0 0-1-3.318"/></svg>
//           <a className={`text-4xl font-bold transition-all duration-200 ${scrolled ? 'text-[#121180]' : 'text-white'}`}>shortie</a>
//         </section>
//       </nav>
//     </header>
//   );
// }


import {useEffect, useState, forwardRef, useRef} from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`fixed top-0 z-10 w-full h-20 transition-all duration-200 items-center drop-shadow flex ${scrolled ? 'bg-white' : ''}`}>
      <section className="w-10/12 mx-auto relative">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="mr-2">
            <section className='flex flex-row items-center h-20'>
              <svg className={`w-6 sm:w-10 transition-all duration-200 ${scrolled ? 'stroke-[#121180]' :'stroke-white'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round"><path d="M14 12a6 6 0 1 1-6-6m2 6a6 6 0 0 1 6-6m0 12a6 6 0 0 0 6-6 5.97 5.97 0 0 0-1-3.318"/></svg>
              <a className={`text-xl sm:text-3xl font-bold transition-all duration-200 ${scrolled ? 'bg-gradient-to-r from-[#121180] to-[#9D00A3] inline-block text-transparent bg-clip-text' : 'text-white'}`}>shortie</a>
            </section>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={`bg-transparent hover:bg-transparent focus:bg-transparent ${scrolled ? 'text-black' : 'text-white'}`}>Producto</NavigationMenuTrigger>
            <NavigationMenuContent className="min-h-[280px]">
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild className="bg-gradient-to-bl from-[#121180]/40 via-white">
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="#product"
                      >
                      <svg className="h-8 w-8 stroke-black" xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round"><path d="M14 12a6 6 0 1 1-6-6m2 6a6 6 0 0 1 6-6m0 12a6 6 0 0 0 6-6 5.97 5.97 0 0 0-1-3.318"/></svg>
                      <div className="mb-2 mt-4 text-lg font-medium">
                        shortie
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Acorta tus URLs y crea códigos QR personalizados al instante. Simplifica y potencia tus enlaces.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="#product" title="Acortador de URL">
                  Potente acortador de URLs
                </ListItem>
                <ListItem href="#product" title="Generador de código QR">
                  Creador de códigos QR personalizado
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={`bg-transparent hover:bg-transparent focus:bg-transparent ${scrolled ? 'text-black' : 'text-white'}`}>Soluciones</NavigationMenuTrigger>
            <NavigationMenuContent className="min-h-[280px]">
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="#features" title="Alcance">
                  Mide el impacto de tus enlaces
                </ListItem>
                <ListItem href="#achievements" title="Posicionamiento">
                  Optimiza tu visibilidad con enlaces más cortos
                </ListItem>
                <ListItem href="#achievements" title="Experiencia de usuario">
                  Mejora tu presencia en línea con shortie
                </ListItem>
                <ListItem href="#features" title="Engagement:">
                  Incentiva a los usuarios a visitar tus enlaces
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      </section>
    </header>
  )
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
