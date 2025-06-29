import React from "react";

function WhyChooseSection() {
  return (
    <>
      <div className="pt-[70px] mb-[50px]">
        <div className="container">
          <div className="flex justify-between">
            <div className="w-[40%]">
              <h2 className="text-[#fff] text-[25px]">Why Choose Us?</h2>
              <h1 className="text-[#fff] text-[50px] font-bold">
                Focused Solutions for Real Results
              </h1>
            </div>
            <div className="w-[55%]">
              <p className="text-[#fff] text-[18px] leading-[30px]">
                In IT solutions, you need a partner who understands your goals
                and is committed to achieving them. Here’s why Sovorun is the
                right choice for your business.
              </p>
              <div className="grid grid-cols-3 gap-[30px] mt-[30px] text-justify mb-[20px]">
                <div>
                  <h2 className="text-[#fff] text-[17px] font-bold">
                    1. Customized Solutions
                  </h2>
                  <p className="text-[#fff] text-[15px] leading-[30px]">
                    Solutions crafted to meet your unique business needs,
                    ensuring alignment with your goals.
                  </p>
                </div>
                <div>
                  <h2 className="text-[#fff] text-[17px] font-bold">
                    2. Innovation at the Core
                  </h2>
                  <p className="text-[#fff] text-[15px] leading-[30px]">
                    We use the latest technology to deliver modern, effective IT
                    solutions for lasting impact.
                  </p>
                </div>
                <div>
                  <h2 className="text-[#fff] text-[17px] font-bold">
                    3. Dedicated Support
                  </h2>
                  <p className="text-[#fff] text-[15px] leading-[30px]">
                    Our team is with you every step, offering responsive and
                    reliable support.
                  </p>
                </div>
                <div>
                  <h2 className="text-[#fff] text-[17px] font-bold">
                    4. Proven Expertise
                  </h2>
                  <p className="text-[#fff] text-[15px] leading-[30px]">
                    Experienced professionals bring in-depth knowledge across
                    industries to every project.
                  </p>
                </div>
                <div>
                  <h2 className="text-[#fff] text-[17px] font-bold">
                    5. Transparent Processes
                  </h2>
                  <p className="text-[#fff] text-[15px] leading-[30px]">
                    Clear communication and regular updates keep you informed at
                    every stage.
                  </p>
                </div>
              </div>
              <div className="bg-[#fff] p-[30px] rounded-[10px] text-[#000]">
                <h1 className="text-[#000] text-[25px] font-bold mb-[10px]">
                  Ready to Transform Your Business? Get in Touch!
                </h1>
                <div className="flex">
                  <input
                    type="text"
                    name="mail"
                    placeholder="Enter Email"
                    className="outline-none w-[80%] text-[#000] text-[15px] leading-[30px] bg-transparent bg-[#fff] px-[10px] py-[10px] border border-[blue] "
                  />
                  <button className="bg-[#0080F0] text-[12px] cursor-pointer px-[10px]">
                    Get Quote Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseSection;

// background: linear-gradient(0deg, rgba(0, 127, 240, .6), rgba(0, 127, 240, .6)), url(/_next/static/media/space.051e594f.webp) 50% / cover no-repeat;
// }
