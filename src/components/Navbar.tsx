/** @format */

import React from 'react'
import { TiWeatherCloudy } from "react-icons/ti";
import { CiLocationArrow1 } from "react-icons/ci";

type Props = {}

export default function NavBar({}: Props) {
  return (
    <nav className='
        shadow-sm 
        sticky 
        top-0 
        left-0
        z-50 
        bg-white
        '>
        <div className='
            h-[80px] 
            w-full 
            flex 
            justify-between 
            items-center 
            max-w-7xl 
            px-3 
            mx-auto
            '>
            <p className="flex items-center justify-center gap-2  ">
                <h2 className="text-gray-500 text-3xl">Weather</h2>
                <TiWeatherCloudy className='text-blue-500 h-[50px] w-[50px] '/>
            </p>
          <section className='flex gap-2 items-center'>
            <CiLocationArrow1 className='text-blue-500 h-[30px] w-[30px]'/>
          </section>
        </div>
    </nav>
  )
}
