"use client"

import React, { useEffect, useRef } from 'react'
import { useAnimation, useInView, motion } from 'framer-motion'

const WhatIsServgenie = () => {

    const whatIsServgenieRef = useRef(null)
    const mainControls = useAnimation()
    const isInView = useInView(whatIsServgenieRef, { once: false,margin:'-30%' })

    useEffect(() => {
        if (isInView) { 
            mainControls.start("visible")
        } else {
            mainControls.start("hidden")
        }
    }, [isInView, mainControls])

    return (
        <div className='max-w-[95rem]  mx-auto lg:mt-64 mt-48 ' id='about' ref={whatIsServgenieRef}>

            <div className='w-full flex flex-col-reverse lg:flex-row relative overflow-hidden  servgenieDiv lg:pl-10 ' >

                <img src="/assets/wave2.png" alt="wave"
                    className='absolute top-[30%] lg:top-0 right-0 w-[110%] hidden sm:block wave'
                />

                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: -30 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
                    className="flex-1 pl-2 sm:pl-10 flex items-center lg:items-start justify-center flex-col gap-6 sm:gap-8 ">

                    <h1 className='hidden lg:block text-[3.8rem] leading-[69px] ps-bulky'>What is <br /> Servgenie?</h1>

                    <h1 className='block lg:hidden text-[2rem] mt-10 md:text-[56px] leading-8 ps-bulky text-center w-[100%] '>What is Servgenie?</h1>

                    <p className='w-[90%] mx-auto sm:mx-0 md-[80%]  lg:w-[70%] text-[1rem] leading-5 md:text-[24px] lg:text-2xl sm:leading-8 ps-slim text-center lg:text-start text-[#6B7280] sm:text-[#2F2F2F]'>
                        Servgenie aims to revolutionize the service market by providing a one-stop platform to find and hire
                        skilled freelancers, giving you access to a wide range of services, all in one place.
                        <br />
                        <br />
                        As our “Wisher”, you can make one request for multiple tasks, and our verified professionals aka “Genies” will grant it.
                    </p>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: 20 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.3, delay: 0.3, ease: "easeIn" }}
                    className="flex-1  flex items-center justify-center lg:justify-start relative  lg:pl-12">
                    {/* desktop */}
                    <img src="/assets/whatServgenie/main.png" alt="whatServgenie"
                        className='hidden sm:block '
                    />

                    <motion.img
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.3, delay: 1, ease: "easeIn" }}
                        src="/assets/whatServgenie/1svg.svg" alt="whatServgenie"
                        className='absolute top-[50%] left-[5%] lg:-left-[20%] hidden sm:block card1'
                    // style={{ boxShadow: "0px 11px 100px 0px #8F52FF40" }}
                    />
                    <motion.img
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.3, delay: 0.8, ease: "easeIn" }}
                        src="/assets/whatServgenie/2svg.svg" alt="whatServgenie"
                        className='absolute top-[30%] right-[5%] lg:right-[10%] hidden sm:block card2'
                    // style={{ boxShadow: "0px 11px 100px 0px #8F52FF40" }}
                    />

                    <motion.img
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.3, delay: 1.2, ease: "easeIn" }}
                        src="/assets/whatServgenie/3svg.svg" alt="whatServgenie"
                        className='absolute bottom-[15%] right-[5%] lg:right-[10%] hidden sm:block card3'
                    // style={{ boxShadow: "0px 11px 100px 0px #8F52FF40" }}
                    />


                    {/*mobile and tablet*/}

                    <motion.img
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.3, delay: 0.8, ease: "easeIn" }}
                        src="/assets/whatServgenie/main.png" alt="whatServgenie"
                        className='sm:hidden w-[80%] mx-auto  '
                    />

                    <motion.img
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.3, delay: 0.8, ease: "easeIn" }}
                        src="/assets/whatServgenie/1.png" alt="whatServgenie"
                        className='absolute top-[38%] -left-[10%] w-[80%] sm:hidden'
                    />
                    <motion.img
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.3, delay: 0.8, ease: "easeIn" }}
                        src="/assets/whatServgenie/2.png" alt="whatServgenie"
                        className='absolute top-[0%] -right-20 w-[80%] sm:hidden'
                    />
                    <motion.img
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.3, delay: 0.8, ease: "easeIn" }}
                        src="/assets/whatServgenie/3.png" alt="whatServgenie"
                        className='absolute bottom-[-20%] right-[-10%] w-[80%] sm:hidden'
                    />


                </motion.div>
            </div>
        </div>
    )
}

export default WhatIsServgenie