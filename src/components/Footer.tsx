import React from 'react'
import Image from 'next/image'

 import Link from "next/link";
 import { GrFacebookOption } from "react-icons/gr";
 import { FiInstagram } from "react-icons/fi";
 import { FaTwitter } from "react-icons/fa";
 import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
      <footer>
            <div className="w-[1280px] max-sm:w-[428px] max-sm:h-[1411px] h-[684px] max-sm:px-0 px-20 py-20 ">
            <div className="w-[1120px] max-sm:w-[428px] h-[524px]">
            <div className="flex max-sm:flex-col max-sm:justify-center  justify-between mb-20">
            <div className="max-sm:text-center max-sm:pl-10 max-sm:h-[91px] max-sm:w-[380px] ">
            <h4 className="font-semibold max-sm:w-[287px] text-lg ">
              Subscribe to our newsletter
            </h4>
            
             <p className=" max-sm:mt-4  max-sm:w-[287px] max-sm:px-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="max-sm:mt-6">
            <div className=" flex max-sm:flex-col  ">
            <form className="border-black border-[1px] max-sm:w-[380px] max-sm:mx-7 rounded w-[265px] p-3 mr-4">
              <input 
              type="text"
             name="email"
              placeholder="Enter your email"
              />
            </form>
            <div className="max-sm:mt-4">
            <button className="border-black border-[1px]  max-sm:w-[380px] max-sm:mx-7 rounded py-3 px-6 ">
               Subscribe
             </button>
            </div>
            </div>
            <p className="pt-4 max-sm:text-center text-sm underline">
              By subscribing you agree to with our Privacy Policy
             </p>
            </div>
            </div>
            
            <div className='flex flex-col sm:flex-row max-sm:items-center justify-evenly mt-28 px-4 sm:px-0'>
            <div className='mb-6 max-sm:hidden block  sm:-ml-14 sm:mb-0'>
                    <Image
                        src="/images/Ddsgnr Library.svg"
                        alt="Logo"
                        width={100}
                        height={100}
                    />
                </div>
                <div className='mb-6 hidden max-sm:block sm:-ml-14 sm:mb-0'>
                    <Image
                        src="/images/Ddsgnr Library.svg"
                        alt="Logo"
                        width={172}
                        height={40}
                    />
                </div>

                <div className='text-center sm:text-left mb-6 sm:mb-0'>
                <p className="font-semibold pb-4">Courses</p>
               <ul className="text-sm ">
                <li className="py-2 hover:text-blue-500"><Link href='#' >Business</Link></li>
               <li className="py-2 hover:text-blue-500"><Link href='#' >Development</Link></li>
               <li className="py-2 hover:text-blue-500"><Link href='#' >Technology</Link></li>
              <li className="py-2 hover:text-blue-500"><Link href='#' >Design</Link></li>
                 <li className="py-2 hover:text-blue-500"><Link href='#' >Programming</Link></li>
            </ul>
                </div>

                <div className='text-center sm:text-left mb-6 sm:mb-0'>
                <p className="font-semibold pb-4">Resources</p>
               <ul className="text-sm ">
                <li className="py-2 hover:text-blue-500"><Link href='#' >Career</Link></li>
               <li className="py-2 hover:text-blue-500"><Link href='#' >Resume</Link></li>
               <li className="py-2 hover:text-blue-500"><Link href='#' >Learning</Link></li>
              <li className="py-2 hover:text-blue-500"><Link href='#' >Interview Preparation</Link></li>
                 <li className="py-2 hover:text-blue-500"><Link href='#' >Jobs</Link></li>
            </ul>
                </div>

                <div className='text-center sm:text-left mb-6 sm:mb-0'>
                <p className="font-semibold pb-4">About Us</p>
               <ul className="text-sm ">
                <li className="py-2 hover:text-blue-500"><Link href='#' >Contact</Link></li>
               <li className="py-2 hover:text-blue-500"><Link href='#' >Help/Support</Link></li>
               <li className="py-2 hover:text-blue-500"><Link href='#' >FAQ</Link></li>
              <li className="py-2 hover:text-blue-500"><Link href='#' >Terms and Conditions</Link></li>
                 <li className="py-2 hover:text-blue-500"><Link href='#' >Partners</Link></li>
            </ul>
                </div>
            </div>

            <div className='border border-black mx-10 mt-5'></div>

            <div className='flex flex-col sm:flex-row items-center justify-between mt-10 mx-10 pb-24'>

                <div className='text-center sm:text-left mb-4 sm:mb-0 text-sm sm:text-base'>
                    2023 Ddsgnr. All rights reserved.
                </div>

                <div className='flex space-x-4 text-sm sm:text-base mb-4 sm:mb-0'>
                    <h4 className='cursor-pointer underline'>Privacy Policy</h4>
                    <h4 className='cursor-pointer underline'>Terms of Service</h4>
                    <h4 className='cursor-pointer underline'>Cookies Settings</h4>
                </div>

                
                <div className="flex  gap-3 ">
          <Link href="/"><GrFacebookOption className='w-[24px] h-[24px]' /></Link>
          <Link href="/"><FiInstagram className='w-[24px] h-[24px]' /></Link>
          <Link href="/"><FaTwitter className='w-[24px] h-[24px]' /></Link>
          <Link href="/"><FaLinkedin className='w-[24px] h-[24px]' /></Link>
          </div>
          </div>
          
                </div>
                </div>
        </footer>
    )
}

export default Footer

