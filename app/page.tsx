import HeroImage from '@/public/hero-savings.svg';
import BenefitsImage from '@/public/benefits-image.svg';
import Image from 'next/image';
import Logo01 from '@/public/logos/01.png';
import Logo02 from '@/public/logos/02.png';
import Logo03 from '@/public/logos/03.png';
import Pattern from '@/public/pattern.png';
import { FaClock } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa6";
import { HiCursorClick } from "react-icons/hi";
import { IoInfinite } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { BiPlusMedical } from 'react-icons/bi';
import FAQs from '@/components/FAQs';

export default function Hero() {
  const features = [
    {
      icon: <FaUnlock size={25}/>,
      title: 'Discover Hidden Assets',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <FaClock size={25}/>,
      title: 'Real Time Updates',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <HiCursorClick size={25}/>,
      title: 'Effortless Claiming',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <IoInfinite size={25}/>,
      title: 'Ongoing Access',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ]

  const benefits = [
    {
      title: "Comprehensive Unclaimed Property Search"
    },
    {
      title: "Continuous Monitoring for New Claims"
    },
    {
      title: "Claim Filing Assistance"
    },
    {
      title: "Claim Filing Assistance"
    },
    {
      title: "User Friendly Interface"
    },
    {
      title: "Privacy and Security"
    },
    {
      title: "Personalized Customer Support"
    },
    {
      title: "Transparent Process and No Hidden Fees"
    },
  ]

  return (
    <div className='flex flex-col gap-y-28 p-20'>
      {/* Hero */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div>
          <h1 className="text-6xl font-semibold">Reclaim what's yours.<br/><mark className="bg-gradient-to-r from-hdark via-hlight to-hlight inline-block text-transparent font-semibold bg-clip-text pb-4">
            Effortlessly and securely.
            </mark>
          </h1>
          <p className='font-semibold'>
            We'll help you find and reclaim your unclaimed assets.<br />Some description text here and more here.
          </p>
          <button className="bg-hdark px-12 py-3 rounded-xl text-background mt-5">Sign Up</button>
        </div>
        <Image src={HeroImage} alt="Hero Image" width={500} height={0} />
      </div>

      {/* Logos */}
      <div className='mx-auto w-fit'>
        <h1 className='text-description text-center'>TRUSTED BY GOVERNMENT AGENCIES</h1>
        <div className='flex gap-12 items-center'>
          <Image src={Logo01} alt='logo' width={100} height={0} />
          <Image src={Logo02} alt='logo' width={100} height={0} />
          <Image src={Logo03} alt='logo' width={50} height={0} />
        </div>
      </div>

      {/* Features */}
      <div className='bg-[#4800fd] rounded-xl p-10 py-32 relative'>
        <div className='text-white text-center relative z-20 m-auto w-fit'>
          <h1 className='text-4xl font-semibold'>
            In the U.S. alone, billions of dollars in <br/> unclaimed property lie dormant...   
          </h1>
          <p>So you have to do something about it</p>
        </div>
        <div className='relative z-20 flex flex-wrap justify-center gap-10 mt-10'>
          {features.map((feature, index) => (
            <div key={index} className='flex items-center bg-background py-8 px-9 gap-5 rounded-xl'>
              {feature.icon}
              <div>
                <h1 className='text-xl font-semibold'>{feature.title}</h1>
                <p className='text-description'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <Image src={Pattern} alt='pattern' width={600} height={0} className='absolute top-4 z-10' />
      </div>

      {/* Benefits */}
      <div className='flex justify-between'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-3xl font-bold'>Ton of benefits</h1>
          {benefits.map((benefit, index) => (
            <div key={index} className='flex items-center gap-5'>
              <div className='bg-hlight/30 rounded-full p-2 text-hdark'><FaCheck size={16} /></div>
              <h1 className='text-xl font-semibold'>{benefit.title}</h1>
            </div>
          ))}
          <button className="bg-hdark px-12 py-3 rounded-xl text-background mt-5 w-fit">Sign Up</button>
        </div>
        <Image src={BenefitsImage} alt="Hero Image" width={500} height={0}/>
      </div>

      {/* FAQs */}
      <div className="flex flex-col gap-10 w-full" id="faqs">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl md:text-5xl font-bold">Frequently Asked Questions</h1>
        </div>
        <FAQs />
      </div>

      {/* Footer */}
      <div className='bg-[#4800fd] w-full text-background p-12 rounded-2xl flex justify-between'>
        <div>
          <h1 className='text-3xl font-semibold'>Unclaimed Properties</h1>
          <p>Claim your money.</p>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-description'>Links</h1>
          <p>Benefits</p>
          <p>Pricing</p>
          <p>FAQs</p>
        </div>
        <div className='flex flex-col gap-5'>
          <h1 className='text-description'>IDK</h1>
          <p>Words here a lot of words here just a few</p>
          <p>Words here a lot of words here just a few</p>
          <p>Words here a lot of words here just a few</p>
        </div>
      </div>
    </div>
  );
}