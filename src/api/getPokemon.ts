import { axiosInstance } from "@/libs/axios";

export default async function getPokemon() {
    try {
        const response = await axiosInstance.get("/api/v2/pokemon")
        return response
    }catch(error){
        console.log("Gagal saat fetch data:",error)
    }
}