'use client';

import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import SearchBar from "./SearchBar";

export default function SearchButton() {
    const [showSearchBar, setShowSearchBar] = useState(false);

    const toggleSearchBar = () => {
        setShowSearchBar(!showSearchBar);
    };

    return (
        <>
            <button onClick={toggleSearchBar} aria-label="Toggle search bar">
                <FaSearch className="cursor-pointer text-xl text-gray-600 hover:text-black transition" />
            </button>
            {showSearchBar && <SearchBar onClose={ toggleSearchBar } />}
        </>
    );
}