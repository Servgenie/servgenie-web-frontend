"use client"

import React, { useEffect, useRef } from 'react'
import Logo from './Logo'
import { useAnimation, useInView, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { scrollToSection } from '@/utils/navgiation'

const Footer = () => {

    const Footer = useRef(null)
    const mainControls = useAnimation()
    const isInView = useInView(Footer, { once: false })
    const router = useRouter()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        } else {
            mainControls.start("hidden")
        }
    }, [isInView, mainControls])

    const handleSocialsClick = (social: string) => {
        if (!window) return

        if (social === "linkedin") {
            window.open("https://www.linkedin.com/company/servgenie/about/", "_blank")
        } else if (social === "instagram") {
            window.open("https://www.instagram.com/servgenie", "_blank")
        } else if (social === "threads") {
            window.open("https://www.threads.net/@servgenie", "_blank")
        } else if (social === "facebook") {
            window.open("https://www.facebook.com/servgenie.co/", "_blank")
        }
    }


    return (
        <>
            <div className='mt-8 lg:mt-4 lg:px-[4rem] min-h-[30vh] md:h-[15vh] lg:h-[30vh] md: ' ref={Footer}>

                <div className='flex flex-col sm:flex-row items-center justify-center gap-7 sm:gap-5 sm:justify-between md:px-8 lg:px-0'>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.3, delay: 0.3, ease: "easeIn" }}
                    >
                        <Logo />
                    </motion.div>

                    <ul className='flex text-[14px] sm:text-[16px] leading-7 items-center justify-center gap-4 sm:gap-8 ps-slim '>

                        <motion.li
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
                            className='cursor-pointer text-gray-700 hover:text-gray-900 hover:underline'
                            onClick={() => scrollToSection("about")}
                        >About us</motion.li>

                        <motion.li
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 0.3, delay: 0.4, ease: "easeIn" }}
                            className='cursor-pointer text-gray-700 hover:text-gray-900 hover:underline'
                            onClick={() => scrollToSection("features")}
                        >Features</motion.li>

                    </ul>

                    <div className='flex items-center justify-center gap-[21px]'>

                    <motion.img
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 0.3, delay: 0.9, ease: "easeIn" }}
                            src="/assets/footer/yt.svg" alt="linkedin"  className='cursor-pointer  hover:opacity-100 hover:scale-110 transition-all'
                            onClick={() => handleSocialsClick("linkedin")}
                        />
                        
                        <motion.img
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 0.3, delay: 0.7, ease: "easeIn" }}
                            src="/assets/footer/instagram.svg" alt="instagram" className='cursor-pointer  hover:opacity-100 hover:scale-110 transition-all'
                            onClick={() => handleSocialsClick("instagram")}
                        />

                        <motion.img
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 0.3, delay: 0.5, ease: "easeIn" }}
                            src="/assets/footer/fb.svg" alt="facebook" className='cursor-pointer  hover:opacity-100 hover:scale-110 transition-all'
                            onClick={() => handleSocialsClick("facebook")}
                        />
                        

                        <motion.img
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 0.3, delay: 0.5, ease: "easeIn" }}
                            src="/assets/footer/linkedin.svg" alt="facebook"  className='cursor-pointer  hover:opacity-100 hover:scale-110 transition-all'
                            onClick={() => handleSocialsClick("threads")}
                        />


                    </div>
                </div>

                <div className='w-full border my-7'></div>


                <div className='flex items-start justify-between md:px-6 lg:px-0 '>

                    <div className=' flex flex-col text-[13px]  sm:text-[16px] ps-slim leading-[14px] sm:leading-4 gap-2 items-center justify-center w-full px-6 sm:px-0 '>
                        <motion.p
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 0.3, delay: 0.4, ease: "easeIn" }}
                            className='text-black'>© 2024 Servgenie® LLC.</motion.p>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{ duration: 0.3, delay: 0.6, ease: "easeIn" }}
                            className='text-[#727171] text-center'></motion.p>
                    </div>

                </div>
            </div>

            <img src="/assets/footer.png" alt="footer" className='mx-auto hidden lg:block' />
            <img src="/assets/footer.png" alt="footer" className='mx-auto w-[80%] block sm:hidden' />

        </>
    )
}

export default Footer