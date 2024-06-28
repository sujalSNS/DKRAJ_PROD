import {Link} from 'react-router-dom'

export const ProductCard = ({ product }) => {
    return (
        <Link to={`/shop/product/${product.productID}`} className="md:w-[16em] w-[19em] rounded shadow-gray-300 overflow-hidden shadow-lg my-5">
            <img className="w-full" src={product.img} alt={product.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-base mb-2">{product.title}</div>
                <p className="text-gray-700 text-base">₹{product.price}</p>
            </div>
        </Link>
    )
}
