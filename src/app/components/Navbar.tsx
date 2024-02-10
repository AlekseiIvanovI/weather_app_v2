import React from 'react'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { CiLocationArrow1 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import SearchBox from './SearchBox';

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className='shadow-sm sticky top-0 left-0 z-50 bg-white'>
        <div className='h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto'>
            <p className='flex items-center justify-center gap-2'>
                <h2 className='text-gray-500 text-3xl'>Weather</h2>
                <TiWeatherPartlySunny className='text-3xl mt-1 text-blue-700'/>
            </p>
            {/* */}
            <section className='flex gap-2 items-center'>
                <CiLocationArrow1 className='text-3xl text-blue-700 hover:opacity-50 cursor-pointer'/>
                <CiLocationOn className='text-3xl hover:opacity-50 cursor-pointer'/>
                <p className='text-slate-900/80 text-sm'> Citrus Heights  </p>
                <div>
                    <SearchBox />
                </div>
            </section>
        </div>
    </div>
  )
}