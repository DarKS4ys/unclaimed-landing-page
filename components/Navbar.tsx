'use client';

import Image from 'next/image';
import Logo from '@/public/logo.png';
import Link from 'next/link';
import { useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > (previous ?? 0) && latest > 120) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const renderButton = (text: string) => (
    <Link href={`#${text.toLowerCase()}`} className="hover:text-hdark duration-300 active:scale-90 transition font-semibold relative group">
      {text}
      <div className='h-0.5 absolute -bottom-1 bg-black group-hover:bg-hdark group-hover:w-full w-0 transition-all duration-300'/>
    </Link>
  );

  return (
    <motion.nav
      transition={{ duration: 0.45, ease: 'easeInOut' }}
      animate={hidden ? 'hidden' : 'visible'}
      variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
      className="px-20 p-10 sticky z-[999] top-0 mx-auto w-full bg-background"
    >
      <div className="w-full mx-auto max-w-7xl flex items-center justify-between">
        <div className="flex w-[300px] gap-2 items-center">
          <Image
            src={Logo}
            alt="logo"
            width={64}
            quality={90}
            height={0}
            className="w-8 h-8 aspect-square"
          />
          <Link href='/' className="font-semibold text-xl hover:text-hmid duration-200 transition">Unclaimed</Link>
        </div>
        <div className="flex gap-20 w-[300px] justify-center">
          {renderButton('Benefits')}
          {renderButton('Pricing')}
          {renderButton('FAQ')}
        </div>
        <div className="flex gap-5 w-[300px] justify-end">
          <button className="px-6 py-2 bg-[#FCFCFD] hover:bg-[#EDF0F5] hover:shadow-lg duration-200 transition active:scale-95 border border-[#EDF0F5] rounded-xl">
            Login
          </button>
          <Link
            className="text-background hover:bg-hmid transition px-6 active:scale-95 py-2 rounded-xl duration-200 bg-hdark"
            href="/get-started"
          >
            Signup
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
