import BenefitsImage from '@/public/benefits-image.svg';
import Image from 'next/image';
import { FaClock } from 'react-icons/fa';
import { FaUnlock } from 'react-icons/fa6';
import { HiCursorClick } from 'react-icons/hi';
import { IoInfinite } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa';
import { BiPlusMedical } from 'react-icons/bi';
import FAQs from '@/components/FAQs';
import Logos from '../components/Logos';
import Features from '../components/Features';
import Benefits from '@/components/Benefits';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';

export default function Page() {
  return (
    <div className="flex flex-col gap-y-32 p-20">
      <Hero/>
      <Logos />
      <Features />
      <Benefits />
      <About/>
      <FAQs />
      <Footer />
    </div>
  );
}
