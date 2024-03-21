"use client"

import React, {useState} from 'react';
import {useMotionValueEvent, useScroll, motion} from "framer-motion";
import Link from "next/link";
import {useActiveSectionContext} from "@/context/active-section-context";
import {clsx} from "clsx";
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const [hidden, setHidden] = useState(false)
    const [scrollingDown, setScrollingDown] = useState(false)
    const {scrollY} = useScroll()
    const pathname = usePathname()

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious()
        if (latest > 40) {
            setHidden(true)
        } else {
            setHidden(false)
        }

        if (latest > previous!) {
            setScrollingDown(true)
        } else {
            setScrollingDown(false)
        }
    })
    const {activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

    const links = [
        {
            name: 'Home',
            href: '#home'
        },
        {
            name: 'About Us',
            href: '#about-us'
        },
        {
            name: 'Services',
            href: '#services'
        },
        {
            name: 'Pricing',
            href: '#pricing'
        },
        {
            name: 'Contact',
            href: '#contact'
        },
    ]

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: -50,
        },
        animate: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                damping: 14,
                stiffness: 220,
                delay: (index % 15) * 0.05,
            },
        }),
    };

    const sectionClasses: Record<string, string> = {
        'About Us': 'bg-text/70',
    };

    console.log(activeSection)

    return (
        <motion.nav
            className={clsx("z-50 fixed text-white top-0 w-full px-16 text-primary-foreground transition-all duration-300",  pathname != '/' ? 'bg-sky-900 py-6' : !hidden ? 'py-12' : 'py-4')}
        >
            <div
                className={clsx("absolute inset-0 -z-10 transition duration-300 backdrop-blur-md", hidden ? 'opacity-100' : 'opacity-0', scrollingDown && sectionClasses[activeSection] ? sectionClasses[activeSection] : 'bg-black/20')}/>
            <div className="flex items-center justify-between w-full mx-auto">
                <Link href='/' className="flex gap-1.5 items-center">
                    <div className="relative overflow-hidden flex">

                        <h1 className="text-2xl font-bold">?</h1>
                        <div className="border-r-[3px] antialiased pl-2 border-border"/>
                    </div>
                    <h1 className="text-2xl font-semibold uppercase flex gap-1 ">Unclaimed</h1>
                </Link>

                <motion.ul initial={{y: -100, opacity: 0}}
                           animate={{y: 0, opacity: 1}} viewport={{once: true}} className="hidden lg:flex items-center justify-center gap-4 bg-text/20 p-2 rounded-full">
                    {links.map((link, index) => (
                        <motion.li
                            className="flex items-center justify-center relative"
                            key={index}
                            custom={index}
                            variants={fadeInAnimationVariants}
                            initial="initial"
                            whileInView="animate"
                            viewport={{
                                once: true,
                            }}
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 0.9,
                            }}
                        >
                            <Link onClick={() => {
                                setActiveSection(link.name)
                                setTimeOfLastClick(Date.now())
                            }}

                                  className={clsx("flex font-medium w-full items-center justify-center py-1.5 px-3 text-background z-10 transition", {"!text-text": activeSection === link.name})}
                                  href={link.href}>
                                {link.name}
                                {
                                    link.name === activeSection && (
                                        <motion.span className='bg-white rounded-full absolute inset-0 -z-10' layoutId='activeSection'
                                            transition={{type: "spring", stiffness: 380, damping: 30}}>
                                        </motion.span>
                                    )
                                }

                            </Link>
                        </motion.li>
                    ))}
                </motion.ul>
                <div className="flex gap-4">
                    <Link href="/login" className='px-4 py-2 hover:bg-opacity-80 active:scale-90 transition rounded-lg bg-hmid text-text font-semibold'>Login</Link>
                    <Link href="/get-started" className='px-4 py-2 hover:bg-opacity-80 active:scale-90 transition rounded-lg bg-background text-text font-semibold'>Get Started</Link>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;