import Link from 'next/link'
import { ArrowLeft, Package, Truck, CheckCircle } from 'lucide-react'

export default function OrdersPage() {
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
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">Your Orders</h1>
                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
                        <ul className="divide-y divide-gray-200">
                            {[...Array(5)].map((_, index) => (
                                <></>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}