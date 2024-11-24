import React from 'react'
import Image from 'next/image'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div id="testimonials">
      <section className='bg-[#F7F7F7] max-sm:bg-white max-sm:w-[428px] w-[1280px] py-20 '>
   {/* Heading */}
   <div className='flex flex-col gap-6 max-sm:text-center ml-12'>
    <h1 className='text-5xl sm:block hidden  font-bold'>Customer testimonials</h1>
    <h1 className='sm:hidden font-bold block text-[32px]'>What Our Student Say</h1>
    <p className='text-lg max-sm:px-4 max-sm:w-[361px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
   </div>
     
     <div>
     <div className='grid max-sm:grid-cols-1 grid-cols-3 mx-12 gap-6  mt-12'>
      {/* Card 1 start */}
      <div className='border-black border-[1px] max-sm:w-[380px] flex flex-col items-center '>
       <div className='pt-4'>
        <Image src='/images/Stars.png' alt="ratings" width={115} height={18} />
        <div className='pt-4'>
          
          <p className='text-lg w-[352px]'>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>
             <div className='flex pb-4 gap-4'>
            <Image src="/images/avatar1.png" alt='avatar 1' height={56} width={56} />
            <div className=''>
              <h4 className='font-semibold'>James Nduku</h4>
              <p>Software Developer</p>
            </div>
            </div>
        </div>
       </div>
      </div>
      {/* Card 1 end */}
     
      {/* Card 2 start */}
      <div className='border-black border-[1px] max-sm:hidden flex flex-col items-center  '>
       <div className='pt-4'>
        <Image src='/images/Stars.png' alt="ratings" width={115} height={18} />
        <div className='pt-4'>
          
          <p className='text-lg w-[352px]'>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>
             <div className='flex pb-4 gap-4'>
            <Image src="/images/avatar2.png" alt='avatar 2' height={56} width={56} />
            <div className=''>
              <h4 className='font-semibold'>Erick Kipkemboi</h4>
              <p>Scrum Master</p>
            </div>
            </div>
        </div>
       </div>
      </div>
      {/* Card 2 end */}

        {/* Card 3 start */}
      <div className='border-black border-[1px] max-sm:hidden flex flex-col items-center '>
       <div className='pt-4'>
        <Image src='/images/Stars.png' alt="ratings" width={115} height={18} />
        <div className='pt-4'>
          
          <p className='text-lg w-[352px]'>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;</p>
             <div className='flex pb-4 gap-4'>
            <Image src="/images/avatar3.png" alt='avatar 3' height={56} width={56} />
            <div className=''>
              <h4 className='font-semibold'>Stephen Kerubo</h4>
              <p>UI/UX Designer</p>
            </div>
            </div>
        </div>
       </div>
      </div>
      {/* Card 3 end */}

     </div>

     <div className='flex justify-between items-center mt-8 mx-12'>
      <div>
      <Image src='/images/Slider Dots.png' alt='slider dots' width={72} height={8} />
      </div>
      <div className='flex gap-4'>
        <button className='border-black border-[1px] rounded-full p-3'><FaArrowLeft className='w-[24px] h-[24px] ' /></button>
        <button className='border-black border-[1px] rounded-full p-3'><FaArrowRight className='w-[24px] h-[24px] ' /></button>
      </div>

     </div>
     </div>
 </section>

    </div>
  )
}

export default Testimonials
