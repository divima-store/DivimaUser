import ProductCard from './ProductCard'

export default async function CardsContainer({ products, except=null }) {
    let data
    if (except) {
        data = products.filter(prod => prod.id != except)
        // console.log("removed", except);
        
    } else {
        data = products
    }
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-center">
                {data.map((product) => (
                    <ProductCard
                        key={product.id}
                        imageUrl={product.imageUrl}
                        name={product.name}
                        price={product.price}
                        id={product.id}
                    />
                ))}
            </div>
        </div>
    )
}