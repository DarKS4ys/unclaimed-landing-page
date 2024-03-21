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
      <Hero />
      <Logos />
      <Features />
      <Benefits />
      <About />
      <FAQs />
      <Footer />
    </div>
  );
}
