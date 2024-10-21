import Image from "next/image"
import Link from "next/link"
import { Package, MapPin, Phone, Clock, DollarSign } from "lucide-react"
export default function OrderCard({order}) {

    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg m-3">
            <div className="px-4 py-5 sm:px-6">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Order #{order.id}
                    </h3>
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        {order.orderStatus}
                    </p>
                </div>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    <Clock className="inline-block mr-1 h-4 w-4" />
                    Placed on {new Date(order.created_at).toLocaleDateString()}
                </p>
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 flex items-center">
                            <Package className="mr-2 h-5 w-5" /> Product
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 flex items-center">
                            <Image
                                src={order.product.imageUrl}
                                alt={order.product.name}
                                width={50}
                                height={50}
                                className="mr-4 rounded-md"
                            />
                            <div>
                                <p className="font-medium">{order.product.name}</p>
                                <p className="text-gray-500">${order.product.price.toFixed(2)}</p>
                            </div>
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 flex items-center">
                            <MapPin className="mr-2 h-5 w-5" /> Delivery Location
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {order.location}
                        </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 flex items-center">
                            <Phone className="mr-2 h-5 w-5" /> Contact Number
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {order.phoneNum}
                        </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500 flex items-center">
                            <DollarSign className="mr-2 h-5 w-5" /> Total Amount
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            ${order.product.price.toFixed(2)}
                        </dd>
                    </div>
                </dl>
            </div>
            <div className="bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                    <Link href={`/account/orders/${order.id}`} className="font-medium text-indigo-600 hover:text-indigo-500">
                        View order details
                    </Link>
                </div>
            </div>
        </div>
    )
}