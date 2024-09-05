import {FC} from "react";
import {useEffect, useState} from "react";
import ProductCard from "../product-card/ProductCard.tsx"

type ProductT = {
  id: number,
  title: string,
  description: string,
  category: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  tags: [],
  brand: string,
  sku: string,
  weight: number,
  dimensions: {},
  warrantyInformation: string,
  shippingInformation: string,
  availabilityStatus: string,
  reviews: [],
  returnPolicy: string,
  minimumOrderQuantity: number,
  meta: {},
  images: [],
  thumbnail: string
}

type StateT = {
  loading: boolean;
  products: ProductT[];
  error: any;
}

const Product: FC = () => {
  const [limit, setLimit] = useState(8)
  const [state, setState] = useState<StateT>({
    loading: true,
    products: [],
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState((state) => ({...state, loading: true}));
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
    <h1>All Products</h1>

    <div className="grid grid-cols-4 gap-5">
      {state.products.slice(0, limit).map((product: ProductT) => (
          <ProductCard key={product.id} product={product}/>
      ))}
    </div>

    <div className='w-full flex justify-center items-center mx-auto my-4'>
      <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
              onClick={() => setLimit(limit + 4)}>Show more
      </button>
    </div>
  </div>;
};

export default Product;
