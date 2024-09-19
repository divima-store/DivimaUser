export default function ProductCard({ imageUrl, name, price, id }) {
    return (
        <a href={`/product/${id}`} className="hover:shadow-xl transition bg-white rounded-lg h-fit shadow-md overflow-hidden">
            <div className="h-[90%]">
                <img
                    className='h-auto w-full'
                    src={imageUrl}
                    alt={name}
                />
            </div>
            <div className="h-[10%] p-4 bg-[#f8f8f8] flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <p className="text-lg font-bold text-gray-900">{price}</p>
            </div>
        </a>
    )
}