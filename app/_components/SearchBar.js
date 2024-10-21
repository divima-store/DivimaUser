'use client'
import { FaSearch } from "react-icons/fa";
import {useState} from 'react'

export default function SearchBar({ onClose}) {
    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div onClick={handleBackdropClick} className="z-50 backdrop-blur-lg m-0 left-0 top-0 w-full h-full fixed">
            <form action="/product/search" className="flex justify-between items-center rounded-3xl shadow-xl px-4 py-2 w-11/12 bg-slate-100 mx-auto mt-4">
                <input
                    name="s"
                    placeholder="Search ..."
                    className="p-1 border-0 w-10/12 outline-0 text-lg rounded-xl bg-transparent"
                    />
                <button>
                    <FaSearch className="cursor-pointer text-2xl text-gray-600 hover:text-black transition" />
                </button>
            </form>
        </div>
    );
}