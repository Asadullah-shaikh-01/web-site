"use client";

import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Collaborate in real-time with your team and clients. Edit documents together and make decisions quickly with seamless live updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500 to-emerald-500 text-white text-2xl font-semibold rounded-xl">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real-Time Changes",
    description:
      "Track changes live as they happen — no more confusion about the latest version or conflicting edits.",
    content: (
      <div className="flex h-full w-full items-center justify-center rounded-xl overflow-hidden">
        <img
          src="/linear.webp"
          width={400}
          height={300}
          className="h-full w-full object-cover"
          alt="real-time demo"
        />
      </div>
    ),
  },
  {
    title: "Version Control",
    description:
      "Access full history of your work and revert changes effortlessly with built-in versioning.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-2xl font-semibold rounded-xl">
        Version Control
      </div>
    ),
  },
  {
    title: "Smart Content Flow",
    description:
      "Never run out of ideas. Our AI-powered editor keeps your workflow moving and content flowing.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-500 to-emerald-500 text-white text-2xl font-semibold rounded-xl">
        Smart Suggestions
      </div>
    ),
  },
];

const WhyChooseUs = () => {
  return (
 <>
 <div className="pt-5  ">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Power up your productivity with real-time collaboration, smart content suggestions, and full control over every version of your project.
          </p>
        </div>

        {/* StickyScroll Visual Experience */}
        <div >
          <StickyScroll content={content} />
        </div>
 </div>
 </>
    
  );
};

export default WhyChooseUs;
