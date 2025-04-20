'use client'
import React from 'react'
import getPokemon from '@/api/getPokemon'
import {useState,useEffect} from 'react'
import Link from 'next/link'

type Pokemon = {
  name:string,
  url:string
}

const ListPokemon = () => {
const [dataPokemon,setDataPokemon] = useState<Pokemon[]>([])

useEffect(() => {
  const fetchData = async () => {
    const data = await getPokemon()
    console.log(data?.data.results)
    setDataPokemon(data?.data.results)
  }
  fetchData();
} ,[]

)


  return (
    <div className="grid grid-cols-3 gap-4 bg-gray-800 text-white p-4 mt-auto ">
    {dataPokemon.map((item:Pokemon,index:number) => (
            <Link href={`/pokemon/${index+1}`} key={index} className="bg-red text-blue">
            {item.name}
          </Link>
    )

  )}
    </div>
  )
}

export default ListPokemon