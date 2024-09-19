// _lib/auth.js or wherever your NextAuth configuration is
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ],
    theme: {
        colorScheme: 'light',
        brandColor: '#4285F4', // Google Blue
        logo: '../../icon.png', // Add your logo path here
    },
};
const handler = NextAuth(options);

export { handler as GET, handler as POST, handler as auth };

export default options;

