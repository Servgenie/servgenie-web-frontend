"use client"

import { scrollToSection } from '@/utils/navgiation'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Logo = () => {

    const handleLogoClick = () => {
        scrollToSection("navbar")
    }

    return (
        <Link href="/">
            <div className='flex gap-2 items-center cursor-pointer'
                onClick={() => handleLogoClick()}
            >
                <img
                    src={'/assets/logo3.svg'}
                    alt='logo'
                    className='w-[104px]'
                />
            </div>
        </Link>
    )
}

export default Logo