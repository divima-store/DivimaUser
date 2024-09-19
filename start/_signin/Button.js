// auth/signin/Button.js
export default function Button({ onClick, className, children }) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none ${className}`}
        >
            {children}
        </button>
    );
}
