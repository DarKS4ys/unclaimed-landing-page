"use client"
import { useState } from 'react';
import { motion } from "framer-motion";
import { MdOutlineArrowOutward, MdOutlineArrowUpward } from "react-icons/md";
import clsx from 'clsx';

const faqs = [
  {
    "question": "What services does Affluent AI provide?",
    "answer": "Affluent AI offers AI software development, website development, AI live assistant, AI live phone line support, AI automations, and AI image creation."
  },
  {
    "question": "How does AI software development benefit businesses?",
    "answer": "It propels businesses with advanced solutions for optimized processes and heightened productivity."
  },
  {
    "question": "What's the significance of Website Development by Affluent AI?",
    "answer": "It crafts online presence with tailor-made websites for seamless design and user-centric experiences."
  },
  {
    "question": "How does AI Live Assistant enhance interactions?",
    "answer": "It elevates customer interactions with AI-powered chatbots for instant support and enhanced engagement."
  },
  {
    "question": "How does AI Live Phone Line Support revolutionize customer service?",
    "answer": "It delivers real-time solutions and personalized assistance through AI-driven phone support."
  },
  {
    "question": "How do AI Automations by Affluent AI boost efficiency?",
    "answer": "They streamline tasks and reshape workflows intelligently for heightened productivity."
  },
  {
    "question": "What sets AI Image Creation by Affluent AI apart?",
    "answer": "It unleashes creativity with AI-generated visuals for a distinctive brand presence."
  },
  {
    "question": "How can I avail Affluent AI's services?",
    "answer": "You can contact us through our website or customer support to avail our services."
  },
  {
    "question": "Are Affluent AI's AI solutions customizable for specific business needs?",
    "answer": "Yes, they are meticulously developed and customizable to meet specific business needs."
  },
  {
    "question": "Can I integrate Affluent AI's solutions with existing systems?",
    "answer": "Certainly! They are designed for seamless integration with existing systems."
  },
  {
    "question": "How does Affluent AI ensure the security of AI solutions?",
    "answer": "We prioritize security, implementing robust measures to safeguard data and ensure a secure user experience."
  }
];



export default function FAQs() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpanded = (index: number | null) => {
      if (index === expandedIndex) {
        setExpandedIndex(null);
      } else {
        setExpandedIndex(index);
      }
    };

    const fadeInAnimationVariants = { 
      initial: {
          opacity: 0,
          y: 100,
      },
      animate: (index: number) => ({
          opacity: 1,
          y: 0,
          transition: {
              delay: 0.05 * index,
          }
      })
    }

  return (
    <div className='md:w-full'>
      {faqs.map((faq, index) => (
        <motion.div 
          initial='initial'
          variants={fadeInAnimationVariants}
          whileInView="animate"
          viewport={{
              once: true,
            }}
            
            key={index}>
          <div className='bg-hlight/20 my-4 p-5 md:p-14 rounded-3xl group transition-all duration-500 hover:bg-hlight'>
            <button className='text-[--text] transition-all duration-500 group-hover:text-[--bg] flex justify-between w-full items-center' onClick={() => toggleExpanded(index)}>
              <div className='flex gap-11 items-center'>
                <h1 className='text-[--green] text-xl font-black transition-all duration-500 group-hover:text-[--bg]'>{String(index + 1).padStart(2, '0')}</h1>
                <h1 className='uppercase font-black text-[14px] md:text-3xl'>
                  {faq.question}
                </h1>
              </div>
              <div className={clsx(`icon ${expandedIndex === index ? 'up' : 'down'}`,"text-[--highlight]", "transition-all duration-500 group-hover:text-[--green]")}>
                {expandedIndex === index ? <MdOutlineArrowUpward size={40}/> : <MdOutlineArrowOutward size={40}/>}
              </div>
            </button>
            <div className={`answer-container ${expandedIndex === index ? 'expanded' : ''}`}>
              <p className='mt-6 text-[#858585] transition-all duration-500 group-hover:text-[--bg]'>{faq.answer}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}