"use client";
import React from "react";
import ProjectData from "@/data/project_done.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Project {
  id: number;
  name: string;
  category: string;
  status: string;
  deadline: string;
  budget: number;
  isCompleted: boolean;
  client: string;
  technologies: string[];
  assignedUsers: string[];
  images: string;
}

const FeaturedSection = () => {
  const projects = ProjectData.Project.filter(
    (project: Project) => project.isCompleted
  );

  return (
    <section className="py-16 bg-gray-100 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Completed Projects for Clients
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the most recent projects we've successfully
            delivered to clients using modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project: Project) => (
            <div key={project.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-gray-800 overflow-hidden shadow-xl transition-transform hover:scale-[1.02] duration-300 max-w-sm w-full">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <img
                    src={project.images}
                    alt={project.name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {project.technologies.join(", ")}
                  </p>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-block text-white bg-black dark:bg-white dark:text-black px-6 py-3 rounded-full font-medium transition hover:scale-105"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
