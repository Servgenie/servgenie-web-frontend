"use client"

import JoinNowButton from '@/components/common/JoinNowButton'
import { useAnimation, useInView, motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import Mobile from './ImageCarousel/Mobile'


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
        <>
            <div className='w-[95%] min-h-[438px] sm:h-[594px] md:h-[602px] mx-auto rounded-[24px] sm:rounded-[3rem] mt-3 sm:mt-4  relative  bg-[url("/assets/hero/bg.png")] bg-center bg-cover ' id='home'
                ref={heroRef}
            >
                {/* wave container */}

                <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center overflow-hidden'>
                    <svg width="1476" height="496" viewBox="0 0 1376 396" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="glow-a" opacity="0.05" d="M0 364C123.5 364 259.5 94 716.5 204.5C1233.2 329.436 1252.5 32.5 1376 32.5" stroke="url(#paint0_linear_545_370)" strokeWidth="64" />
                        <defs>
                            <linearGradient id="paint0_linear_545_370" x1="1324.88" y1="-21.1318" x2="1269.95" y2="444.89" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#8F52FF" />
                                <stop offset="1" stopColor="#1F9CD6" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* hero text */}

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
                    className='max-w-[90rem] h-fit px-6  mx-auto flex flex-col items-center justify-start gap-4 sm:gap-6 md:gap-10 pt-[70px] '>

                    <div className='flex items-center  h-fit text-[32px] sm:text-[56px] lg:text-[5rem] leading-tight text-center font-bolder flex-col ps-bulky text-[#111928]'>

                        <div className='flex  text-[40px] sm:text-[56px] lg:text-[6rem] leading-[48px] sm:leading-[56px] md:leading-[96px] '>
                            <p>Any wi</p>

                            <img src="/assets/logo.svg" alt="logo"
                                className='w-[35px] md:w-[35px]  lg:w-[50px] mx-1 md:mt-6' />

                            <p>h</p>
                        </div>

                        <p>Anytime, Anywhere</p>

                    </div>


                    <p className='text-center text-[#6B7280] ps-slim text-sm xs:text-base leading-snug sm:text-xl'>
                        Finding help doesn't have to be complicated. Make a wish, and  our Genies will be at your fingertips.
                    </p>


                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.3, delay: 0.4, ease: "easeIn" }}
                        className='w-full flex items-center justify-center z-50 '>
                        <JoinNowButton />
                    </motion.div>

                </motion.div>


            </div>
            <Mobile />
        </>
    )
}



export default Hero
