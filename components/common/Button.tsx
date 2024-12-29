'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps {
  text: string;
  variant?: 'gradient' | 'solid' | 'outline';
  href?: string;
  onClick?: () => void;
  loading?: boolean;
  className?: string;
  gradientColors?: {
    from: string;
    to: string;
  };
  backgroundColor?: string;
  textColor?: string;
  type?: 'button' | 'submit';
}

const Button = ({
  text,
  variant = 'solid',
  href,
  onClick,
  loading = false,
  className = '',
  gradientColors = { from: '#1F9CD6', to: '#822EF9' },
  type = 'button',
}: ButtonProps) => {
  const buttonContent = (
    <>
      {variant === 'solid' ? (
        <button
          type={type}
          className="ps-slim group mr-1 flex h-[40px] w-[97px] cursor-pointer items-center justify-center gap-1 rounded-full bg-[#111928] pl-2 text-sm text-white"
          onClick={onClick}
        >
          {loading ? (
            <div className="flex items-center gap-1">
              <div className="loader"></div>
            </div>
          ) : (
            <>
              <p>{text}</p>
              <div className="relative ml-1 mt-[.3rem] h-5 w-5 overflow-hidden text-white">
                <div className="absolute transition-all duration-200 group-hover:-translate-y-[14px] group-hover:translate-x-3">
                  <ArrowUpRight className="h-4 w-4" />
                  <ArrowUpRight className="h-4 w-4 -translate-x-3 -translate-y-0.5" />
                </div>
              </div>
            </>
          )}
        </button>
      ) : variant === 'gradient' ? (
        <div
          className="group flex cursor-pointer items-center justify-center gap-3 rounded-full p-2 pl-4 text-white"
          style={{
            background: `linear-gradient(0deg, ${gradientColors.from}, ${gradientColors.to})`,
          }}
          onClick={onClick}
        >
          <p className="ps-slim text-sm">{text}</p>
          <div className="h-6 w-6 overflow-hidden rounded-full bg-white text-black">
            <div className="relative ml-1 mt-[.3rem] h-5 w-5 overflow-hidden text-black">
              <div className="absolute transition-all duration-200 group-hover:-translate-y-[14px] group-hover:translate-x-3">
                <ArrowUpRight className="h-4 w-4" />
                <ArrowUpRight className="h-4 w-4 -translate-x-3 -translate-y-0.5" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="group relative p-1"
          style={{
            borderRadius: '60px',
            background: `linear-gradient(0deg, ${gradientColors.from}, ${gradientColors.to})`,
            padding: '2px',
          }}
        >
          <div
            className="flex cursor-pointer items-center justify-center gap-3 bg-white p-2 pl-4 text-[#111928]"
            style={{
              borderRadius: '60px',
            }}
            onClick={onClick}
          >
            <p className="ps-slim text-sm font-[500]">{text}</p>
            <div
              className={`relative ml-1 mt-[.3rem] h-5 w-5 overflow-hidden text-black ${className}`}
            >
              <div className="absolute transition-all duration-200 group-hover:-translate-y-[14px] group-hover:translate-x-3">
                <ArrowUpRight className="h-4 w-4" />
                <ArrowUpRight className="h-4 w-4 -translate-x-3 -translate-y-0.5" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return buttonContent;
};

export default Button;
