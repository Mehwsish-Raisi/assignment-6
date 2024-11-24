import React from "react";
import Image from "next/image";

const ExploreCourses = () => {
  return (
    <div>
      <section className="w-[1280px] max-sm:w-[428px] h-[1049px] py-28 ">
        {/* Heading */}
        <div className="max-sm:mb-10 mb-20 text-center">
          <h2 className="text-5xl max-sm:text-[32px] font-bold mb-6">
            Explore Courses By Category
          </h2>
          <p className="text-lg max-sm:px-6">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
        </div>

        <div className="h-[636px]">
          {/* Row 1 */}

          <div className="flex max-sm:flex-col justify-between gap-6 max-sm:ml-4 mb-16">
            <div className="w-1/3 max-sm:w-[380px] p-4 bg-[#F7F7F7] ">
              <div className="flex items-center gap-8">
                <div className="h-[100px] w-[100px]   p-[34px] bg-white ">
                  <Image
                    src="/images/icon1.png"
                    alt="icon1"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex-grow max-sm:flex-shrink-0">
                  <h2 className="text-xl font-semibold">
                    Design & Development
                  </h2>
                  <p className="text-lg ">50+ Courses Available</p>
                </div>
              </div>
            </div>

            <div className="w-1/3 max-sm:w-[380px] p-4 bg-[#F7F7F7] ">
              <div className="flex items-center gap-8">
                <div className="h-[100px] w-[100px]   p-[34px] bg-white ">
                  <Image
                    src="/images/icon2.png"
                    alt="icon1"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex-grow ">
                  <h2 className="text-xl font-semibold">Marketing</h2>
                  <p className="text-lg ">50+ Courses Available</p>
                </div>
              </div>
            </div>

            <div className="w-1/3 max-sm:w-[380px] p-4 bg-[#F7F7F7] ">
              <div className="flex items-center gap-8">
                <div className="h-[100px] w-[100px]   p-[34px] bg-white ">
                  <Image
                    src="/images/icon3.png"
                    alt="icon1"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex-grow ">
                  <h2 className="text-xl font-semibold">Development</h2>
                  <p className="text-lg ">50+ Courses Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex max-sm:hidden justify-between gap-6 mb-16">
            <div className="w-1/3 p-4 bg-[#F7F7F7] ">
              <div className="flex items-center gap-8">
                <div className="h-[100px] w-[100px]   p-[34px] bg-white ">
                  <Image
                    src="/images/icon4.png"
                    alt="icon1"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex-grow ">
                  <h2 className="text-xl font-semibold">
                    Communication
                  </h2>
                  <p className="text-lg ">50+ Courses Available</p>
                </div>
              </div>
            </div>

            <div className="w-1/3 p-4 bg-[#F7F7F7] ">
              <div className="flex items-center gap-8">
                <div className="h-[100px] w-[100px]   p-[34px] bg-white ">
                  <Image
                    src="/images/icon5.png"
                    alt="icon1"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex-grow ">
                  <h2 className="text-xl font-semibold">Digital Marketing</h2>
                  <p className="text-lg ">50+ Courses Available</p>
                </div>
              </div>
            </div>

            <div className="w-1/3 p-4 bg-[#F7F7F7] ">
              <div className="flex items-center gap-8">
                <div className="h-[100px] w-[100px]   p-[34px] bg-white ">
                  <Image
                    src="/images/icon6.png"
                    alt="icon1"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex-grow ">
                  <h2 className="text-xl font-semibold">Self Development</h2>
                  <p className="text-lg ">50+ Courses Available</p>
                </div>
              </div>
            </div>
          </div>
           {/* Row 3 */}
          <div className="flex max-sm:hidden justify-between gap-6">
            <div className="w-1/3 p-4 bg-[#F7F7F7] ">
              <div className="flex items-center gap-8">
                <div className="h-[100px] w-[100px]   p-[34px] bg-white ">
                  <Image
                    src="/images/icon7.png"
                    alt="icon1"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex-grow ">
                  <h2 className="text-xl font-semibold">
                    Business
                  </h2>
                  <p className="text-lg ">50+ Courses Available</p>
                </div>
              </div>
            </div>

            <div className="w-1/3 p-4 bg-[#F7F7F7] ">
              <div className="flex items-center gap-8">
                <div className="h-[100px] w-[100px]   p-[34px] bg-white ">
                  <Image
                    src="/images/icon8.png"
                    alt="icon1"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex-grow ">
                  <h2 className="text-xl font-semibold">Finance</h2>
                  <p className="text-lg ">50+ Courses Available</p>
                </div>
              </div>
            </div>

            <div className="w-1/3 p-4 bg-[#F7F7F7] ">
              <div className="flex items-center gap-8">
                <div className="h-[100px] w-[100px]   p-[34px] bg-white ">
                  <Image
                    src="/images/icon9.png"
                    alt="icon1"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex-grow ">
                  <h2 className="text-xl font-semibold">Consulting</h2>
                  <p className="text-lg ">50+ Courses Available</p>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}

          <div className="text-center mt-16">
            <button className="py-3 px-6 border-black border-[1px] rounded">
              View All Courses
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ExploreCourses;
