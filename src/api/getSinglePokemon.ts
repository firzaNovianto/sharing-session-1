import { axiosInstance } from "@/libs/axios";

export default async function getSinglePokemon(id:string) {
    try {
        const response = await axiosInstance.get(`/api/v2/pokemon/${id}`)
        return response
    }catch(error){
        console.log("Gagal saat fetch data:",error)
    }
}