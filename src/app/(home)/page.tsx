import Image from "next/image";

export default function Home() {

  return (
    
      <div className="relative w-full h-[65vh]">
      <Image
      src="/pokemon_wallpaper.png"
      fill
      alt="pokemon"
      />
      </div>

  );
}
