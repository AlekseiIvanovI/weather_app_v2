import React from 'react'
import { TiWeatherPartlySunny } from "react-icons/ti";

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className='shadow-sm sticky top-0 left-0 z-50 bg-white'>
        <div className='h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto'>
            <p className='flex items-center justify-center gap-2'>
                <h2 className='text-gray-500 text-3xl'>Weather</h2>
                <TiWeatherPartlySunny className='text-3xl mt-1 text-blue-700'/>
            </p>
        </div>
    </div>
  )
}