import "@/assets/globals.css";
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Birthday Vote',
    description: 'Abstimmung über Teilnahme an Flos Geburtstag',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="de">
        <body className={inter.className}>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            <div className="max-w-md p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md w-full mx-4 md:mx-0">
                {children}
            </div>
        </div>
        </body>
        </html>
    )
}
