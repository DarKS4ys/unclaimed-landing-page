import Image from 'next/image';
import React from 'react';
import Logo01 from '@/public/logos/01.png';
import Logo02 from '@/public/logos/02.png';
import Logo03 from '@/public/logos/03.png';

export default function Logos() {
  return (
    <div className="mx-auto w-fit">
      <h1 className="text-description text-center">
        TRUSTED BY GOVERNMENT AGENCIES
      </h1>
      <div className="flex gap-12 items-center">
        <Image src={Logo01} alt="logo" width={100} height={0} />
        <Image src={Logo02} alt="logo" width={100} height={0} />
        <Image src={Logo03} alt="logo" width={50} height={0} />
      </div>
    </div>
  );
}
