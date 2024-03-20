import Image from 'next/image'
import Underline1 from '@/public/cross-out-underline.svg'
import Underline2 from '@/public/needle-underline.svg'

export default function Hero() {
  return (
    <div className="h-screen p-8">
      <div className="w-full bg-emerald-600 text-background rounded-3xl h-full flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col text-center items-center justify-center">
        <h1 className="text-6xl font-semibold text-center uppercase">Reclaim whats yours.</h1>
        <div className="flex text-6xl font-semibold text-center uppercase"><span className="relative">Effortlessly <Image className="w-full" alt='Underline' src={Underline1} width={200} height={100}/></span>and<span>Securely</span></div>
        </div>

        <p className="text-background">Get your unclaimed money from the government and get it back, very nice, very cool.</p>
        <button className="bg-background hover:bg-background/80 text-highlight text-lg px-6 py-2 rounded-2xl font-semibold">Sign Up</button>
      </div>
    </div>
  );
}