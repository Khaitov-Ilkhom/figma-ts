import React, {FC} from "react";
import {useEffect, useState} from "react";
import ProductCard from "../product-card/ProductCard.tsx"
import {useNavigate} from "react-router-dom";

type ProductT = {
  id: number,
  title: string,
  description: string,
  category: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  tags: string[],
  brand: string,
  sku: string,
  weight: number,
  dimensions: {
    width: number,
    height: number,
    depth: number
  },
  warrantyInformation: string,
  shippingInformation: string,
  availabilityStatus: string,
  reviews: {
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string
  }[],
  returnPolicy: string,
  minimumOrderQuantity: number,
  meta: {
    createdAt: string,
    updatedAt: string,
    barcode: string,
    qrCode: string
  },
  images: string[],
  thumbnail: string
}

type StateT = {
  loading: boolean;
  products: ProductT[];
  error: any;
}

const Product: FC = ({type}) => {
  const [limit, setLimit] = useState(8)
  const [state, setState]: StateT = useState({
    loading: true,
    products: [],
    error: null,
  });
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState((state: StateT) => ({...state, loading: true}));
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        setState((state) => ({...state, products: data.products}));
      } catch (error) {
        setState((state) => ({...state, error}));
      } finally {
        setState((state) => ({...state, loading: false}));
      }
    }

    fetchData();
  }, [])

  return <div className="">
    <h1 className='text-center text-4xl font-semibold mb-4'>{ type && type === "product" ? "Best Selling" : "All Products"}</h1>

    {
      type && type === "product" ? <div className="grid grid-cols-4 gap-5">
            {state.products.slice(0, 4).map((product: ProductT) => (
                <div key={product.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-4">
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
                    <div className="flex justify-between items-center my-2">
                      <p className="text-yellow-500 text-sm font-semibold">
                        Rating: {product.rating}
                      </p>
                      <p className={`${product.stock > 0 ? 'text-green-500' : 'text-red-500'} text-sm`}>
                        {product.stock > 0 ? `In stock: ${product.stock}` : "Out of stock"}
                      </p>
                    </div>
                    <button onClick={() => navigate(`/details/${product.id}`)}
                            className="mt-2 w-full bg-black text-white py-2 px-4 rounded ">
                      Product details
                    </button>
                  </div>
                </div>
            ))}
          </div> :
          <div className="grid grid-cols-4 gap-5">
            {state.products.slice(0, limit).map((product: ProductT) => (
                <div key={product.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-4">
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
                    <div className="flex justify-between items-center my-2">
                      <p className="text-yellow-500 text-sm font-semibold">
                        Rating: {product.rating}
                      </p>
                      <p className={`${product.stock > 0 ? 'text-green-500' : 'text-red-500'} text-sm`}>
                        {product.stock > 0 ? `In stock: ${product.stock}` : "Out of stock"}
                      </p>
                    </div>
                    <button onClick={() => navigate(`/details/${product.id}`)}
                            className="mt-2 w-full bg-black text-white py-2 px-4 rounded">
                      Product details
                    </button>
                  </div>
                </div>
            ))}
          </div>
    }

    {
      type && type === "product" ? <></> :
          <div className='w-full flex justify-center items-center mx-auto my-4'>
            <button className="bg-black text-white py-2 px-6 rounded"
                    onClick={() => setLimit(limit + 4)}>Show more
            </button>
          </div>
    }
  </div>;
};

export default Product;
