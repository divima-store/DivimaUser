import Link from 'next/link'
import { ArrowLeftIcon } from 'lucide-react'
import { getProducts, getProduct } from "@/app/_lib/data-services"
import CardsContainer from '@/app/_components/CardsContainer'
import OrderButton from '@/app/product/[productId]/OrderButton'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    const prods = await getProducts()
    const ids = prods.map(product => ({ productId: String(product.id) }));
    return ids;
}

export async function generateMetadata({ params }) {
    const id = params.productId;

    const product = await getProduct(id);

    return {
        title: `${product.name}`,
        description: product.description
    };
}

export default async function ViewProduct({ params }) {
    const id = params.productId

    const product = await getProduct(id)


    if (!product) {
        notFound()
    }

    return (
        <>

            <div className="container mx-auto px-4 py-8">
                <Link href="/" className="inline-flex items-center text-gray-600 hover:text-black mb-6">
                    <ArrowLeftIcon className="w-5 h-5 mr-2" />
                    Back to products
                </Link>
                <div className="bg-[#f8f8f8] rounded-lg shadow-md overflow-hidden">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="h-auto w-full object-cover md:w-96"
                            />
                        </div>
                        <div className="p-8">
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <p className="text-2xl font-bold text-gray-800 mb-6">{product.price.toFixed(2)} EG</p>
                            <OrderButton product={product} />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <CardsContainer products={await getProducts()} except={id} />
            </div>
        </>
    )
}