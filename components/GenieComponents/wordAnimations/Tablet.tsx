"use client"

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Tablet = () => {
    const tabletRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.fromTo(
            ".tabletTextSpan",
            { color: "#11192866" },
            {
                color: "#000000",
                stagger: 0.05,
                scrollTrigger: {
                    trigger: tabletRef.current,
                    start: "top-=100 top",
                    end: "top top",
                    scrub: true,
                }
            }
        )
    }, [])

    return (
        <div ref={tabletRef} className='hidden md:flex lg:hidden w-full text-[32px] leading-[41px] md:text-[56px] md:leading-[67px] lg:text-[72px] lg:leading-[86px] ps-medium flex-col items-center justify-center ps-bulky'>
            <div className='flex text-center'>
                <span className="tabletTextSpan">u</span>
                <span className="tabletTextSpan">n</span>
                <span className="tabletTextSpan">l</span>
                <span className="tabletTextSpan">o</span>
                <span className="tabletTextSpan">c</span>
                <span className="tabletTextSpan">k&nbsp;</span>

                <span className="tabletTextSpan">y</span>
                <span className="tabletTextSpan">o</span>
                <span className="tabletTextSpan">u</span>
                <span className="tabletTextSpan">r&nbsp;</span>

                <span className="tabletTextSpan">e</span>
                <span className="tabletTextSpan">a</span>
                <span className="tabletTextSpan">r</span>
                <span className="tabletTextSpan">n</span>
                <span className="tabletTextSpan">i</span>
                <span className="tabletTextSpan">n</span>
                <span className="tabletTextSpan">g</span>
            </div>

            <div className='flex text-center'>
                <span className="tabletTextSpan">p</span>
                <span className="tabletTextSpan">o</span>
                <span className="tabletTextSpan">t</span>
                <span className="tabletTextSpan">e</span>
                <span className="tabletTextSpan">n</span>
                <span className="tabletTextSpan">t</span>
                <span className="tabletTextSpan">i</span>
                <span className="tabletTextSpan">a</span>
                <span className="tabletTextSpan">l</span>
                <span className="tabletTextSpan">s&nbsp;</span>

                <span className="tabletTextSpan">w</span>
                <span className="tabletTextSpan">i</span>
                <span className="tabletTextSpan">t</span>
                <span className="tabletTextSpan">h&nbsp;</span>

                <div className='flex'>
                    <span>
                        <img src="/assets/logo.svg" alt="logo" className='w-[25px] md:w-[40px] lg:w-[55px] mt-1 mx-1' />
                    </span>
                    <span className="tabletTextSpan">e</span>
                    <span className="tabletTextSpan">r</span>
                    <span className="tabletTextSpan">v</span>
                    <span className="tabletTextSpan">g</span>
                    <span className="tabletTextSpan">e</span>
                    <span className="tabletTextSpan">n</span>
                    <span className="tabletTextSpan">i</span>
                    <span className="tabletTextSpan">e</span>
                    <span className="tabletTextSpan">,</span>
                </div>
            </div>

            <div className='flex text-center'>
                <span className="tabletTextSpan">a</span>
                <span className="tabletTextSpan">n</span>
                <span className="tabletTextSpan">d&nbsp;</span>

                <span className="tabletTextSpan">h</span>
                <span className="tabletTextSpan">e</span>
                <span className="tabletTextSpan">l</span>
                <span className="tabletTextSpan">p&nbsp;</span>

                <span className="tabletTextSpan">W</span>
                <span className="tabletTextSpan">i</span>
                <span className="tabletTextSpan">s</span>
                <span className="tabletTextSpan">h</span>
                <span className="tabletTextSpan">e</span>
                <span className="tabletTextSpan">r</span>
                <span className="tabletTextSpan">s&nbsp;</span>

                <span className="tabletTextSpan">g</span>
                <span className="tabletTextSpan">r</span>
                <span className="tabletTextSpan">a</span>
                <span className="tabletTextSpan">n</span>
                <span className="tabletTextSpan">t</span>
            </div>

            <div className="flex text-center">

                <span className="tabletTextSpan">t</span>
                <span className="tabletTextSpan">h</span>
                <span className="tabletTextSpan">e</span>
                <span className="tabletTextSpan">i</span>
                <span className="tabletTextSpan">r&nbsp;</span>

                <span className="tabletTextSpan">w</span>
                <span className="tabletTextSpan">i</span>
                <span className="tabletTextSpan">s</span>
                <span className="tabletTextSpan">h</span>
                <span className="tabletTextSpan">e</span>
                <span className="tabletTextSpan">s</span>
                <span className="tabletTextSpan">.</span>

            </div>
        </div>
    )
}

export default Tablet
