import {useNavigate} from "react-router-dom";

const ProductCard = ({product}) => {
  const navigate = useNavigate();

  return <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-4">
    <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full bg-black h-48 py-2 object-contain rounded-lg"
    />
    <div className="p-2">
      <h5 className="text-xl font-semibold mb-2 line-clamp-1">{product.title}</h5>
      <p className="text-gray-700 text-sm mb-4 line-clamp-2">{product.description}</p>
      <p className="text-lg font-bold text-gray-900 mb-2">
        ${product.price.toFixed(2)}{" "}
        <span className="text-sm text-green-600">
            ({product.discountPercentage}% off)
          </span>
      </p>
      <div className="flex justify-between items-center">
        <p className="text-yellow-500 text-sm font-semibold">
          Rating: {product.rating}
        </p>
        <p className={`mt-2 ${product.stock > 0 ? 'text-green-500' : 'text-red-500'} text-sm`}>
          {product.stock > 0 ? `In stock: ${product.stock}` : "Out of stock"}
        </p>
      </div>
      <button onClick={() => navigate(`/details/${product.id}`)} className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Product details
      </button>
    </div>
  </div>
};

export default ProductCard;
