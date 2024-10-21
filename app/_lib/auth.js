// _lib/auth.js or wherever your NextAuth configuration is
import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { CreateUser, getUser } from './data-services';

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
    callbacks: {
        async signIn({ user, account, profile }) {
            try {
                const existingUser = await getUser(user.email)
    
                if (existingUser) {
                    user.id = existingUser.id
                    
                } else {
                    const newUser = await CreateUser(user.email)
                    user.id = newUser.id
                }
                return true;
            } catch (error) {
                return false;
            }
        },
        async jwt({ token, user }) {
            if (user) {
                // Store the user.id in the token when the user logs in
                token.id = user.id;
            }
            return token;
        },
        // Pass the user.id to the session
        async session({ session, token }) {
            // Attach user.id from the token to the session object
            session.user.id = token.id;
            return session;
        }
    }

};
const handler = NextAuth(options);

export { handler as GET, handler as POST, handler as auth };

export default options;


