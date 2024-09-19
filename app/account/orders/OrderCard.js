export default function OrderCard({order}) {
    return (
        <div>
            <li>
                <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Package className="h-6 w-6 text-gray-400 mr-3" />
                            <p className="text-sm font-medium text-indigo-600 truncate">
                                Order ID : {order.id}
                            </p>
                        </div>
                        <div className="ml-2 flex-shrink-0 flex">
                            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {order.orderStatus}
                            </p>
                        </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500">
                                <Truck className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                                Shipped on {order.created_at}
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 sm:flex sm:justify-between">
                        <div className="sm:flex">
                            <p className="text-sm text-gray-500">
                                Total: <span className="font-medium text-gray-900">${(order.product.price).toFixed(2)}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    )
}