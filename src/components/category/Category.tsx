import phone from "../../images/Category-CellPhone.png"
import computer from "../../images/Category-Computer.png"
import smartWatch from "../../images/Category-SmartWatch.png"
import camera from "../../images/Category-Camera.png"
import headPhone from "../../images/Category-Headphone.png"
import gaming from "../../images/Category-Gamepad.png"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";


const Category = () => {
  return (
      <div className="my-[50px]">
        <div className="h-[313px] flex-col justify-start items-start gap-[60px] inline-flex">
          <div className="justify-start items-end gap-[691px] inline-flex">
            <div className="flex-col justify-start items-start gap-5 inline-flex">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="w-5 h-10 relative">
                  <div className="w-5 h-10 left-0 top-0 absolute bg-black rounded"></div>
                </div>
                <div className="text-black text-base font-semibold font-['Poppins'] leading-tight">Categories</div>
              </div>
              <div className="text-black text-4xl font-semibold font-['Inter'] leading-[48px] tracking-wider">Browse By
                Category
              </div>
            </div>
            <div className="justify-start items-start gap-2 flex">
              <div className="w-[46px] h-[46px] relative">
                <div className="w-[46px] h-[46px] left-0 top-0 absolute bg-neutral-100 rounded-full"></div>
                <div className="w-6 h-6 left-[11px] top-[11px] absolute flex justify-center items-center"><FaArrowLeft size="large"/></div>
              </div>
              <div className="w-[46px] h-[46px] relative">
                <div className="w-[46px] h-[46px] left-0 top-0 absolute bg-neutral-100 rounded-full"/>
                <div className="w-6 h-6 left-[11px] top-[11px] absolute flex justify-center items-center"><FaArrowRight size="large"/></div>
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-[30px] inline-flex">
            <div
                className="w-[170px] h-[145px] pl-[55px] pr-14 pt-[25px] pb-6 rounded border border-black/30 flex-col justify-center items-end gap-4 inline-flex">
              <div className="w-14 h-14 relative flex-col justify-start items-start flex">
                <div className="w-14">
                  <img src={phone as string} alt="Phone"/>
                </div>
              </div>
              <div className="text-black text-base font-normal font-['Poppins'] leading-normal">Phones</div>
            </div>
            <div
                className="w-[170px] h-[145px] pl-10 pr-[39px] pt-[25px] pb-6 rounded border border-black/30 flex-col justify-center items-center gap-4 inline-flex">
              <div className="w-14 h-14 relative flex-col justify-start items-start flex">
                <img src={computer as string} alt="Computer"/>
              </div>
              <div className="text-black text-base font-normal font-['Poppins'] leading-normal">Computers</div>
            </div>
            <div
                className="w-[170px] h-[145px] pl-[34px] pr-[35px] pt-[25px] pb-6 rounded border border-black/30 flex-col justify-center items-center gap-4 inline-flex">
              <div className="w-14 h-14 relative flex-col justify-start items-start flex">
                <div className="w-14 justify-center items-center gap-1 inline-flex">
                  <img src={smartWatch as string} alt="SmartWatch"/>
                </div>
              </div>
              <div className="text-black text-base font-normal font-['Poppins'] leading-normal">SmartWatch</div>
            </div>
            <div
                className="w-[170px] h-[145px] pl-[51px] pr-[52px] pt-[25px] pb-6 bg-black rounded shadow flex-col justify-center items-center gap-4 inline-flex">
              <div className="w-14 h-14 relative flex-col justify-start items-start flex">
                <img src={camera as string} alt="Camera"/>
              </div>
              <div className="text-[#f9f9f9] text-base font-normal font-['Poppins'] leading-normal">Camera</div>
            </div>
            <div
                className="w-[170px] h-[145px] pl-[34px] pr-[35px] pt-[25px] pb-6 rounded border border-black/30 flex-col justify-center items-center gap-4 inline-flex">
              <div className="w-14 h-14 relative flex-col justify-start items-start flex">
                <img src={headPhone as string} alt="HeadPhone"/>
              </div>
              <div className="text-black text-base font-normal font-['Poppins'] leading-normal">HeadPhones</div>
            </div>
            <div
                className="w-[170px] h-[145px] pl-[53px] pr-[52px] pt-[25px] pb-6 rounded border border-black/30 flex-col justify-center items-center gap-4 inline-flex">
              <div className="w-14 h-14 relative flex-col justify-start items-start flex">
                <img src={gaming as string} alt="Gaming"/>
              </div>
              <div className="text-black text-base font-normal font-['Poppins'] leading-normal">Gaming</div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Category
