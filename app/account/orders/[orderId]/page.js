import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Package, MapPin, Phone, Clock, DollarSign, Truck } from 'lucide-react'
import { getOrderById } from '@/app/_lib/data-services'

export default async function OrderDetailsPage({ params }) {
    const orderId = params.orderId;
    const order = await getOrderById(orderId);

    if (!order) {
        return <div>Order not found</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="mb-6">
                    <Link href="/account/orders" className="flex items-center text-gray-600 hover:text-gray-900">
                        <ArrowLeft className="h-5 w-5 mr-2" />
                        Back to Orders
                    </Link>
                </div>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Order Details</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Order #{order.id}</p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <div className="flex items-center justify-center mb-6">
                            <Image
                                src={order.product.imageUrl}
                                alt={order.product.name}
                                width={200}
                                height={200}
                                className="rounded-md"
                            />
                        </div>
                        <div className="text-center mb-6">
                            <h4 className="font-medium text-lg">{order.product.name}</h4>
                            <p className="text-gray-500">${order.product.price.toFixed(2)}</p>
                        </div>
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500 flex items-center">
                                    <Clock className="mr-2 h-5 w-5" /> Order Date
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                    {new Date(order.created_at).toLocaleString()}
                                </dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500 flex items-center">
                                    <Truck className="mr-2 h-5 w-5" /> Status
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                        {order.orderStatus}
                                    </span>
                                </dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500 flex items-center">
                                    <MapPin className="mr-2 h-5 w-5" /> Delivery Location
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900">{order.location}</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500 flex items-center">
                                    <Phone className="mr-2 h-5 w-5" /> Contact Number
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900">{order.phoneNum}</dd>
                            </div>
                            <div className="sm:col-span-2">
                                <dt className="text-sm font-medium text-gray-500 flex items-center">
                                    <DollarSign className="mr-2 h-5 w-5" /> Total Amount
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900">${order.product.price.toFixed(2)}</dd>
                            </div>
                        </dl>

                        <div className="mt-6 p-4 bg-gray-100 rounded-md">
                            <p className="text-sm text-gray-700">
                                <strong>Need to edit or cancel your order?</strong> Just <strong>DM the Admins</strong> and make sure to include your <strong>Order ID</strong> (the number with the <strong>#</strong> at the top) so they can easily find your order and assist you.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
