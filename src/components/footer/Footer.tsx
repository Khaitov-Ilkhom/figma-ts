import img from "../../images/Frame 719.png"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
      <div className="w-full flex justify-center items-center flex-col px-[30px] pt-[30px] bg-black">
        <div className="grid grid-cols-5 gap-6 text-white px-6 py-4">
          <div className="flex items-start flex-col">
            <span className="text-3xl font-semibold">Exclusive</span>
            <span className="my-1">Subscribe</span>
            <span className="my-1">Get 10% off your first order</span>
            <input className="my-1 bg-black rounded px-2 py-1 border border-white outline-none" type="text" placeholder="Enter your email"/>
          </div>
          <div className="flex items-start flex-col">
            <span className="text-xl">Support</span>
            <span className="my-1 max-w-[200px]">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</span>
            <span className="my-1">exclusive@gmail.com</span>
            <span className="my-1">+88015-88888-9999</span>
          </div>
          <div className="flex items-start flex-col">
            <span className="text-xl">Account</span>
            <span className="my-1">My Account</span>
            <span className="my-1">Login / Register</span>
            <span className="my-1">Cart</span>
            <span className="my-1">Wishlist</span>
            <span className="my-1">Shop</span>
          </div>
          <div className="flex items-start flex-col">
            <span className="text-xl">Quick Link</span>
            <span className="my-1">Privacy Policy</span>
            <span className="my-1">Terms Of Use</span>
            <span className="my-1">FAQ</span>
            <span className="my-1">Contact</span>
          </div>
          <div className="flex items-start flex-col">
            <span className="text-xl">Download App</span>
            <span className="my-1 text-sm">Save $3 with App New User Only</span>
            <img className="my-2" src={img as string} alt="Image"/>
            <div className="flex justify-center items-center gap-4 my-2">
              <span><FaFacebookF/></span>
              <span><FaTwitter/></span>
              <span><FaInstagram/></span>
              <span><FaLinkedinIn/></span>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center text-[#F9F9F933] my-3">
          <p>Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>
  )
}
export default Footer
