'use client'

import Image from "next/image";
import About from '@/public/about-you.svg'
import AboutYouForm from '@/components/AboutYouForm';

export default function AboutYou() {
    return(
        <div className="flex flex-col items-center">
            <div className='flex flex-col items-center gap-2 h-60 p-16 rounded-t-xl w-full bg-hlight/10 clip-path'>
                <h1 className="text-5xl text-sky-900 font-bold">About you</h1>
                <h2 className="text-xl text-sky-950 font-medium text-center">In order to help us locate your unclaimed properties,<br/>
                we need to know the following info</h2>
            </div>
            <AboutYouForm/>
            <div className="flex justify-between w-1/2">
                
                <div>
                    <Image
                        alt="About you"
                        src={About}
                        width={300}
                        height={300}
                    />
                </div>
            </div>

        </div>
    )
}