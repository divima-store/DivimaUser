'use client'

import { useState } from "react"
import OrderForm from "@/app/product/[productId]/OrderForm"
import { FaCheckCircle } from "react-icons/fa"


export default function OrderButton({ product, userId }) {

    const [showOrderForm, setShowOrderForm] = useState(false)
    const [success, setSuccess] = useState(false)

    function handleShowForm() {
        setShowOrderForm(!showOrderForm)

    }
    function handleSuccess(params) {
        setSuccess(true)
    }

    return (
        <>
            {

                success ?
                    <FaCheckCircle className="text-4xl text-green-600 my-4" />
                    :
                    <button onClick={handleShowForm} className="px-6 py-2 bg-gray-800 hover:bg-black transition text-white rounded-md">
                        Order Now
                    </button>
            }
            {
                showOrderForm && (
                    <OrderForm
                        product={product}
                        onClose={handleShowForm}
                        onSuccess={handleSuccess}
                        userId={userId}
                    />
                )
            }
        </>
    )
}