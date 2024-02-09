import React from 'react'
import { IoIosSearch } from "react-icons/io";

type Props = {}

export default function SearchBox({}: Props) {
  return (
    <form className='flex relative items-center justify-center h-10'>
        <input type="text" placeholder='Search' 
        className='
            px-4 
            py-2 
            w-[230px] 
            border 
            border-blue-500 
            focus:outline-none 
            focus:border-blue-500 
            h-full
        '/>
        <button className='
            px-4 
            py-[9px]
            bg-blue-500
            text-white
            rounded-r-md
            focus:outline-none
            hover:bg-blue-600
            whitespace-nowrap
            h-full
        '>
            <IoIosSearch />
        </button>
    </form>
  )
}