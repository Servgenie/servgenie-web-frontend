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
                <span className="textSpan">U</span>
                <span className="textSpan">n</span>
                <span className="textSpan">l</span>
                <span className="textSpan">o</span>
                <span className="textSpan">c</span>
                <span className="textSpan">k&nbsp;</span>

                <span className="textSpan">y</span>
                <span className="textSpan">o</span>
                <span className="textSpan">u</span>
                <span className="textSpan">r&nbsp;</span>

                <div className="textSpan">e</div>
                <div className="textSpan">a</div>
                <div className="textSpan">r</div>
                <div className="textSpan">n</div>
                <div className="textSpan">i</div>
                <div className="textSpan">n</div>
                <div className="textSpan">g&nbsp;</div>

                <div className="textSpan">p</div>
                <div className="textSpan">o</div>
                <div className="textSpan">t</div>
                <div className="textSpan">e</div>
                <div className="textSpan">n</div>
                <div className="textSpan">t</div>
                <div className="textSpan">i</div>
                <div className="textSpan">a</div>
                <div className="textSpan">l</div>
                <div className="textSpan">s</div>
            </div>

            <div className='flex text-center'>
                <span className="textSpan">w</span>
                <span className="textSpan">i</span>
                <span className="textSpan">t</span>
                <span className="textSpan">h&nbsp;</span>

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
                    <span className="textSpan">,</span>
                </div>

                <span className="textSpan">&nbsp;a</span>
                <span className="textSpan">n</span>
                <span className="textSpan">d&nbsp;</span>

                <span className="textSpan">h</span>
                <span className="textSpan">e</span>
                <span className="textSpan">l</span>
                <span className="textSpan">p</span>

            </div>

            <div>
                <span className="textSpan">W</span>
                <span className="textSpan">i</span>
                <span className="textSpan">s</span>
                <span className="textSpan">h</span>
                <span className="textSpan">e</span>
                <span className="textSpan">r</span>
                <span className="textSpan">s&nbsp;</span>

                <span className="textSpan">g</span>
                <span className="textSpan">r</span>
                <span className="textSpan">a</span>
                <span className="textSpan">n</span>
                <span className="textSpan">t&nbsp;</span>

                <span className="textSpan">t</span>
                <span className="textSpan">h</span>
                <span className="textSpan">e</span>
                <span className="textSpan">i</span>
                <span className="textSpan">r&nbsp;</span>

                <span className="textSpan">w</span>
                <span className="textSpan">i</span>
                <span className="textSpan">s</span>
                <span className="textSpan">h</span>
                <span className="textSpan">e</span>
                <span className="textSpan">s</span>
                <span className="textSpan">.</span>
            </div>

        </div>
    )
}

export default Desktop
