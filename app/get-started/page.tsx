"use client"
import React from 'react'
import { FaCheck } from "react-icons/fa";
import { BiLoader } from 'react-icons/bi';
import SignUpForm from '@/components/SignUpForm';
import Image from 'next/image';
import GetStarted from '@/public/get-started.svg';

const features = [
  "Comprehensive Unclaimed Property Search",
  "Continuous Monitoring for New Claims",
  "Claim Filing Assistance",
  "Transparent Process and No Hidden Fees",
]

export default function () {
  return (
    <div className='max-w-6xl mx-auto'>
        <div className='h-60 p-16 rounded-t-xl mt-40 w-full bg-hlight/10 clip-path'>
            <h1 className="text-5xl text-sky-900 font-bold">Unlock Your Unclaimed Wealth</h1>
            <h2 className="text-xl text-sky-950 font-medium">Your journey to reclaiming forgotten assets starts here.</h2>
        </div>

      <div className='flex gap-x-8 max-w-5xl mx-auto p-12'>
        <div className='max-w-xl mx-auto'>
            <ul className='flex flex-col gap-y-8'>
              {features.map((feature, i) => (
              <li key={i} className='flex gap-x-2 items-center'>
                <div className='p-2 bg-hlight/10 text-hmid rounded-full'><FaCheck size={12} /></div>
                <h1 className='text-sky-950 font-bold'>{feature}</h1>
              </li>
              ))}
              <h1 className='text-sky-950 font-extrabold text-lg'>and so much more...</h1>

              <SignUpForm/>
            </ul>
        </div>

        <Image 
          alt="Get Started"
          src={GetStarted}
          width={300}
          height={300}
        />
      </div>
    </div>
  )
}
