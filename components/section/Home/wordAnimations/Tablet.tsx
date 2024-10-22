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
                    start: "top-=1000 top",
                    end: "top-=700 top",
                    scrub: true,
                }
            }
        )
    }, [])

    return (
        <div ref={tabletRef} className='hidden md:flex lg:hidden w-full text-[32px] leading-[41px] md:text-[56px] md:leading-[67px] lg:text-[72px] lg:leading-[86px] ps-medium flex-col items-center justify-center ps-bulky'>
            <div className='flex text-center'>
                <span className="tabletTextSpan">G</span>
                <span className="tabletTextSpan">e</span>
                <span className="tabletTextSpan">t&nbsp;</span>

                <span className="tabletTextSpan">R</span>
                <span className="tabletTextSpan">e</span>
                <span className="tabletTextSpan">a</span>
                <span className="tabletTextSpan">d</span>
                <span className="tabletTextSpan">y&nbsp;</span>

                <span className="tabletTextSpan">f</span>
                <span className="tabletTextSpan">o</span>
                <span className="tabletTextSpan">r&nbsp;</span>

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
                </div>
            </div>

            <div>
                <span className="tabletTextSpan">S</span>
                <span className="tabletTextSpan">e</span>
                <span className="tabletTextSpan">r</span>
                <span className="tabletTextSpan">v</span>
                <span className="tabletTextSpan">i</span>
                <span className="tabletTextSpan">c</span>
                <span className="tabletTextSpan">e&nbsp;</span>

                <span className="tabletTextSpan">M</span>
                <span className="tabletTextSpan">a</span>
                <span className="tabletTextSpan">g</span>
                <span className="tabletTextSpan">i</span>
                <span className="tabletTextSpan">c&nbsp;</span>

                <span className="tabletTextSpan">i</span>
                <span className="tabletTextSpan">s&nbsp;</span>

                <span className="tabletTextSpan">J</span>
                <span className="tabletTextSpan">u</span>
                <span className="tabletTextSpan">s</span>
                <span className="tabletTextSpan">t&nbsp;</span>
            </div>

            <div>
                <span className="tabletTextSpan">A</span>
                <span className="tabletTextSpan">r</span>
                <span className="tabletTextSpan">o</span>
                <span className="tabletTextSpan">u</span>
                <span className="tabletTextSpan">n</span>
                <span className="tabletTextSpan">d&nbsp;</span>

                <span className="tabletTextSpan">t</span>
                <span className="tabletTextSpan">h</span>
                <span className="tabletTextSpan">e&nbsp;</span>

                <span className="tabletTextSpan">C</span>
                <span className="tabletTextSpan">o</span>
                <span className="tabletTextSpan">r</span>
                <span className="tabletTextSpan">n</span>
                <span className="tabletTextSpan">e</span>
                <span className="tabletTextSpan">r</span>
                <span className="tabletTextSpan">!</span>
            </div>
        </div>
    )
}

export default Tablet
