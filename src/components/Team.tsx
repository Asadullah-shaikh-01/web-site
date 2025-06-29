"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=3534&q=80",
  },
];

const Team = () => {
  return (
    <section className="w-full">
      <WavyBackground className="max-w-6xl mx-auto pb-32 pt-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-white font-extrabold tracking-tight">
            Meet Our Team
          </h2>
          <p className="text-sm md:text-lg text-gray-200 mt-4 max-w-2xl mx-auto">
            Passionate, skilled, and ready to build the future — one product at
            a time.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </WavyBackground>
    </section>
  );
};

export default Team;
