// auth/signin/SignInButton.js

'use client';

import { signIn } from 'next-auth/react';
import { Google } from 'lucide-react';

const SignInButton = () => {
    const handleSignIn = async () => {
        await signIn('google', { callbackUrl: '/' });
    };

    return (
        <button
            onClick={handleSignIn}
            className="flex items-center justify-center w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
            <Google className="w-5 h-5 mr-2" />
            Sign in with Google
        </button>
    );
};

export default SignInButton;

