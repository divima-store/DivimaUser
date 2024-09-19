import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        (<footer className="w-full py-12 bg-gray-50 bottom-0">
            <div className="container mx-auto px-4">
                <div className="flex justify-between">
                    <div className="space-y-4">
                        <h1 className="text-2xl font-bold text-gray-800">
                            DIVIMA
                        </h1>
                        <p className="text-sm text-gray-600 w-1/2">
                            Bringing smiles and style to our community. At DIVIMA, you're not just shopping – you're finding your happy look!
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
                        <nav className="space-y-2">
                            <a
                                href="/"
                                className="block text-sm text-gray-600 hover:text-gray-800">
                                Our Products
                            </a>
                            <a
                                href="/account"
                                className="block text-sm text-gray-600 hover:text-gray-800">
                                Your Account
                            </a>
                            <a href="/account/orders" className="block text-sm text-gray-600 hover:text-gray-800">
                                Your orders
                            </a>
                            <a href="/api/auth/signout" className="block text-sm text-gray-600 hover:text-gray-800">
                                Log out
                            </a>
                        </nav>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-600">
                            © {new Date().getFullYear()} DIVIMA. All rights reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-gray-600">
                                <Facebook size={20} />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-600">
                                <Twitter size={20} />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-600">
                                <Instagram size={20} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-600">
                                <Linkedin size={20} />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>)
    );
};
