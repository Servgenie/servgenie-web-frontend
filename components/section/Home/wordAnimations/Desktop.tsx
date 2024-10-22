"use client"

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Desktop = () => {
    const desktopRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.fromTo(
            ".textSpan",
            { color: "#11192866" },
            {
                color: "#000000",
                stagger: 0.05,
                scrollTrigger: {
                    trigger: desktopRef.current,
                    start: "top+=200 bottom",
                    end: "top top",
                    scrub: true,
                }
            }
        )
    }, [])

    return (
        <div ref={desktopRef} className='hidden lg:flex w-full text-[32px] leading-[41px] md:text-[56px] md:leading-[67px] lg:text-[72px] lg:leading-[86px] ps-medium  flex-col items-center justify-center ps-bulky text-[#11192866]'>
            <div className='flex text-center'>
                <span className="textSpan">G</span>
                <span className="textSpan">e</span>
                <span className="textSpan">t&nbsp;</span>

                <span className="textSpan">R</span>
                <span className="textSpan">e</span>
                <span className="textSpan">a</span>
                <span className="textSpan">d</span>
                <span className="textSpan">y&nbsp;</span>

                <span className="textSpan">f</span>
                <span className="textSpan">o</span>
                <span className="textSpan">r&nbsp;</span>

                <div className='flex'>
                    <span>
                        <img src="/assets/logo.svg" alt="logo" className='w-[25px] md:w-[40px] lg:w-[55px] mt-1 mx-1' />
                    </span>
                    <span className="textSpan">e</span>
                    <span className="textSpan">r</span>
                    <span className="textSpan">v</span>
                    <span className="textSpan">g</span>
                    <span className="textSpan">e</span>
                    <span className="textSpan">n</span>
                    <span className="textSpan">i</span>
                    <span className="textSpan">e</span>
                </div>
            </div>

            <div>
                <span className="textSpan">S</span>
                <span className="textSpan">e</span>
                <span className="textSpan">r</span>
                <span className="textSpan">v</span>
                <span className="textSpan">i</span>
                <span className="textSpan">c</span>
                <span className="textSpan">e&nbsp;</span>

                <span className="textSpan">M</span>
                <span className="textSpan">a</span>
                <span className="textSpan">g</span>
                <span className="textSpan">i</span>
                <span className="textSpan">c&nbsp;</span>

                <span className="textSpan">i</span>
                <span className="textSpan">s&nbsp;</span>

                <span className="textSpan text-[#11192866]">J</span>
                <span className="textSpan text-[#11192866]">u</span>
                <span className="textSpan text-[#11192866]">s</span>
                <span className="textSpan text-[#11192866]">t&nbsp;</span>

                <span className="textSpan text-[#11192866]">A</span>
                <span className="textSpan text-[#11192866]">r</span>
                <span className="textSpan text-[#11192866]">o</span>
                <span className="textSpan text-[#11192866]">u</span>
                <span className="textSpan text-[#11192866]">n</span>
                <span className="textSpan text-[#11192866]">d</span>
            </div>

            <div className='text-[#11192866]'>
                <span className="textSpan">t</span>
                <span className="textSpan">h</span>
                <span className="textSpan">e&nbsp;</span>

                <span className="textSpan">C</span>
                <span className="textSpan">o</span>
                <span className="textSpan">r</span>
                <span className="textSpan">n</span>
                <span className="textSpan">e</span>
                <span className="textSpan">r</span>
                <span className="textSpan">!</span>
            </div>
        </div>
    )
}

export default Desktop
