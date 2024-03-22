'use client';
import React from 'react';
import Image from 'next/image';
import AboutYou from '@/public/about-you.svg';
import AboutYouForm from '@/components/AboutYouForm';

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="h-60 justify-center items-center text-center p-16 rounded-t-xl w-full bg-hlight/10 clip-path">
        <h1 className="text-5xl text-sky-900 font-bold">About you</h1>
        <h2 className="text-xl opacity-50 w-1/2 mx-auto text-sky-950 font-medium">
          In order to help us locate your unclaimed properties, we need to know
          the following info
        </h2>
      </div>

      <div className="flex gap-x-8 max-w-5xl mx-auto p-12">
        <div className="max-w-xl mx-auto">
          <AboutYouForm />
        </div>

        <Image alt="Get Started" src={AboutYou} width={300} height={300} />
      </div>
    </div>
  );
}
