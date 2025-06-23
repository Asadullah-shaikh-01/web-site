"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { motion } from "motion/react";
import { AuroraBackground } from "./ui/aurora-background";
const testimonials = [
  {
    quote:
      "Partnering with your company was the best decision we made this year. The team transformed our vision into a fully functional product — on time and beyond expectations.",
    name: "Aarav Mehta",
    title: "Founder, StartLoop Technologies",
  },
  {
    quote:
      "Exceptional attention to detail, clear communication, and seamless delivery. Our e-commerce conversion rates increased by over 40% after the revamp.",
    name: "Sophie Laurent",
    title: "Head of Marketing, UrbanLeaf",
  },
  {
    quote:
      "Their developers felt like an extension of our internal team. Fast iterations, real-time updates, and full-stack expertise made the process effortless.",
    name: "Daniel Kim",
    title: "Product Manager, HiveSync",
  },
  {
    quote:
      "From strategy to launch, the experience was smooth and professional. We appreciated the proactive suggestions and quality codebase.",
    name: "Ananya Rao",
    title: "CTO, FinQuotient",
  },
  {
    quote:
      "We needed a scalable MVP built under tight deadlines. They delivered early, bug-free, and even helped us onboard our first 1000 users. Highly recommended!",
    name: "Liam Carter",
    title: "Co-Founder, BookNest",
  },
];

const TestimonialCard = () => {
  return (
      <AuroraBackground>
    <div className="w-full bg-blac py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-50 mb-10">
          Hear What Our Clients Say
        </h2>

        <div className="relative overflow-hidden rounded-2xl shadow-sm p-2 bg-transparent">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
    </AuroraBackground>
  );
};

export default TestimonialCard;
