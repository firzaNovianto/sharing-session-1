/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import getPokemon from '@/api/getPokemon'
import {useState,useEffect} from 'react'
import Link from 'next/link'

// type dibuat di folder types
type data = {
  name:string,
  url:string
}


const ListPokemon = () => {
  // Nama variabel tidak jelas
const [x,y] = useState<data[]>([])
const pathname = usePathname()

useEffect(() => {
  const getData = async () => {
    const data:any = await getPokemon()
    y(data?.data.results)
  }
  getData()
  }

 ,[]

)


  return (
    <div className={`grid grid-cols-3 gap-4 bg-gray-800  p-4 h-[35vh] `}>
    {x.map((item:any,index:number) => (
            <Link href={`/pokemon/${index+1}`}
             key={index}
             className={`${pathname.startsWith(`/pokemon/${index+1}`)?"text-blue-600":"text-white"}`}
             >
            {item.name}
          </Link>
    )

  )}
    </div>
  )
}

export default ListPokemon