'use client'

import React, { useState } from 'react';
import { CreateOrder } from '../../_lib/data-services';

export default function OrderForm({ product, onClose, onSuccess, userId }) {
    const [phoneNum, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    console.log(userId)

    const [error, setError] = useState(null); // To store error message

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError(null)
            await CreateOrder({
                productId: product.id,
                phoneNum,
                location,
                userId
            });
            onSuccess();
            onClose();
        } catch (err) {
            setError('Failed to create order. Please try again.');
        }
    };
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-20">
            <div className="p-6 rounded-2xl shadow-xl w-full max-w-md bg-slate-100">
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mb-4">
                    <img
                        src={product.imageUrl || "/api/placeholder/400/300"}
                        alt={product.name}
                        className="w-auto m-auto h-48 object-cover rounded-md"
                    />
                </div>
                <p className="text-lg font-bold mb-4">Price: {product.price.toFixed(2)} EG</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>

                        <input
                            placeholder='Phone Number (+20)'
                            type="tel"
                            id="phoneNumber"
                            value={phoneNum}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            className="shadow-md w-full p-2 rounded outline-0"
                        />
                    </div>
                    <div>
                        <input
                            placeholder='Address'
                            type="text"
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                            className="shadow-md w-full p-2 rounded outline-0"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gray-800 hover:bg-black transition text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Place Order
                    </button>
                </form>
                <button
                    onClick={onClose}
                    className="mt-4 w-full bg-gray-300 hover:bg-gray-400 transition text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Cancel
                </button>
                {error && (
                    <div className="error-box bg-red-200 p-4 rounded mt-4">
                        <p>{error}</p>
                    </div>
                )}
            </div>
        </div>

    )
}