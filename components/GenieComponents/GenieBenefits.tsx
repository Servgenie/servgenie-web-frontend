"use client"
import React, { useEffect, useRef, useState } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useAnimation, useInView, motion } from 'framer-motion'
import Lottie1 from '@/app/lottie/genie-benifits/1.json'
import Lottie2 from '@/app/lottie/genie-benifits/2.json'
import Lottie3 from '@/app/lottie/genie-benifits/3.json'
import Lottie4 from '@/app/lottie/genie-benifits/4.json'
import Lottie from 'lottie-react'
import useWindowSize from '@/hooks/use-window'

gsap.registerPlugin(ScrollTrigger);

const GenieBenefits = () => {
    const GenieBenefits: any = useRef(null)
    const scrollTriggerRef = useRef<any>(null);

    const scrollIndicator = useRef<any>(null)

    const mainControls = useAnimation()
    const isInView = useInView(GenieBenefits, { once: false })
    const [arrowIndex, setArrowIndex] = useState(1)
    const [visitedIndex, setVisitedIndex] = useState(1);

    const { width } = useWindowSize();

    useEffect(() => {

        if (isInView) {
            mainControls.start("visible")
        } else {
            mainControls.start("hidden")
        }
    }, [isInView, mainControls])
    useEffect(() => {
        if (!window) return

        if (width < 1024) {
            return
        }

        const scrollDiv = ScrollTrigger.create({
            trigger: "#features",
            start: `top top`,
            end: "bottom bottom",
            pinSpacing: true,
            pin: ".scrollDiv",
            onUpdate: (self) => {
                const progress = self.progress * 100;

                if (scrollIndicator.current) {
                    scrollIndicator.current.style.height = `${progress}%`
                }

                if (progress < 25) {
                    setArrowIndex(1)
                    setVisitedIndex(1)

                    gsap.to(".text-1", { color: "#101828", duration: 0.5 })
                    gsap.to(".text-2, .text-3, .text-4", { color: "#6B7280", duration: 0.5 })

                    gsap.to('.rightDiv-1', { y: "0%", opacity: 1, duration: 0.5 })
                    gsap.to('.rightDiv-2', { y: "100%", opacity: 0, duration: 0.5 })
                    gsap.to('.rightDiv-3', { y: "200%", opacity: 0, duration: 0.5 })
                    gsap.to('.rightDiv-4', { y: "300%", opacity: 0, duration: 0.5 })
                }
                else if (progress >= 25 && progress < 50) {
                    setArrowIndex(2)
                    setVisitedIndex(2)

                    gsap.to(".text-2", { color: "#101828", duration: 0.5 })
                    gsap.to(".text-1, .text-3, .text-4", { color: "#6B7280", duration: 0.5 })

                    gsap.to('.rightDiv-1', { y: "-100%", opacity: 0, duration: 0.5 })
                    gsap.to('.rightDiv-2', { y: "-105%", opacity: 1, duration: 0.5 })
                    gsap.to('.rightDiv-3', { y: "100%", opacity: 0, duration: 0.5 })
                    gsap.to('.rightDiv-4', { y: "200%", opacity: 0, duration: 0.5 })
                }
                else if (progress >= 50 && progress < 75) {
                    setArrowIndex(3)
                    setVisitedIndex(3)

                    gsap.to(".text-3", { color: "#101828", duration: 0.5 })
                    gsap.to(".text-1, .text-2, .text-4", { color: "#6B7280", duration: 0.5 })

                    gsap.to('.rightDiv-1', { y: "-200%", opacity: 0, duration: 0.5 })
                    gsap.to('.rightDiv-2', { y: "-200%", opacity: 0, duration: 0.5 })
                    gsap.to('.rightDiv-3', { y: "-210%", opacity: 1, duration: 0.5 })
                    gsap.to('.rightDiv-4', { y: "100%", opacity: 0, duration: 0.5 })
                }
                else if (progress >= 75) {
                    setArrowIndex(4)
                    setVisitedIndex(4)

                    gsap.to(".text-4", { color: "#101828", duration: 0.5 })
                    gsap.to(".text-1, .text-2, .text-3", { color: "#6B7280", duration: 0.5 })

                    gsap.to('.rightDiv-1', { y: "-300%", opacity: 0, duration: 0.5 })
                    gsap.to('.rightDiv-2', { y: "-200%", opacity: 0, duration: 0.5 })
                    gsap.to('.rightDiv-3', { y: "-300%", opacity: 0, duration: 0.5 })
                    gsap.to('.rightDiv-4', { y: "-310%", opacity: 1, duration: 0.5 })
                }
            }
        })

        scrollTriggerRef.current = scrollDiv

        return () => {
            scrollDiv.kill()
        }
    }, []);

    const scrollToSection = (index: number) => {
        if (typeof window == "undefined") return;

        const progress = (index - 1) * 0.25 + 0.125 // Center of each section
        if (scrollTriggerRef.current) {
            let scrollPosition = scrollTriggerRef.current.start + (scrollTriggerRef.current.end - scrollTriggerRef.current.start) * progress

            if (index == 3) {
                scrollPosition = scrollPosition + 50;
            }
            window.scrollTo({
                top: scrollPosition,
                behavior: "smooth"
            })
        }
    }
    return (
        <div className='lg:h-[600vh] ' ref={GenieBenefits} id='features'>
            <div className='max-w-[90rem] pt-12 lg:pt-0  lg:h-screen pb-10 mx-auto bg-[url("/assets/genie/hero/bg.png")] bg-center bg-cover rounded-[48px]  scrollDiv'>
                <div className='w-full flex items-center justify-center flex-col gap-2 md:gap-4 lg:gap-4'>

                    <p className='ps-bulky text-[32px] leading-[30px] md:text-[56px] md:leading-[56px] lg:leading-[86px] lg:text-[52px] text-[#111928] text-center'>Genie Benefits</p>
                    <p className='ps-slim text-[12px] leading-[15px] md:text-[18px] md:leading-[23px] lg:leadnig-[30px] lg:text-[20px] text-[#6B7280] text-center px-4'>
                        Here's why signing up as a Genie is the smart move to make:
                    </p>

                </div>

                {/* card animations for destkop */}
                <div className='w-full hidden lg:flex h-[75%] mt-12 overflow-hidden'>

                    <div className="flex-1  flex flex-col items-start justify-center gap-6 pl-12">
                        <div className=' flex gap-6 '>
                            <div className={`w-[80px] h-[80px] rounded-full border-2 border-[#EDEDED] bg-white flex items-center justify-center 
                                    ${visitedIndex === 1 ? "opacity-100" : ""}
                                    `}
                            >
                                <div className={`h-[48px] w-[48px] rounded-full  flex items-center justify-center transition-all duration-500
                                        ${visitedIndex === 1 ? "bg-[#8F52FF]" : "border-2 border-[#EDEDED]"}
                                        `}>

                                    {
                                        (visitedIndex === 1) ?
                                            (
                                                <img src="/assets/genie/benefits/whiteStar.svg" alt="white star" />
                                            )
                                            :
                                            (
                                                <img src="/assets/genie/benefits/grayStar.svg" alt="white star" />
                                            )
                                    }

                                </div>
                            </div>

                            <div className={`w-[80px] h-[80px] rounded-full border-2 border-[#EDEDED] bg-white flex items-center justify-center 
                                    ${visitedIndex === 2 ? "opacity-100" : ""}
                                    `}
                            >
                                <div className={`h-[48px] w-[48px] rounded-full  flex items-center justify-center transition-all duration-500
                                        ${visitedIndex === 2 ? "bg-[#8F52FF]" : "border-2 border-[#EDEDED]"}
                                        `}>

                                    {
                                        (visitedIndex === 2) ?
                                            (
                                                <img src="/assets/genie/benefits/whiteBag.svg" alt="white star" />
                                            )
                                            :
                                            (
                                                <img src="/assets/genie/benefits/grayBag.svg" alt="white star" />
                                            )
                                    }

                                </div>
                            </div>


                            <div className={`w-[80px] h-[80px] rounded-full border-2 border-[#EDEDED] bg-white flex items-center justify-center 
                                    ${visitedIndex === 3 ? "opacity-100" : ""}
                                    `}
                            >
                                <div className={`h-[48px] w-[48px] rounded-full  flex items-center justify-center transition-all duration-500
                                        ${visitedIndex === 3 ? "bg-[#8F52FF]" : "border-2 border-[#EDEDED]"}
                                        `}>

                                    {
                                        (visitedIndex === 3) ?
                                            (
                                                <img src="/assets/genie/benefits/whiteFlag.svg" alt="white star" />
                                            )
                                            :
                                            (
                                                <img src="/assets/genie/benefits/grayFlag.svg" alt="white star" />
                                            )
                                    }

                                </div>
                            </div>

                            <div className={`w-[80px] h-[80px] rounded-full border-2 border-[#EDEDED] bg-white flex items-center justify-center 
                                    ${visitedIndex === 4 ? "opacity-100" : ""}
                                    `}
                            >
                                <div className={`h-[48px] w-[48px] rounded-full  flex items-center justify-center transition-all duration-500
                                        ${visitedIndex === 4 ? "bg-[#8F52FF]" : "border-2 border-[#EDEDED]"}
                                        `}>

                                    {
                                        (visitedIndex === 4) ?
                                            (
                                                <img src="/assets/genie/benefits/whiteBulb.svg" alt="white star" />
                                            )
                                            :
                                            (
                                                <img src="/assets/genie/benefits/grayBulb.svg" alt="white star" />
                                            )
                                    }

                                </div>
                            </div>


                        </div>

                        <div className='leading-[48px]  relative xl:text-[40px] text-3xl flex flex-col xl:gap-8 gap-2 ps-bulky'>

                            <div className='flex gap-6 items-center cursor-pointer text-[#101828] text-1' onClick={() => scrollToSection(1)}>
                                <p>Be a Jack of All Trades </p>
                                {
                                    (arrowIndex === 1) && (
                                        <img src="/assets/genie/benefits/arrow.svg" alt="arrow" className='ml-4' />
                                    )
                                }
                            </div>

                            <div className='flex gap-6 items-center cursor-pointer text-2 text-[#6B7280] ' onClick={() => scrollToSection(2)}>
                                <p>Work Close, Earn Fast </p>
                                {
                                    (arrowIndex === 2) && (
                                        <img src="/assets/genie/benefits/arrow.svg" alt="arrow" className='ml-4' />
                                    )
                                }
                            </div>

                            <div className='flex gap-6 items-center cursor-pointer  text-3 text-[#6B7280]' onClick={() => scrollToSection(3)}>
                                <p>Set Your Own Rates </p>
                                {
                                    (arrowIndex === 3) && (
                                        <img src="/assets/genie/benefits/arrow.svg" alt="arrow" className='ml-4' />
                                    )
                                }
                            </div>

                            <div className='flex gap-6 items-center cursor-pointer text-4 text-[#6B7280]' onClick={() => scrollToSection(4)}>
                                <p>Work on Your Terms</p>
                                {
                                    (arrowIndex === 4) && (
                                        <img src="/assets/genie/benefits/arrow.svg" alt="arrow" className='ml-4' />
                                    )
                                }
                            </div>
                            <div className='absolute h-full rounded-sm w-[3px] bg-[#D6D6E7] top-0 -left-4 transform -translate-x-1.5'>
                                <div ref={scrollIndicator} className='h-0 w-[3px] rounded-sm bg-[#8F52FF]'></div>
                            </div>

                        </div>



                    </div>

                    <div className="flex-1 flex items-center justify-start gap-8  flex-col overflow-hidden">
                        <div className='w-[638px] min-h-[512px]  rounded-[48px] bg-white py-4 px-4 flex justify-center items-center flex-col rightDiv-1 '>
                            <Lottie
                                animationData={Lottie1}
                                className=''
                                loop={true}
                                autoPlay={true}
                            />
                            <p className='md:text-xl text-lg leading-5 lg:leading-[29px] text-[#6B7280] self-end w-[98%] ps-slim'>
                                With Servgenie, you’re not limited to one type of service. From being a fitness coach, bodyguard, caregiver, to taking on unique tasks like companionship, waiting in lines, and more, you can be a jack of all trades, and still be a master of many.                            </p>
                        </div>

                        <div className='w-[638px] sm:min-h-[512px] overflow-hidden  rounded-[48px] bg-white py-4 px-4 gap-4 flex justify-center items-center flex-col rightDiv-2'>
                            <Lottie
                                animationData={Lottie2}
                                className=' '
                                loop={true}
                                autoPlay={true}
                            />
                            <p className='md:text-xl text-lg leading-5 lg:leading-[29px] h-fit text-[#6B7280] self-end w-[98%] ps-slim'>
                                Our geo-location integration allows you to see on-demand requests from clients nearby, cutting down travel time and enabling you to complete tasks quickly. You can take multiple jobs in your area with ease, maximizing your earnings while minimizing travel hassles. Time is money, and we help you save both.
                            </p>
                        </div>

                        <div className='w-[638px] min-h-[512px]  rounded-[48px] bg-white py-4 px-4 flex justify-center items-center flex-col rightDiv-3'>
                            <Lottie
                                animationData={Lottie3}
                                className='h-full'
                                loop={true}
                                autoPlay={true}
                            />
                            <p className='md:text-xl text-lg  leading-5 lg:leading-[29px] text-[#6B7280] self-end w-[98%] ps-slim'>
                                With Servgenie’s service bidding, you can initiate offers on available wishes and set the value for your work. You decide your worth, and we ensure you keep 100% of what you earn—plus tips! Payments are handled securely through our platform, so you can focus on delivering quality service while we take care of the rest.
                            </p>
                        </div>

                        <div className='w-[638px] min-h-[512px]  rounded-[48px] bg-white py-4 px-4 flex justify-center items-center flex-col rightDiv-4 gap-6'>
                            <Lottie
                                animationData={Lottie4}
                                className=''
                                loop={true}
                                autoPlay={true}
                            />
                            <p className='md:text-xl text-lg leading  leading-5 lg:leading-[29px] text-[#6B7280] self-end w-[98%] ps-slim'>
                                Enjoy complete flexibility in your work. Choose the services you offer and jobs you take, decide when and where you work, and create a schedule that fits your lifestyle. It's all about freedom and independence—work on your terms and be your own boss!
                            </p>
                        </div>

                    </div>
                </div>

                {/* card animations for mobile and tablet */}

                <div className='w-full gap-8 flex items-center justify-center xl:gap-6 lg:hidden flex-wrap overflow-hidden  mt-10'>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.3, delay: 0.5, ease: "easeIn" }}
                        className='w-[95%] md:w-[330px] md:h-[380px] lg:w-[419px] lg:h-[480px] rounded-[2.5rem] bg-white p-4 flex items-center justify-center flex-col gap-2  md:gap-4 relative'>

                        <Lottie animationData={Lottie1} className='w-[95%] mb-4' />

                        <h1 className='text-[24px] leading-[28px] md:text-[24px] md:leading-[28px] text-center ps-bulky'>Be a Jack of All Trades</h1>
                        <p className='text-[12px] leading-3-[16px] md:text-[15px] leading-[16px] text-center text-[#727171] ps-slim'>
                            With Servgenie, you’re not limited to one type of service. From being a fitness coach, bodyguard, caregiver, to taking on unique tasks like companionship, waiting in lines, and more, you can be a jack of all trades, and still be a master of many.
                        </p>

                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.3, delay: 0.5, ease: "easeIn" }}
                        className='w-[95%] md:w-[330px] md:h-[380px] lg:w-[419px] lg:h-[480px] rounded-[2.5rem] bg-white p-4 flex items-center justify-center flex-col gap-2 md:gap-4 relative'>

                        <Lottie animationData={Lottie2} className='w-[95%] mb-4' />

                        <h1 className='text-[24px] leading-[28px] md:text-[24px] md:leading-[28px] text-center ps-bulky'>Work Close, Earn Fast</h1>
                        <p className='text-[12px] leading-3-[16px] md:text-[15px] leading-[16px] text-center text-[#727171] ps-slim'>
                            Our geo-location integration allows you to see on-demand requests from clients nearby, cutting down travel time and enabling you to complete tasks quickly. You can take on multiple jobs in your area with ease, maximizing your earnings while minimizing travel hassles. Time is money, and we help you save both.
                        </p>

                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.3, delay: 0.5, ease: "easeIn" }}
                        className='w-[95%] md:w-[330px] md:h-[380px] lg:w-[419px] lg:h-[480px] rounded-[2.5rem] bg-white p-4 flex items-center justify-center flex-col gap-2 md:gap-4 relative'>

                        <Lottie animationData={Lottie3} className='w-[95%] mb-4' />

                        <h1 className='text-[24px] leading-[28px] md:text-[24px] md:leading-[28px] text-center ps-bulky'>Set Your Own Rates</h1>
                        <p className='text-[12px] leading-3-[16px] md:text-[15px] leading-[16px] text-center text-[#727171] ps-slim'>
                            With Servgenie’s service bidding, you can initiate offers on available wishes and set the value for your work. You decide your worth, and we ensure you keep 100% of what you earn—plus tips! Payments are handled securely through our platform, so you can focus on delivering quality service while we take care of the rest.
                        </p>

                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.3, delay: 0.5, ease: "easeIn" }}
                        className='w-[95%] md:w-[330px] md:h-[380px] lg:w-[419px] lg:h-[480px] rounded-[2.5rem] bg-white p-4 flex items-center justify-center flex-col gap-2 relative'>

                        <Lottie animationData={Lottie4} className='w-[95%] mb-4' />

                        <h1 className='text-[24px] leading-[28px] md:text-[24px] md:leading-[28px] text-center ps-bulky'>Work on Your Teams</h1>
                        <p className='text-[12px] leading-3-[16px] md:text-[15px] leading-[16px] text-center text-[#727171] ps-slim'>
                            Enjoy complete flexibility in your work. Choose the services you offer and jobs you take, decide when and where you work, and create a schedule that fits your lifestyle. It's all about freedom and independence—work on your terms and be your own boss!
                        </p>

                    </motion.div>

                </div>

            </div>
        </div>
    )
}

export default GenieBenefits