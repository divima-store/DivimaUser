import React from 'react';

export default function Spinner({ size = 40, color = "#000000" }) {
    return (
        <div className="flex justify-center items-center">
            <div
                className="animate-spin rounded-full border-t-2 border-b-2 border-gray-900"
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    borderColor: color,
                    borderTopColor: 'transparent',
                }}
            ></div>
        </div>
    );
};

