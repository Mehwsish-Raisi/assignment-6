'use client'

 import Link from 'next/link';
 import React, { useState } from 'react';
 import Image from 'next/image';
 import { GrFacebookOption } from "react-icons/gr";
 import { FiInstagram } from "react-icons/fi";
 import { FaTwitter } from "react-icons/fa";
 import { FaLinkedin } from "react-icons/fa6";
 import { IoMdClose } from "react-icons/io";



 const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
   return (
     <header className=''>
         {/* Navbar 1 start */}
       <div className='bg-[#F7F7F7] max-sm:hidden max-md:hidden border-b-[1px] border-black h-[54px] w-[1280px] flex justify-between items-center pr-16 pl-[62px]'>
         <div className='text-sm flex gap-4 '>
             <p>Phone Number: 956 345 455 678</p>
            
             <span className=' w-[149px] h-[21px] border-l-[1px]  border-[#676767] pl-4 '>Email:info@ddsgnr.com</span>
             </div>
         <div className='flex gap-4'>
            
             <Link href="/"><GrFacebookOption className='w-[24px] h-[24px]' /></Link>
             <Link href="/"><FiInstagram className='w-[24px] h-[24px]' /></Link>
             <Link href="/"><FaTwitter className='w-[24px] h-[24px]' /></Link>
             <Link href="/"><FaLinkedin className='w-[24px] h-[24px]' /></Link>
          </div>

       </div>
       {/* Navbar 1 end */}


       {/* Navbar 2 start */}
       <div className='bg-[#F7F7F7] flex items-center border-b-[0.5px]  border-black max-sm:mt-0 max-md:mt-0 mt-5 w-[1280px] max-sm:w-[428px]  h-[72px] px-16 '>
         <div className='w-[1152px]  flex justify-between  items-center '>
           <Image src="/images/Ddsgnr Library.svg" alt="logo" width={100} height={100} />
 <button
className="lg:hidden block"
onClick={() => setSidebarOpen(!isSidebarOpen)}
>
<Image
    src={"/images/Menu.png"} 
    alt="Menu"
    width={24}
    height={24}
/>
</button> 
         <div className='max-sm:hidden w-[910px] bg-white flex items-center  h-[44px]'>
           <div className='w-[687px]'>
           <ul className=' flex gap-8 justify-around'>
             <li className='border-[#676767]  border-b-[1px] pb-1'><Link href="#home">Home</Link></li>
             <li><Link href="#courses">Courses</Link></li>
             <li><Link href="/">Services</Link></li>
             <li><Link href="#achievement">Achievement</Link></li>
             <li><Link href="/">About Us</Link></li>
             <li><Link href="#testimonials">Testimonial</Link></li>
           </ul>
           </div>
          <div className='bg-white w-[191px] h-[40px] flex justify-around gap-8 '>
         <button className='ml-8 border-black rounded border-[1px] px-5 py-2 text-center'>Login</button>
         <button className='bg-black rounded text-white px-5 py-2 w-[95px] h-[40px] '>Signup</button>
         </div> 
         </div>
        
        </div>
      </div>
      {/* Navbar 2 end */}

      {/* Toggle Menu for Mobile Screens */}
 <div
className={`fixed top-0 left-0 h-full w-[250px] bg-[#F7F7F7] shadow-lg transform ${
    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
} transition-transform lg:hidden`}
>
<div className="flex items-center justify-between px-[20px] py-[20px] border-b border-[#000000]">
    <Image
        src={"/images/Ddsgnr Library.svg"}
        alt="Logo"
        width={130.6}
        height={30.38}
    />

    <button onClick={() => setSidebarOpen(false)}>
        
    <IoMdClose size={30} />
    </button>
</div>

<ul className="mt-[20px] text-[16px] space-y-4 px-[20px]">
<li><Link href={"#home"}>Home</Link></li>
    <li><Link href={"#courses"}>Courses</Link></li>
    <li><Link href={"#services"}>Services</Link></li>
    <li><Link href={"#achievement"}>Achievement</Link></li>
    <li><Link href={"#team"}>About Us</Link></li>
    <li><Link href={"#testimonial"}>Testimonial</Link></li>

    <li>
        <button className="w-full px-[20px] py-[10px] border border-black rounded">
            Login
        </button>
    </li>
    <li>
        <button className="w-full px-[26px] py-[10px] bg-black text-[#FFFFFF] rounded">
            Sign Up
        </button>
    </li>
</ul>
</div>

{isSidebarOpen && (
<div
    onClick={() => setSidebarOpen(false)}
></div>)}
    </header>
   );
 };
export default Navbar


