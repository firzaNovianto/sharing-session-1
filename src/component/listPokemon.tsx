/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import getPokemon from '@/api/getPokemon'
import {useState,useEffect} from 'react'
import Link from 'next/link'
import { Pokemon } from '@/types/Pokemon'

// type dibuat di folder types


const ListPokemon = () => {
  // Nama variabel tidak jelas
const [pokemon,setPokemon] = useState<Pokemon[]>([])
const pathname = usePathname()

useEffect(() => {
  const getDataPokemon = async () => {
    const data:any = await getPokemon()
    setPokemon(data?.data.results)
  }
  getDataPokemon()
  }

 ,[]

)


  return (
    <div className={`grid grid-cols-3 gap-4 bg-gray-800  p-4 h-[35vh] `}>
    {pokemon.map((item:any,index:number) => (
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