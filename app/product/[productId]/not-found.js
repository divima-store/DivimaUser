import Link from 'next/link'
import { ShoppingBagIcon, Home } from 'lucide-react'

export default async function ProductNotFound() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
                <ShoppingBagIcon className="mx-auto h-16 w-16 text-gray-400 mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Product Not Found</h2>
                <p className="text-gray-600 mb-6">
                    We're sorry, but the product you're looking for doesn't seem to exist.
                    It may have been removed or the link might be incorrect.
                </p>
                <div className="space-y-4">
                    <Link
                        href="/"
                        className="block w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                    >
                        <Home className="inline-block w-5 h-5 mr-2" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    )
}