import React from 'react'
import Image from 'next/image'
import { IoIosStar } from "react-icons/io";

const Courses = () => {
  return ( 
    <div id="courses">
      <section className='w-[1280px] max-sm:h-[2135px] max-sm:w-[428px] h-[1742px] py-28 '>

       {/* Heading */}
        <div className='text-center'>
        <h1 className='text-[56px] max-sm:text-[32px] font-bold pb-6 '>Courses</h1>
        <p className='text-lg'>Your Ultimate Guide to learning </p>
        </div>
         
         {/* Main Content */}
        <div className='h-[1340px] max-sm:h-[1898px] pt-12 '>
      
        <div className='text-center'>
          <button className='py-2 px-4 border-[#676767] border-b-[1px] '>Popular</button>
          <button className='py-2 px-4'>Recommended</button>
          <button className='py-2 px-4'>Best Price</button>
        </div>
        
         {/* 1st Row */}
        <div className='grid max-sm:grid-cols-1 max-sm:gap-4 grid-cols-3 pt-12'>
           
          {/* Column 1 start */}
          <div className='bg-[#F7F7F7] w-[416px] '>
            <Image src="/images/Image.svg" width={416} height={300} alt="Image 1" className='pb-6' />

            <div className='px-4  flex flex-col gap-2 pb-2'>

              <div className='flex justify-between bg-[#F7F7F7]'>
                <p className='text-sm font-semibold'>Design</p>
                <div className='flex gap-2 w-[48px] h-[24px] items-center '> 
                  <IoIosStar className='w-[24px] h-[24px] text-[#D9D9D9]'/>
                  <div className='text-sm font-semibold '>5.0 </div>
                  </div>
                   </div>
                <h1 className='text-2xl font-bold'>UX/UI Design 201</h1>
                <p className='w-[382px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
            
            <div className='pt-2 pb-5 px-5'>
              <button className='border-[1px] border-black rounded py-2 px-5'>Enroll Now</button>
              <button className='font-medium py-2 px-5 pl-6 '>$400</button>
            </div>
            </div>
            {/* Column 1 end */}
        
        
         {/* Column 2 start */}
         <div className='bg-[#F7F7F7] w-[416px] '>
            <Image src="/images/pic2.png" width={416} height={300} alt="Image 1" className='pb-6' />

            <div className='px-4  flex flex-col gap-2 pb-2'>

              <div className='flex justify-between bg-[#F7F7F7]'>
                <p className='text-sm font-semibold'>Design</p>
                <div className='flex gap-2 w-[48px] h-[24px] items-center '> 
                  <IoIosStar className='w-[24px] h-[24px] text-[#D9D9D9]'/>
                  <div className='text-sm font-semibold '>5.0 </div>
                  </div>
                   </div>
                <h1 className='text-2xl font-bold'>UX/UI Design 201</h1>
                <p className='w-[382px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
            
            <div className='pt-2 pb-5 px-5'>
              <button className='border-[1px] border-black rounded py-2 px-5'>Enroll Now</button>
              <button className='font-medium py-2 px-5 pl-6 '>$400</button>
            </div>
            </div>  
             {/* Column 2 end */}

           {/* Column 3 start */}
           <div className='bg-[#F7F7F7] w-[416px] '>
            <Image src="/images/pic3.png" width={416} height={300} alt="Image 3" className='pb-6' />

            <div className='px-4  flex flex-col gap-2 pb-2'>

              <div className='flex justify-between bg-[#F7F7F7]'>
                <p className='text-sm font-semibold'>Design</p>
                <div className='flex gap-2 w-[48px] h-[24px] items-center '> 
                  <IoIosStar className='w-[24px] h-[24px] text-[#D9D9D9]'/>
                  <div className='text-sm font-semibold '>5.0 </div>
                  </div>
                   </div>
                <h1 className='text-2xl font-bold'>UX/UI Design 201</h1>
                <p className='w-[382px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            </div>
            
            <div className='pt-2 pb-5 px-5'>
              <button className='border-[1px] border-black rounded py-2 px-5'>Enroll Now</button>
              <button className='font-medium py-2 px-5 pl-6 '>$400</button>
            </div>
            </div>
            {/* Column 3 end */}

        </div>        
        {/* 1st Row end */}

         {/* 2nd Row start */}
        <div className='max-sm:hidden grid grid-cols-3 pt-12'>
           
           {/* Column 1 start */}
           <div className='bg-[#F7F7F7] w-[416px] '>
             <Image src="/images/pic4.png" width={416} height={300} alt="Image 4" className='pb-6' />
 
             <div className='px-4  flex flex-col gap-2 pb-2'>
 
               <div className='flex justify-between bg-[#F7F7F7]'>
                 <p className='text-sm font-semibold'>Design</p>
                 <div className='flex gap-2 w-[48px] h-[24px] items-center '> 
                   <IoIosStar className='w-[24px] h-[24px] text-[#D9D9D9]'/>
                   <div className='text-sm font-semibold '>5.0 </div>
                   </div>
                    </div>
                 <h1 className='text-2xl font-bold'>UX/UI Design 201</h1>
                 <p className='w-[382px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
             </div>
             
             <div className='pt-2 pb-5 px-5'>
               <button className='border-[1px] border-black rounded py-2 px-5'>Enroll Now</button>
               <button className='font-medium py-2 px-5 pl-6 '>$400</button>
             </div>
             </div>
             {/* Column 1 end */}
         
         
          {/* Column 2 start */}
          <div className='bg-[#F7F7F7] w-[416px] '>
             <Image src="/images/pic5.png" width={416} height={300} alt="Image 5" className='pb-6' />
 
             <div className='px-4  flex flex-col gap-2 pb-2'>
 
               <div className='flex justify-between bg-[#F7F7F7]'>
                 <p className='text-sm font-semibold'>Design</p>
                 <div className='flex gap-2 w-[48px] h-[24px] items-center '> 
                   <IoIosStar className='w-[24px] h-[24px] text-[#D9D9D9]'/>
                   <div className='text-sm font-semibold '>5.0 </div>
                   </div>
                    </div>
                 <h1 className='text-2xl font-bold'>UX/UI Design 201</h1>
                 <p className='w-[382px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
             </div>
             
             <div className='pt-2 pb-5 px-5'>
               <button className='border-[1px] border-black rounded py-2 px-5'>Enroll Now</button>
               <button className='font-medium py-2 px-5 pl-6 '>$400</button>
             </div>
             </div>
             {/* Column 2 end */}
 
            {/* Column 3 start */}
            <div className='bg-[#F7F7F7] w-[416px] '>
             <Image src="/images/pic6.png" width={416} height={300} alt="Image 6" className='pb-6' />
 
             <div className='px-4  flex flex-col gap-2 pb-2'>
 
               <div className='flex justify-between bg-[#F7F7F7]'>
                 <p className='text-sm font-semibold'>Design</p>
                 <div className='flex gap-2 w-[48px] h-[24px] items-center '> 
                   <IoIosStar className='w-[24px] h-[24px] text-[#D9D9D9]'/>
                   <div className='text-sm font-semibold '>5.0 </div>
                   </div>
                    </div>
                 <h1 className='text-2xl font-bold'>UX/UI Design 201</h1>
                 <p className='w-[382px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
             </div>
             
             <div className='pt-2 pb-5 px-5'>
               <button className='border-[1px] border-black rounded py-2 px-5'>Enroll Now</button>
               <button className='font-medium py-2 px-5 pl-6 '>$400</button>
             </div>
             </div>
             {/* Column 3 end */}
 
         </div>        
         {/* 1st Row end */}

        <div className='text-center pt-12'>
          <button className='py-2 px-4 border-black border-[1px] rounded'>View All Courses</button>
        </div>
        
        </div>

      </section>
    </div>
  )
}

export default Courses
