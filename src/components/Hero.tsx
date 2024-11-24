import React from "react";
import Image from "next/image";

const HeroPage = () => {
  return (
    <div id="home">
      <div className=" flex max-sm:w-[428px]  max-sm:h-[780px]  max-sm:px-6 max-sm:flex-col  w-[1280px] h-[800px]">
        
        <div className="w-[640px] flex max-sm:py-14 flex-col pr-[60px] max-sm:px-4 pl-[80px] max-sm:w-[428px] gap-6 justify-center items-start ">
          <h1 className="text-[56px] max-sm:text-[40px] max-sm:w-[380px]   max-md:text-[40px] w-[500px] h-[] font-bold">
            Learn new skills online with ease
          </h1>
          <p className="text-lg max-sm:w-[380px] w-[500px]">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          <div className="gap-4 flex pt-4">
          <button className="py-3 bg-black text-white px-6 rounded " >Start learning now</button>
          <button className="border-black rounded border-[1px] px-6 py-3">Explore Courses</button>
          </div>
        </div>

        <div className=" block  max-sm:hidden w-1/2">
          <Image
            src="/images/Image1.svg"
            alt="hero image"
            width={640}
            height={900}
            className="  "
          />
        </div>
        {/* Mobile Size Image */}
        <div className="hidden  max-sm:block max-sm:w-[428px] w-1/2">
    <Image src="/images/hero2.png" alt="image 2" width={428} height={390} />
        </div>

      </div>

      <div className="bg-[#F7F7F7] max-sm:ml-4 max-sm:h-auto  max-sm:bg-white  max-sm:w-[428px]  w-[1280px] h-[228px] flex max-sm:flex-col justify-between py-20  ">
      <p className="font-bold  text-2xl max-sm:hidden block ">Trusted by 2000+ companies worldwide.</p>
      <p className="font-bold  max-sm:text-lg hidden max-sm:block max-sm:w-[327px]">Trusted by the world&apos;s best companies [social proof to build credibility]</p>
      <div className="">
      <ul className="flex max-sm:gap-2 max-sm:pt-6  gap-[19.12px]">
        <li><Image src='/images/logo1.png' alt='logo1' width={123.8} height={38.52} /></li>
        <li><Image src='/images/logo2.png' alt='logo2' width={123.8} height={38.52} /></li>
        <li><Image src='/images/logo3.png' alt='logo3' width={123.8} height={38.52} /></li>
        <li><Image src='/images/logo4.png' alt='logo4' width={123.8} height={38.52} /></li>
        <li className="max-sm:hidden"><Image src='/images/logo5.png' alt='logo5' width={123.8} height={38.52} /></li>
        <li className="max-sm:hidden"><Image src='/images/logo6.png' alt='logo6' width={123.8} height={38.52} /></li>
      </ul>
      </div>
      </div>
    </div>
  );
};

export default HeroPage;
