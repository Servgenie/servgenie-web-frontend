"use client"

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Mobile = () => {
    const mobileRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {

        gsap.fromTo(
            ".mobileTextSpan",
            { color: "#11192866" },
            {
                color: "#000000",
                stagger: 0.05,
                scrollTrigger: {
                    trigger: mobileRef.current,
                    start: "top-=350 top",
                    end: "top-=150 top",
                    scrub: true,
                }
            }
        )
    }, [])

    return (
        <div ref={mobileRef} className='flex md:hidden w-full text-[30px] leading-[41px] md:text-[56px] md:leading-[67px] lg:text-[72px] lg:leading-[86px] ps-medium flex-col items-center justify-center ps-bulky'>
            <div className='flex text-center '>
                <span className="mobileTextSpan">U</span>
                <span className="mobileTextSpan">n</span>
                <span className="mobileTextSpan">l</span>
                <span className="mobileTextSpan">o</span>
                <span className="mobileTextSpan">c</span>
                <span className="mobileTextSpan">k&nbsp;</span>

                <span className="mobileTextSpan">y</span>
                <span className="mobileTextSpan">o</span>
                <span className="mobileTextSpan">u</span>
                <span className="mobileTextSpan">r&nbsp;</span>

                <span className="mobileTextSpan">e</span>
                <span className="mobileTextSpan">a</span>
                <span className="mobileTextSpan">r</span>
                <span className="mobileTextSpan">n</span>
                <span className="mobileTextSpan">i</span>
                <span className="mobileTextSpan">n</span>
                <span className="mobileTextSpan">g</span>
            </div>

            <div className="flex">
                <span className="mobileTextSpan">p</span>
                <span className="mobileTextSpan">o</span>
                <span className="mobileTextSpan">t</span>
                <span className="mobileTextSpan">e</span>
                <span className="mobileTextSpan">n</span>
                <span className="mobileTextSpan">t</span>
                <span className="mobileTextSpan">i</span>
                <span className="mobileTextSpan">a</span>
                <span className="mobileTextSpan">l</span>
                <span className="mobileTextSpan">s&nbsp;</span>

                <span className="mobileTextSpan">w</span>
                <span className="mobileTextSpan">i</span>
                <span className="mobileTextSpan">t</span>
                <span className="mobileTextSpan">h&nbsp;</span>
            </div>

            <div className='flex'>
                <span>
                    <img src="/assets/logo.svg" alt="logo" className='w-[25px] md:w-[40px] lg:w-[55px] mt-1 mx-1' />
                </span>
                <span className="mobileTextSpan">e</span>
                <span className="mobileTextSpan">r</span>
                <span className="mobileTextSpan">v</span>
                <span className="mobileTextSpan">g</span>
                <span className="mobileTextSpan">e</span>
                <span className="mobileTextSpan">n</span>
                <span className="mobileTextSpan">i</span>
                <span className="mobileTextSpan">e</span>
                <span className="mobileTextSpan">,&nbsp;</span>

                <span className="mobileTextSpan">a</span>
                <span className="mobileTextSpan">n</span>
                <span className="mobileTextSpan">d&nbsp;</span>

                <span className="mobileTextSpan">h</span>
                <span className="mobileTextSpan">e</span>
                <span className="mobileTextSpan">l</span>
                <span className="mobileTextSpan">p</span>
            </div>

            <div>
                <span className="mobileTextSpan">W</span>
                <span className="mobileTextSpan">i</span>
                <span className="mobileTextSpan">s</span>
                <span className="mobileTextSpan">h</span>
                <span className="mobileTextSpan">e</span>
                <span className="mobileTextSpan">r</span>
                <span className="mobileTextSpan">s&nbsp;</span>

                <span className="mobileTextSpan">g</span>
                <span className="mobileTextSpan">r</span>
                <span className="mobileTextSpan">a</span>
                <span className="mobileTextSpan">n</span>
                <span className="mobileTextSpan">t&nbsp;</span>

                <span className="mobileTextSpan">t</span>
                <span className="mobileTextSpan">h</span>
                <span className="mobileTextSpan">e</span>
                <span className="mobileTextSpan">i</span>
                <span className="mobileTextSpan">r</span>

            </div>

            <div className=''>
                <span className="mobileTextSpan">w</span>
                <span className="mobileTextSpan">i</span>
                <span className="mobileTextSpan">s</span>
                <span className="mobileTextSpan">h</span>
                <span className="mobileTextSpan">e</span>
                <span className="mobileTextSpan">s</span>
                <span className="mobileTextSpan">.</span>
            </div>
        </div>
    )
}

export default Mobile
