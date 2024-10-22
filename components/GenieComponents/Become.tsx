"use client"

import React, { useEffect, useRef, useState } from 'react'
import { useAnimation, useInView, motion } from 'framer-motion'
import hover3d from '@/utils/hover'

const Become = () => {

    const becomeAgenie = useRef(null)
    const hoverBecomeImgRef = useRef<HTMLDivElement>(null)
    const mainControls = useAnimation()
    const isInView = useInView(becomeAgenie, { once: false })
    const [isLargerDisplay, setLargerDisplay] = useState(false)

    const hoverBecomeImg = hover3d(hoverBecomeImgRef, {
        x: 30,
        y: -40,
        z: 30
    })

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        } else {
            mainControls.start("hidden")
        }
    }, [isInView, mainControls])

    useEffect(() => {
        if (!window) return

        if (window.innerHeight > 710) {
            setLargerDisplay(true)
        }

    }, [])

    return (
        <div className={`max-w-[93rem] flex gap-6 lg:gap-16 sm:mt-[14rem] xs:mt-48 mt-32 md:mt-[16rem]   flex-col-reverse lg:flex-row  mx-auto ${isLargerDisplay ? "lg:mt-[12rem]" : "lg:mt-[14rem]"} `} id='about' ref={becomeAgenie}>

            {/* desktop mode */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                ref={hoverBecomeImgRef}

                transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
                className="flex-1 hidden lg:flex items-center justify-center relative ml-10">

                <img src="/assets/genie/become/main.svg" alt="main image"
                    style={{
                        transform: hoverBecomeImg.transform
                    }}
                    className='cursor-pointer'
                />

            </motion.div>

            {/* mobile and tablet view */}

            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}

                transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
                className="flex-1 flex lg:hidden items-center justify-center relative ">

                <img src="/assets/genie/become/main.svg" alt="main image"
                    style={{
                    }}
                    className='cursor-pointer'
                />

            </motion.div>


            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 10 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.3, delay: 0.2, ease: "easeIn" }}
                className="flex-1  flex items-center lg:items-start justify-center flex-col gap-4">

                <p className='text-[32px] leading-[30px] md:text-[56px] md:leading-[56px] lg:text-[72px] lg:leading-[86px] text-center lg:text-start ps-bulky'>Become a Genie <br /> with Servgenie</p>

                <p className='hidden lg:block text-[12px] leading-[15px] md:text-[18px] md:leading-[23px] lg:leading-[34px] lg:text-[24px] text-[#2F2F2F] ps-slim'>
                    At Servgenie, we empower you to turn your skills <br />
                    into thriving opportunities. We provide the perfect <br />
                    platform to use all your skills and talents to earn <br />
                    and work on your own terms.</p>

                <p className='block text-center w-[90%] lg:hidden text-[12px] leading-[15px] md:text-[18px] md:leading-[23px] lg:leading-[34px] lg:text-[24px] text-[#2F2F2F] ps-slim'>
                    At Servgenie, we empower you to turn your skills
                    into thriving opportunities. We provide the perfect
                    platform to use all your skills and talents to earn
                    and work on your own terms.</p>

            </motion.div>
        </div>
    )
}

export default Become