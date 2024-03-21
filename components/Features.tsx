import Image from 'next/image';
import React from 'react';
import { FaClock, FaUnlock } from 'react-icons/fa';
import { HiCursorClick } from 'react-icons/hi';
import { IoInfinite } from 'react-icons/io5';
import Pattern from '@/public/pattern.png';

export default function Features() {
  const features = [
    {
      icon: <FaUnlock size={25} />,
      title: 'Discover Hidden Assets',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <FaClock size={25} />,
      title: 'Real Time Updates',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <HiCursorClick size={25} />,
      title: 'Effortless Claiming',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <IoInfinite size={25} />,
      title: 'Ongoing Access',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto bg-hdark rounded-xl p-10 py-32 relative">
      {/* <div className="absolute inset-0 w-full h-full pattern"/> */}
      <div className="text-white text-center relative z-20 m-auto w-fit">
        <h1 className="text-4xl font-semibold">
          In the U.S. alone, billions of dollars in <br /> unclaimed property
          lie dormant...
        </h1>
        <p>So you have to do something about it</p>
      </div>
      <div className="relative z-20 flex flex-wrap justify-center gap-10 mt-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center bg-background py-8 px-9 gap-5 rounded-xl"
          >
            {feature.icon}
            <div>
              <h1 className="text-xl font-semibold">{feature.title}</h1>
              <p className="text-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Image
        src={Pattern}
        alt="pattern"
        width={600}
        height={0}
        className="absolute top-4 z-10"
      />
    </div>
  );
}
