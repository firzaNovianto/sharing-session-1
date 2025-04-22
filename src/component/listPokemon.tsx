'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import getPokemon from '@/api/getPokemon'
import {useState,useEffect} from 'react'
import Link from 'next/link'

// type Pokemon = {
//   name:string,
//   url:string
// }

const ListPokemon = () => {
const [x,y] = useState<any[]>([])
const pathname = usePathname()
console.log("Pathname",pathname)

useEffect(() => {
  const fetchData = async () => {
    const data = await getPokemon()
    y(data?.data.results)
  }
  fetchData();
} ,[]

)


  return (
    <div className={`grid grid-cols-3 gap-4 bg-gray-800  p-4 mt-auto `}>
    {x.map((item:any,index:number) => (
            <Link href={`/pokemon/${index+1}`} key={index} className={`${pathname.startsWith(`/pokemon/${index+1}`)?"text-blue-600":"text-white"}`}>
            {item.name}
          </Link>
    )

  )}
    </div>
  )
}

export default ListPokemon