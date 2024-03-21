import Image from 'next/image';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import BenefitsImage from '@/public/benefits-image.svg';

export default function Benefits() {
  const benefits = [
    {
      title: 'Comprehensive Unclaimed Property Search',
    },
    {
      title: 'Continuous Monitoring for New Claims',
    },
    {
      title: 'Claim Filing Assistance',
    },
    {
      title: 'Claim Filing Assistance',
    },
    {
      title: 'User Friendly Interface',
    },
    {
      title: 'Privacy and Security',
    },
    {
      title: 'Personalized Customer Support',
    },
    {
      title: 'Transparent Process and No Hidden Fees',
    },
  ];

  return (
    <div id='benefits' className="max-w-6xl scroll-my-32 mx-auto flex justify-between">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Ton of benefits</h1>
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-5">
            <div className="bg-hlight/30 rounded-full p-2 text-hdark">
              <FaCheck size={16} />
            </div>
            <h1 className="text-xl font-semibold">{benefit.title}</h1>
          </div>
        ))}
        <button className="bg-hdark px-12 py-3 rounded-xl text-background mt-5 w-fit">
          Sign Up
        </button>
      </div>
      <Image src={BenefitsImage} alt="Hero Image" width={500} height={0} />
    </div>
  );
}
