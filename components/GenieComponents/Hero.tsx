"use client"

import JoinNowButton from '@/components/common/JoinNowButton'
import { useAnimation, useInView, motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'


const Hero = () => {

    const heroRef = useRef(null)
    const mainControls = useAnimation()
    const isInView = useInView(heroRef, { once: false })

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        } else {
            mainControls.start("hidden")
        }
    }, [isInView, mainControls])


    return (
        <div className='max-w-[90rem]   md:max-h-[90vh] md:pb-20 xs:pb-[40vh] pb-[30vh] lg:max-h-[110vh] py-20  mx-auto rounded-[24px] sm:rounded-[3rem] mt-3  relative  bg-[url("/assets/genie/hero/bg.png")] bg-center bg-cover ' id='home'
            ref={heroRef}
        >
            {/* wave container */}

            <div className='w-full h-full absolute -top-[13%] left-0 flex items-center justify-center overflow-hidden '>
                <svg min-width="1476" height="496" viewBox="0 0 1376 396" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="glow-a" opacity="0.05" d="M0 364C123.5 364 259.5 94 716.5 204.5C1233.2 329.436 1252.5 32.5 1376 32.5" stroke="url(#paint0_linear_545_370)" strokeWidth="64" />
                    <defs>
                        <linearGradient id="paint0_linear_545_370" x1="1324.88" y1="-21.1318" x2="1269.95" y2="444.89" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#8F52FF" />
                            <stop offset="1" stopColor="#1F9CD6" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* text container */}

            <div className='w-full h-[90%] flex items-center justify-center flex-col gap-8  '>
                {/*   <motion.div
                    variants={{
                        hidden: { opacity: 0, },
                        visible: { opacity: 1, },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
                    className='ps-slim leading-[20px] text-[20px] border-2 border-[#8F52FF] rounded-full px-4 py-2 bg-white '>
                    Become a servgenie
                </motion.div>
 */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, },
                        visible: { opacity: 1, },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.3, delay: 0.4, ease: "easeIn" }}
                    className='ps-bulky text-[32px] leading-[38px] md:text-[56px] md:leading-[56px] lg:text-[96px] lg:leading-[96px] text-[#111928] text-center'>
                    <p>Unlock limitless</p>
                    <p>Earning potential!</p>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, },
                        visible: { opacity: 1, },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.3, delay: 0.6, ease: "easeIn" }}
                    className='ps-slim text-[#6B7280] text-[12px] leading-[15px] md:text-[18px] md:leading-[23px] lg:text-[24px] lg:leading-[30px] text-center'>
                    <p>Unlock your earning potential and turn your skills into thriving opportunities with Servgenie.</p>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, },
                        visible: { opacity: 1, },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.3, delay: 0.8, ease: "easeIn" }}
                    className='z-50'
                >
                    <JoinNowButton />
                </motion.div>
            </div>

            {/* img container */}

            {/* desktop and tablet */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
                className='w-full max-h-screen  hidden sm:flex items-center justify-center gap-3 lg:gap-8 mt-[-5rem]'>

                <div className='flex flex-col gap-4'>
                    <img src="/assets/genie/hero/1.png" className='md:h-auto h-64 w-auto' alt="hero image" />
                    <img src="/assets/genie/hero/2.png" className='md:h-auto h-32 w-auto' alt="hero image" />
                </div>

                <div className='mt-16 md:block  hidden'>
                    <img src="/assets/genie/hero/3.png" alt="hero image" />
                </div>

                <div className='mt-[14rem]'>
                    <img src="/assets/genie/hero/4.png" className='md:h-auto h-64' alt="hero image" />
                </div>

                <div className='mt-16  md:block hidden'>
                    <img src="/assets/genie/hero/5.png" alt="hero image" />
                </div>

                <div className='flex flex-col gap-4'>
                    <img src="/assets/genie/hero/6.png" className='md:h-auto h-64 w-auto' alt="hero image" />
                    <img src="/assets/genie/hero/7.png" className='md:h-auto h-32 w-auto' alt="hero image" />
                </div>

            </motion.div>

            {/* mobile */}

            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
                className='max-h-screen flex  w-full absolute  sm:hidden items-center justify-center md:gap-3 lg:gap-8 mt-[0rem] mx-auto'>
                <img src="/assets/genie/hero/mobile-pg.svg" alt="mobile hero" className=' w-full' />
            </motion.div>

        </div>
    )
}



export default Hero