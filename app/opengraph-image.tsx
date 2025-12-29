import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Kweku Ayepah - Software Engineer'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#0a0a0a',
                    color: '#f0f0f0',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 40,
                    }}
                >
                    {/* KA Monogram */}
                    <svg
                        width="120"
                        height="120"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 88 L12 12"
                            stroke="#f0f0f0"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                        <path
                            d="M12 52 L38 12"
                            stroke="#f0f0f0"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                        <path
                            d="M12 52 L74 52"
                            stroke="#f0f0f0"
                            strokeWidth="5"
                            strokeLinecap="round"
                        />
                        <path
                            d="M46 52 L46 12 L88 88"
                            stroke="#f0f0f0"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                        />
                    </svg>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: 10,
                        }}
                    >
                        <div
                            style={{
                                fontSize: 64,
                                fontFamily: 'serif',
                                fontWeight: 400,
                                letterSpacing: '-0.02em',
                                color: '#f0f0f0',
                            }}
                        >
                            Kweku Ayepah
                        </div>
                        <div
                            style={{
                                fontSize: 32,
                                fontFamily: 'sans-serif',
                                fontWeight: 300,
                                color: '#888888',
                                letterSpacing: '0.05em',
                                textTransform: 'uppercase',
                            }}
                        >
                            Software Engineer
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
