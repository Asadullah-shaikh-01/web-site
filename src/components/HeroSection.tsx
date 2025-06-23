import Link from "next/link";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "./ui/moving-border";
import { Spotlight } from "@/components/ui/spotlight-new";
const HeroSection = () => {
  return (
    <BackgroundBeamsWithCollision>
        <div className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-neutral-100 to-neutral-200 dark:from-black dark:via-neutral-900 dark:to-neutral-950">

      {/* ✅ Background Video Layer */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30" // Adjust opacity for better readability
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

        <div className="space-y-6">
             <Spotlight/>
      {/* ✅ Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-center justify-center text-center py-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Trusted by 1000+ companies
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-gray-700 dark:text-gray-300 mx-auto">
            We deliver scalable and reliable software solutions that help businesses grow. Let us handle the tech while you focus on what matters most.
          </p>
          <div className="mt-6">
            <Link
              href="/web-dev"
            //   className="inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full text-sm font-semibold shadow hover:scale-105 transition-transform"
            >
                <Button 
                borderRadius="1rem"
                className="bg-black"
                >

              Explore Our Services
                </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </BackgroundBeamsWithCollision>
  );
};

export default HeroSection;
