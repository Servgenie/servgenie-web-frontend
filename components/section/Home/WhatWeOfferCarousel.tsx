"use client"

import React from 'react'
import Lottie1 from '@/app/lottie/1.json'
import Lottie2 from '@/app/lottie/2.json'
import Lottie3 from '@/app/lottie/3.json'
import Lottie4 from '@/app/lottie/4.json'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import Lottie from 'lottie-react'
import LottieHoverAnimation from './lottie-player'
import { cn } from '@/utils/help'

export const offers = [
    {
        "title": "Any wish",
        "description": "Servgenie offers a broad task scope, streamlining access to any service you require. If you can hashtag it, you can wish for it.",
        "animationData": Lottie2
    },
    {
        "title": "Ease of Use",
        "description": "Finding help doesn't have to be complicated. No need to spend another 30 minutes filling up forms. Just make your wish, tag it, and our genies will be at your fingertips.",
        "animationData": Lottie1
    },
    {
        "title": "Verified and Trusted",
        "description": "We prioritize your safety. Servgenie requires providers to pass identity verification and background checks. And to give you the extra confidence to trust our Genies, their ratings, reviews, and success rates are visible on their profile.",
        "animationData": Lottie3
    },
    {
        "title": "Price Negotiation",
        "description": "As the Wisher, you get to seal the deal! Wishes receive bids from Genies, allowing you to select or negotiate for the best deal.",
        "animationData": Lottie4
    }
];
const WhatWeOfferCarousel = ({className }: PropsWithClassName) => {

    return <div className={cn("w-full",className)}>
        <Splide
            options={{
                gap: "1rem",
                autoWidth: true,
                type: "loop",
                drag: "free",
                arrows: false,
                pagination: false,
                autoScroll: { pauseOnFocus: true, pauseOnHover: true, speed: .5},
            }}
            extensions={{ AutoScroll }}
        >

            {[...offers,...offers].map((offer, key) => (
                <SplideSlide key={key}>
                    <OfferCard title={offer.title} description={offer.description} animationData={offer.animationData} />
                </SplideSlide>
            ))}
        </Splide>
    </div>
};

export default WhatWeOfferCarousel;


type OfferCardProps = {
    title: string
    description: string
    animationData: any
}

const OfferCard = ({ title, description, animationData }: OfferCardProps) => {
    const [isPlaying, setIsPlaying] = React.useState(false);

    const handleMouseEnter = () => {
        setIsPlaying(true);
    };

    const handleMouseLeave = () => {
        setIsPlaying(false);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='md:w-[420px] md:max-h-[480px] my-4 hover:shadow-md hover:-translate-y-2 duration-300 transition-all h-full  rounded-[2.5rem] bg-white p-4 flex items-center justify-center flex-col gap-2'>
            <div className='p-4 h-72'>
                <LottieHoverAnimation isPlaying={isPlaying} animationData={animationData} />
            </div>

            <h1 className='text-[2.3rem] ps-bulky'>{title}</h1>
            <p className='text-center text-[#727171] text-[1rem] leading-6 ps-slim'>
                {description}
            </p>
        </div>
    )
}