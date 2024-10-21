import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getServerSession } from 'next-auth'
import options from '@/app/_lib/auth'
import { getOrders } from '@/app/_lib/data-services'
import OrderCard from './OrderCard'

export default async function OrdersPage() {
    const session = await getServerSession(options)
    const orders = await getOrders(session.user.id)
    // console.log(orders);

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
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="flex items-center mb-6">
                        <Link href="/account" className="flex items-center text-gray-600 hover:text-gray-900">
                            <ArrowLeft className="h-5 w-5 mr-2" />
                            Back to Account
                        </Link>
                    </div>
                    {orders ?
                        <>
                            <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Orders</h1>
                            <div className="bg-white shadow overflow-hidden sm:rounded-md">
                                <ul className="divide-y divide-gray-200">
                                    {orders.map((order) => (
                                        <OrderCard order={order} key={order.id} />
                                    ))}
                                </ul>
                            </div>
                        </>
                        :
                        <div className='text-xl'>
                            No orders found, <Link className='text-green-500 border-b border-transparent transition hover:border-green-500 pb-0.5' href="/">Discover the products.</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}