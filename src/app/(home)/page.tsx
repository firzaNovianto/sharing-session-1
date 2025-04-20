import Image from "next/image";

export default function Home() {

  return (
    
      <div className="relative w-full h-[400px]">
      <Image
      src="/pokemon_wallpaper.png"
      fill
      alt="pokemon"
      />
      </div>

  );
}
