import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Navbar from "../../components/navbar/Navbar.tsx";
import Footer from "../../components/footer/Footer.tsx";

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
  products: ProductT;
  error: any;
}

const Details = () => {
  const {id} = useParams()

  const [state, setState] = useState<StateT>({
    loading: true,
    products: {
      id: 0,
      title: "",
      description: "",
      category: "",
      price: 0,
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      tags: [],
      brand: "",
      sku: "",
      weight: 0,
      dimensions: {},
      warrantyInformation: "",
      shippingInformation: "",
      availabilityStatus: "",
      reviews: [],
      returnPolicy: "",
      minimumOrderQuantity: 0,
      meta: {},
      images: [],
      thumbnail: ""
    },
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState((state) => ({...state, loading: true}));
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        setState((state) => ({...state, products: data}));
      } catch (error) {
        setState((state) => ({...state, error}));
      } finally {
        setState((state) => ({...state, loading: false}));
      }
    }

    fetchData();
  }, [])

  return (
      <div className="max-w-[1440px] flex justify-center items-center flex-col">
        <Navbar/>
        <div
            className="max-w-[1200px] my-[60px] mx-auto p-4 bg-white rounded-lg shadow-lg flex justify-center items-center gap-6">
          <div className="">
            <img src={state.products.thumbnail} alt={state.products.title}
                 className="w-[500px] bg-black object-cover rounded-lg"/>

          </div>
          <div>
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{state.products.title}</h2>
              <p className="text-sm text-gray-600 mb-4 max-w-[500px]">{state.products.description}</p>

              <div className="flex items-center space-x-2 mb-2">
                <span className="text-lg font-semibold text-gray-900">${state.products.price}</span>
                <span
                    className="text-sm line-through text-gray-500">${(state.products.price / (1 - state.products.discountPercentage / 100)).toFixed(2)}</span>
                <span className="text-sm text-green-500">Save {state.products.discountPercentage}%</span>
              </div>

              <div className="flex items-center space-x-1 mb-2">
                <span className="text-yellow-500 text-sm font-semibold">({state.products.rating})</span>
              </div>

              <div className="text-sm mb-4">
                <p className="text-gray-500">Only {state.products.stock} left in stock</p>
              </div>

              <div className="space-y-2 mb-4">
                <p><strong>Brand:</strong> {state.products.brand}</p>
                <p><strong>Weight:</strong> {state.products.weight} oz</p>
                <p><strong>Warranty:</strong> {state.products.warrantyInformation}</p>
                <p><strong>Shipping:</strong> {state.products.shippingInformation}</p>
                <p><strong>Return Policy:</strong> {state.products.returnPolicy}</p>
                <p><strong>Minimum Order Quantity:</strong> {state.products.minimumOrderQuantity}</p>
              </div>

            </div>
          </div>
        </div>
        <Footer/>
      </div>
  )
}
export default Details