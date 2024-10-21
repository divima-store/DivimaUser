
import Image from 'next/image'
import Link from 'next/link';
import { getServerSession } from "next-auth/next";
import options from "../_lib/auth";

export async function generateMetadata() {
    const session = await getServerSession(options);

    // Check if the session exists and has user data
    if (session && session.user) {
        // Return the first name or a fallback value
        return { title: session.user.name.split(' ')[0] || 'User'};
    }

    // Fallback if no session is available
}

export default async function AccountPage() {
    const session = await getServerSession(options)
    // console.log(session)
    
    if (!!!session) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center mb-4">Not Authenticated</h2>
                    <p className="text-center mb-4">Please sign in to view your account.</p>
                    <button
                        className="w-full bg-black flex text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
                    >
                        <Link href="/api/auth/signin " className='w-full'>
                            Sign In
                        </Link>
                    </button>
                </div>
            </div>
        )
    }
    
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-8">
                    <div className="flex flex-col items-center space-y-6">
                        <img
                            className='rounded-full'
                                src={session.user.image}
                                alt={session.user.name}
                            />
                        
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold">{session.user.name}</h3>
                            <p className="text-gray-600">{session.user.email}</p>
                        </div>
                        <button
                            className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
                        >
                            <Link href="account/orders">
                                View Your Orders
                            </Link>
                        </button>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}