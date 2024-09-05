import { FaRegHeart } from "react-icons/fa";
import { BsCartCheck } from "react-icons/bs";

const Navbar = () => {
  return (
      <div className="w-full flex justify-between items-center gap-4 py-4">
        <div className="text-lg font-semibold text-gray-800">
          Exclusive
        </div>
        <div className="">
          <ul className="flex justify-center items-center gap-6 text-gray-700 font-medium">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Contact</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Sign Up</li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-4 text-gray-600 text-xl">
          <span className="hover:text-red-500 cursor-pointer"><FaRegHeart/></span>
          <span className="hover:text-green-500 cursor-pointer"><BsCartCheck/></span>
        </div>
      </div>

  )
}
export default Navbar
