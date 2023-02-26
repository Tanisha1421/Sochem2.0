import Titlebar from "@/components/title";
import Navbar from '@/components/navbar'
import { SectionTitle } from "@/components/section";
import FamilyCarousel from '../components/familyCarousel'


export default function Family() {
  return (
    <div className="relative bg-gray-100 w-full h-[2247px] overflow-hidden text-left text-base text-darkslateblue font-product-sans">
      <Navbar />
      <div className='bg-[#040D21] w-full '>
                <p className='font-medium flex text-[#F7FAFF] justify-center text-2xl sm:text-3xl lg:text-5xl'><p className='mt-20'>Our<span className='text-[#2A6BFF]'> Amazing</span> Family</p></p>
                <FamilyCarousel />
      </div>

      <div className="flex flex-row justify-center my-16 mx-16"><img className="w-[35.96px] h-[35.96px]" alt="" src="/images/image-76@2x.png"/>
        <input  className="text-lg mx-8 tracking-[0.02em] font-product-sans-medium text-silver w-full px-4 rounded-full ring-2 ring-gray-200 h-10" placeholder="Search for the person" />
        <button className="w-24 bg-bluebtn text-white rounded-full h-10 shadow-md">Team</button>
      </div>

      </div>
  );
}