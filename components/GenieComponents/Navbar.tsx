"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { scrollToSection } from '@/utils/navgiation'
import { X } from 'lucide-react'
import Logo from '../common/Logo'
import JoinNowButton from '../common/JoinNowButton'


const Navbar = () => {

    const navbarRef = useRef(null)
    const mainControls = useAnimation()
    const isInView = useInView(navbarRef, { once: false })
    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        } else {
            mainControls.start("hidden")
        }
    }, [isInView, mainControls])
    // shadow-[2px_4px_22px_-7px_rgba(143,82,255,0.4)]  ${openMobileMenu ? "h-auto" : "h-0"
    return (

        <div className='h-20 bg-transparent relative z-60 w-full my-6 flex  justify-center '>
            <div className={`w-full max-w-[24rem] sm:max-w-[85rem] py-3  rounded-[30px] mx-auto z-40  shadow-[2px_4px_22px_-7px_rgba(143,82,255,0.4)] absolute  bg-white
                ${openMobileMenu} ? "h-auto" : ""`
            } id='navbar' ref={navbarRef}>

                <div className='w-full flex items-center justify-between pl-5 pr-3 '>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -10 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
                    >
                        <Logo />
                    </motion.div>


                    <ul className='hidden lg:flex items-center gap-8 font-medium leading-6 ps-slim  '>
                        <motion.li
                            variants={{
                                hidden: { opacity: 0, y: -10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
                            onClick={() => scrollToSection("about")}
                            className='cursor-pointer'>About Genie</motion.li>
                        <motion.li
                            variants={{
                                hidden: { opacity: 0, y: -10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 0.3, delay: 0.4, ease: "easeIn" }}
                            onClick={() => scrollToSection("features")}
                            className='cursor-pointer'>Genie Benefits</motion.li>
                    </ul>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 10 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.3, delay: 0.3, ease: "easeIn" }}
                        className='hidden lg:block'>
                        <JoinNowButton />
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 10 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        className='lg:hidden cursor-pointer mr-5'
                        transition={{ duration: 0.3, delay: 0.3, ease: "easeIn" }}
                    >
                        {
                            openMobileMenu ? (
                                <X
                                    onClick={() => setOpenMobileMenu(false)}
                                />
                            ) : (
                                <Image src={'/assets/menu.svg'}
                                    alt='menu'
                                    width={20}
                                    height={20}
                                    onClick={() => setOpenMobileMenu(true)}
                                />
                            )
                        }
                    </motion.div>
                </div>

                <div className={` flex lg:hidden w-full mx-auto  z-30 transition-all duration-500 overflow-hidden
    ${openMobileMenu ? "h-auto" : "h-0"}
    `}>
                    <ul className='w-[98%] mx-auto bg-white rounded-b-[24px]  flex flex-col items-center justify-center gap-7 py-8 ps-slim leading-[21px] text-[18px]  '>
                        <li
                            onClick={() => {
                                scrollToSection("about")
                                setOpenMobileMenu(false)
                            }}
                        >
                            About Genie</li>
                        <li
                            onClick={() => {
                                scrollToSection("features")
                                setOpenMobileMenu(false)
                            }}
                        >
                            Genie Benefits</li>

                        <li
                            onClick={() => {
                                scrollToSection("join")
                                setOpenMobileMenu(false)
                            }}
                        >
                            Join</li>

                    </ul>

                </div>
            </div>
        </div >

    )
}

export default Navbar