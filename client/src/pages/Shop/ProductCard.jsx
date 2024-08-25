import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => {
    return (
        <Link to={`/shop/product/${product.productID}`} className="md:w-[18em] w-[21em] rounded shadow-gray-300 overflow-hidden shadow-lg my-5">
            <div className="p-4"> {/* Adding padding around the image */}
                <img className="w-full h-[14em] object-cover" src={`data:image/png;base64,${product.img1}`} alt={product.title} />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-base mb-2">{product.title}</div>
                <p className="text-gray-700 text-base">₹{product.totalPrice}</p>
                <p className="text-lg font-semibold" style={{ color: '#832729' }}>Order Now &gt;</p>
            </div>
        </Link>
    );
};
