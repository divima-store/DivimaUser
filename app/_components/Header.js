import Link from "next/link";
import { FaUser } from "react-icons/fa"
import SearchButton from "./SearchButton";
import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/route";

export default async function Header() {
    const session = await getServerSession(options);
    // console.log(session)
    const loggedIn = !!session;
    const img = (session?.user?.image? true : false)
    const linkStyle = "text-lg transition duration-200 text-gray-600 hover:text-black font-medium";

    return (
        <header className="top-0 fixed z-10 w-full bg-slate-50 p-4 shadow flex justify-between items-center">
            <Link href="/" className="font-bold text-2xl">D I V I M A</Link>
            <nav className="flex w-fit justify-around gap-4 items-center">
                <SearchButton />
                {loggedIn ? (
                    <Link href="/account" className={linkStyle}>
                    {img ?
                        <img src={session.user.image} className="h-[2em] rounded-full" />
                        :
                        <FaUser className="text-xl mr-2" />
                    }
                    </Link>
                ) : (
                    <Link href="/api/auth/signin" className={linkStyle}>
                        Sign In
                    </Link>
                )}
            </nav>
        </header>
    )
}