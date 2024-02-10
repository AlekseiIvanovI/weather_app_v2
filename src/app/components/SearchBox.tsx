import React from 'react'
import { CiSearch } from "react-icons/ci";

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
            border-gray-500 
            rounded-l-md 
            focus:outline-none 
            focus:border-blue-500 
            h-full'
        />
        <button className='
        px-4 
        py-[9px] 
        bg-blue-500 
        text-white 
        rounded-r-md 
        focus:outline-none 
        hover:bg-blue-700
        whitespace-nowrap 
        h-full
        
        '>
            <CiSearch />
        </button>
    </form>
  )
}