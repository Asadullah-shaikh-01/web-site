"use client";
import React from "react";
import { WavyBackground } from "../components/ui/wavy-background";
import Image from "next/image";

export function AboutHero() {
  return (
    <>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Sovorun – Your Trusted Partner in Business Growth
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Leverage the power of canvas to create a beautiful hero section
        </p>
      </WavyBackground>

      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 py-[40px]">
          {/* Left Section */}
          <div className="md:w-[40%] w-full">
            <h2 className="text-[24px] text-[#fff] mb-[10px]">
              About Sovorun Technology
            </h2>
            <h1 className="text-[32px] md:text-[42px] text-white leading-[50px] md:leading-[60px]">
              More than a software development company
            </h1>
          </div>

          {/* Right Section */}
          <div className="md:w-[60%] w-full">
            <p className="text-[17px] text-[#fff] leading-[25px] mb-[15px]">
              At Sovorun, we believe in using technology to drive business
              growth and deliver real results. Based in Thane, Maharashtra, we
              offer more than software development. We provide IT solutions and
              digital marketing services that help businesses succeed.
            </p>
            <p className="text-[17px] text-[#fff] leading-[25px] mb-[15px]">
              Our mission is to empower companies with scalable, effective
              software, digital strategies, and IT support. We focus on bridging
              technology and business needs, creating custom solutions that
              align with your goals and keep you competitive. By staying
              up-to-date with industry trends and the latest technology, we make
              achieving your objectives simpler and faster.
            </p>
            <p className="text-[17px] text-[#fff] leading-[25px] mb-[15px]">
              We aim to become a global leader in software development,
              recognized for excellence, innovation, and client satisfaction.
              Our vision is a future where businesses of all sizes use
              technology to overcome challenges and explore new opportunities.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-6">
          <Image
            src="/images/IT-SOLUTION-IMG.jpg"
            alt="IT Solution"
            width={1325}
            height={600}
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </>
  );
}

export default AboutHero;
