"use client"
import Link from 'next/link'
import { Home } from 'lucide-react'
export default function ErrorPage() {
    return (
        <div className="min-h-screen bg-[#f0f0f0] flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">OOPS</h1>
                <p className="text-2xl text-gray-600 mb-8">Something went wrong</p>
                <Link href="/" className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                    <Home className="w-5 h-5 mr-2" />
                    Go back home
                </Link>
            </div>
        </div>
    )
}