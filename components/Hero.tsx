import Image from 'next/image';
import React from 'react';
import HeroImage from '@/public/hero-savings.svg';

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      <div>
        <h1 className="text-6xl font-semibold">
          Reclaim what&apos;s yours.
          <br />
          <mark className="bg-gradient-to-r from-hdark via-hlight to-hlight inline-block text-transparent font-semibold bg-clip-text pb-4">
            Effortlessly and securely.
          </mark>
        </h1>
        <p className="font-semibold">
          We&apos;ll help you find and reclaim your unclaimed assets.
          <br />
          Some description text here and more here.
        </p>
        <button className="bg-hdark px-12 py-3 rounded-xl text-background mt-5">
          Sign Up
        </button>
      </div>
      <Image src={HeroImage} alt="Hero Image" width={500} height={0} />
    </div>
  );
}
