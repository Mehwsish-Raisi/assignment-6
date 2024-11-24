import React from 'react'
import Image from 'next/image'
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const Team = () => {
  return (
    <div>
      <section className='bg-[#F7F7F7] py-20 max-sm:w-[428px] w-[1280px] '>
        <div className='text-center flex max-sm:mb-6 mb-12 flex-col gap-6 '>
        <h1 className='text-5xl max-sm:text-[32px] font-bold '>Our Team</h1>
        <p className=' text-lg max-sm:h-[54px] max-sm:w-[363px] max-sm:pl-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>

        
            {/* Row 1 start*/}
            <div className='flex max-sm:gap-10 max-sm:flex-col max-sm:justify-center max-sm:items-center  mb-16 '>
                {/* Column 1 start*/}
                <div className='w-1/3  max-sm:w-full flex flex-col justify-center items-center '>
                 <Image  src='/images/team1.svg' alt='team 1' width={80} height={80} />
                 {/* Content start */}
                
                   <h3 className='text-xl font-semibold mt-6'>James Nduku</h3>
                   <p className='text-lg'>Marketing Coordinator</p>
                
                 {/* Content end */}

                 {/* Social Icons */}
                 <div className='flex gap-4 mt-6'>
                 <FaLinkedin className='w-[24px] h-[24px]' />
                 <FaTwitter className='w-[24px] h-[24px]' />
                 <FaDribbble className='w-[24px] h-[24px]' />
                 </div>

                </div>
                {/* Column 1 end */}

                {/* Column 2 start */}
                <div className='w-1/3 max-sm:w-full flex flex-col justify-center items-center'>
                 <Image  src='/images/team2.png' alt='team 2' width={80} height={80} />
                 {/* Content start */}
                
                   <h3 className='text-xl font-semibold mt-6'>Joseph Munyambu</h3>
                   <p className='text-lg'>Nursing Assistant</p>
                
                 {/* Content end */}

                 {/* Social Icons */}
                 <div className='flex gap-4 mt-6'>
                 <FaLinkedin className='w-[24px] h-[24px]' />
                 <FaTwitter className='w-[24px] h-[24px]' />
                 <FaDribbble className='w-[24px] h-[24px]' />
                 </div>

                </div>
                {/* Column 2 end */}

                 {/* Column 3 start*/}
                 <div className='w-1/3 max-sm:w-full flex flex-col justify-center items-center'>
                 <Image  src='/images/team3.png' alt='team 3' width={80} height={80} />
                 {/* Content start */}
                
                   <h3 className='text-xl font-semibold mt-6'>Joseph Ngumbau</h3>
                   <p className='text-lg'>Medical Assistant</p>
                
                 {/* Content end */}

                 {/* Social Icons */}
                 <div className='flex gap-4 mt-6'>
                 <FaLinkedin className='w-[24px] h-[24px]' />
                 <FaTwitter className='w-[24px] h-[24px]' />
                 <FaDribbble className='w-[24px] h-[24px]' />
                 </div>

                </div>
                {/* Column 3 end */}
            </div>
            {/* Row 1 end */}

             {/* Button For Mobile Screens */}

             <div className='text-center max-sm:block hidden'>
              <button className='py-2 px-4 border-black border-[1px] rounded '> View All </button>
             </div>



             {/* Row 2 start*/}
             
             <div className='flex max-sm:hidden '>
                {/* Column 1 start*/}
                <div className='w-1/3 flex flex-col justify-center items-center '>
                 <Image  src='/images/team4.png' alt='team 4' width={80} height={80} />
                 {/* Content start */}
                
                   <h3 className='text-xl font-semibold mt-6'>Erick Kipkemboi</h3>
                   <p className='text-lg'>Web Designer</p>
                
                 {/* Content end */}

                 {/* Social Icons */}
                 <div className='flex gap-4 mt-6'>
                 <FaLinkedin className='w-[24px] h-[24px]' />
                 <FaTwitter className='w-[24px] h-[24px]' />
                 <FaDribbble className='w-[24px] h-[24px]' />
                 </div>

                </div>
                {/* Column 1 end */}

                {/* Column 2 start */}
                <div className='w-1/3 flex flex-col justify-center items-center'>
                 <Image  src='/images/team5.png' alt='team 5' width={80} height={80} />
                 {/* Content start */}
                
                   <h3 className='text-xl font-semibold mt-6'>Stephen Kerubo</h3>
                   <p className='text-lg'>President of Sales</p>
                
                 {/* Content end */}

                 {/* Social Icons */}
                 <div className='flex gap-4 mt-6'>
                 <FaLinkedin className='w-[24px] h-[24px]' />
                 <FaTwitter className='w-[24px] h-[24px]' />
                 <FaDribbble className='w-[24px] h-[24px]' />
                 </div>

                </div>
                {/* Column 2 end */}

                 {/* Column 3 start*/}
                 <div className='w-1/3 flex flex-col justify-center items-center'>
                 <Image  src='/images/team6.png' alt='team 6' width={80} height={80} />
                 {/* Content start */}
                
                   <h3 className='text-xl font-semibold mt-6'>John Leboo</h3>
                   <p className='text-lg'>Dog Trainer</p>
                
                 {/* Content end */}

                 {/* Social Icons */}
                 <div className='flex gap-4 mt-6'>
                 <FaLinkedin className='w-[24px] h-[24px]' />
                 <FaTwitter className='w-[24px] h-[24px]' />
                 <FaDribbble className='w-[24px] h-[24px]' />
                 </div>

                </div>
                {/* Column 3 end */}
                </div>
             {/* Row 2 end */}
        
      </section>
    </div>
  )
}

export default Team
