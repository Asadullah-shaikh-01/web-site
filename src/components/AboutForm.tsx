import React from "react";

function AboutForm() {
  return (
    <div className="bg-[linear-gradient(0deg,rgba(0,127,240,0.6),rgba(0,127,240,0.6)),url('/images/space.webp')] bg-center bg-cover bg-no-repeat w-full h-[60vh] py-[50px]">
      <div className="container">
        <div className="flex">
          <div className="w-[50%]">
            <h1 className="text-[#fff] text-[40px] font-bold">
              Ready to Grow Your Business? Contact Us!
            </h1>
            <p className="text-[#fff] text-[20px]">
              We are the people behind solutions!
            </p>
          </div>
          <div className="py-[30px] px-[20px] bg-[#fff] w-[50%] rounded-[10px]">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name..."
              className="w-full py-[5px] px-[10px] mb-[10px] border border-blue-500 outline-none text-[15px] leading-[30px] text-[#000] bg-transparent rounded-[5px]"
            />
            <div className="flex justify-between">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name..."
                className="w-[48%] py-[5px] px-[10px] mb-[10px] border border-blue-500 outline-none text-[15px] leading-[30px] text-[#000] bg-transparent rounded-[5px]"
              />
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name..."
                className="w-[48%] py-[5px] px-[10px] mb-[10px] border border-blue-500 outline-none text-[15px] leading-[30px] text-[#000] bg-transparent rounded-[5px]"
              />
            </div>
            <textarea
              name="Message"
              id="message"
              placeholder="Enter Your Message"
              className="w-full py-[5px] px-[10px] mb-[10px] border border-blue-500 outline-none text-[15px] leading-[30px] text-[#000] bg-transparent rounded-[5px]"
            ></textarea>
            <div>
              <button className="px-[20px] py-[10px] bg-[#0080F0] rounded-[5px] text-[#fff] text-[15px] font-bold hover:bg-[#006bb3] transition-colors duration-300 cursor-pointer">
                Get Quote Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutForm;
