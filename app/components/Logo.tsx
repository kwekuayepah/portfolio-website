import React from 'react'

type LogoVariant = 'monogram' | 'full-horizontal' | 'full-stacked' | 'minimal'

interface LogoProps {
    variant?: LogoVariant
    className?: string
    width?: number
    height?: number
    color?: string
}

export default function Logo({
    variant = 'monogram',
    className = '',
    width,
    height,
    color = 'currentColor'
}: LogoProps) {

    // Default dimensions based on variant
    const defaultSize = variant === 'monogram' ? 48 : variant === 'full-horizontal' ? 44 : 52
    const w = width || defaultSize
    const h = height || defaultSize

    // Common SVG path for the mark
    const MarkPath = () => (
        <>
            <path d="M12 88 L12 12" stroke={color} strokeWidth="5" strokeLinecap="round" />
            <path d="M12 52 L38 12" stroke={color} strokeWidth="5" strokeLinecap="round" />
            <path d="M12 52 L74 52" stroke={color} strokeWidth="5" strokeLinecap="round" />
            <path d="M46 52 L46 12 L88 88" stroke={color} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </>
    )

    if (variant === 'monogram') {
        return (
            <svg
                width={w}
                height={h}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
            >
                <MarkPath />
            </svg>
        )
    }

    if (variant === 'full-horizontal') {
        return (
            <div className={`flex items-center gap-4 ${className}`}>
                <svg
                    width={w}
                    height={h}
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
                >
                    <MarkPath />
                </svg>
                <div className="flex flex-col">
                    <span className="font-sans text-xl sm:text-2xl font-bold leading-none text-skin-primary">Kweku Ayepah</span>
                    <span className="font-sans text-xs font-light italic text-skin-base mt-0.5">Software Engineer</span>
                </div>
            </div>
        )
    }

    if (variant === 'minimal') {
        return (
            <div className={`flex items-center gap-3 ${className}`}>
                <svg
                    width={28}
                    height={28}
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
                >
                    <path d="M12 88 L12 12" stroke={color} strokeWidth="6" strokeLinecap="round" />
                    <path d="M12 52 L38 12" stroke={color} strokeWidth="6" strokeLinecap="round" />
                    <path d="M12 52 L74 52" stroke={color} strokeWidth="6" strokeLinecap="round" />
                    <path d="M46 52 L46 12 L88 88" stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                <span className="font-sans text-lg font-medium text-skin-primary">Kweku Ayepah</span>
            </div>
        )
    }

    return (
        <div className={`flex flex-col items-center gap-3 text-center ${className}`}>
            <svg
                width={w}
                height={h}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <MarkPath />
            </svg>
            <div className="flex flex-col items-center">
                <span className="font-sans text-2xl font-bold text-skin-primary">Kweku Ayepah</span>
                <span className="font-sans text-sm font-light italic text-skin-base">Software Engineer</span>
            </div>
        </div>
    )
}
