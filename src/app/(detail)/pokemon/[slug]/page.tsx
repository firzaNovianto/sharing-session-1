'use client'
import getSinglePokemon from '@/api/getSinglePokemon';
import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'next/navigation';


const Pokedex = () => {
    const params = useParams();
    const slug:string = params.slug;
    const [dataPokemon,setDataPokemon] = useState<any>({})
    const [lv,setLv] = useState<number>(1)


    useEffect(() => {
        const fetchData = async () =>{
            const data = await getSinglePokemon(slug)
            console.log(data.data)
            setDataPokemon(data.data)
        }
        fetchData()
    },[])


    const calculatorLv = (paramsLv:number) => {
        setLv(paramsLv)
        const newHeight = dataPokemon.height + (lv * 0.25) 
        const newWeight = dataPokemon.weight + (lv * 0.25)
        const changeValue = {...dataPokemon,weight:newWeight,height:newHeight}
        setDataPokemon(changeValue)
    }
    
  return (
    <div className="text-center text-4xl font-bold h-[70vh]">
        Pokedex {dataPokemon.name}
    <p>
        lv {lv}
    </p>
    <p>
        Weight : {dataPokemon.weight}
    </p>
    <p>
        height : {dataPokemon.height}
    </p>
    <p>
        <div onClick={(() => calculatorLv(lv-1))}>Min-</div>
        <div onClick={(() => calculatorLv(lv+1))}>Plus+</div>

    </p>
    </div>
  )
}

export default Pokedex