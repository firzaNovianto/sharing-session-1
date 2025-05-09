/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import getSinglePokemon from '@/api/getSinglePokemon';
import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'next/navigation';
import * as yup from "yup"
import {Form,Formik,Field,ErrorMessage} from "formik"

//buat di folder khusus schema
const levelUpSchema = yup.object().shape({
    level:yup.number().required("Please input lv")
})

//buat di folder khusus initial value
const initialValueLevel = {
    level:0
}

type RecordLevelUp = {
    level : string,
    timeStamp : string
}


const Pokedex = () => {
    const params = useParams();
    const slug:any = params.slug;
    const [dataPokemon,setDataPokemon] = useState<any>({})
    const [calculatePokemon,setCalculatePokemon] = useState<any>({})
    const [levelUpRecord,setLevelUpRecord] = useState<any>([])
    const [lv,setLv] = useState<number>(1)


    useEffect(() => {
        const fetchData = async () =>{
            const data:any = await getSinglePokemon(slug)
            setDataPokemon(data.data)
            setCalculatePokemon(data.data)
        }
        fetchData()
    },[slug])


    const calculatorLv = (paramsLv:number) => {
        //Validasi data yang masuk
        if(paramsLv <= 0){
            return alert("level tidak boleh 0 atau kurang")    
        }
        alert("level up success!!!")

        
        setLv(paramsLv)
        //Updated data pokemon
        // validasi angka berulang dan penambahan value
        const newHeight = paramsLv === 1 ? calculatePokemon.height : calculatePokemon.height + (paramsLv * 0.25) 
        const newWeight = paramsLv === 1 ? calculatePokemon.weight : calculatePokemon.weight  + (paramsLv * 0.25)
        const changeValue = {...calculatePokemon,weight:newWeight,height:newHeight}
        setDataPokemon(changeValue)
        // created Riwayat level up Pokemon
        const addRecord = {
            level:paramsLv,
            timeStamp: new Date()
        }
        const updateData = [...levelUpRecord,addRecord]
        setLevelUpRecord(updateData)

    }

    
  return (
    <div className="grid grid-cols-8">
          <div className="flex items-center justify-center h-[65vh] col-span-6">
      <div className="text-center text-4xl font-bold">
        Pokedex {dataPokemon?.name}
    <p>
        lv {lv}
    </p>
    <p>
        Weight : {dataPokemon?.weight}
    </p>
    <p>
        height : {dataPokemon?.height}
    </p>
    <div className="flex justify-center gap-4 mt-8">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" onClick={(() => calculatorLv(lv-1))}>Min-</button>
        <Formik
        initialValues={initialValueLevel}
        validationSchema={levelUpSchema}
        onSubmit={async (values,{resetForm}) => {
            calculatorLv(values.level)
            resetForm()
        }}
        >
        {({isValid,dirty}) => (
            <Form>
                <div>
                    <label className="block text-3xl font-bold">
                        level
                    </label>
                    <Field 
                    name="level"
                    type="number"
                    />
                    <ErrorMessage
                    name="level"
                    component="div"
                    className="text-sm text-red-500 mt-1"
                    />
                </div>
                <button
                    disabled={!isValid || !dirty}
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                Submit
                </button>
                
            </Form>
            
        )}

        </Formik>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" onClick={(() => calculatorLv(lv+1))}>Plus+</button>

    </div>
    </div>
  </div>
  <div className="col-span-2 p-4">
    <div>
    <h1 className="text-2xl font-bold">Record Lv up Progress</h1>
    </div>
    <div className="flex justify-start flex-col">
    {levelUpRecord?.map((data:RecordLevelUp,index:number) => {
        return (<div key={index}>
            {`lv ${data?.level} => ${new Date(data.timeStamp).toLocaleString()}`}
            {}
        </div>)
    })}
    </div>
  </div>
    </div>
  )
}

export default Pokedex