"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaSmile,
  FaCheckCircle,
  FaBriefcase,
  FaHeartbeat,
  FaHome,
  FaRocket,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";
import Image from "next/image";

export default function CareerHome() {
  return (
    <div className="bg-gradient-to-tr from-[#1BFFFF] via-[#2E3192] to-[#1BFFFF] text-white w-full">
      <section className="text-center py-24 px-6">
        <motion.h1
          className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-[#00f0ff] to-white text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Join Our Tech Family
        </motion.h1>
        <motion.p
          className="text-xl max-w-3xl mx-auto text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Be part of an innovative team redefining digital experiences. Your
          journey starts here.
        </motion.p>
      </section>

      <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <FaLaptopCode size={50} className="text-[#2E3192]" />,
              title: "Tech-First Culture",
              desc: "Modern tools, agile workflows & freedom to innovate.",
            },
            {
              icon: <FaSmile size={50} className="text-[#2E3192]" />,
              title: "Healthy Work-Life",
              desc: "Remote flexibility, fun Fridays & real balance.",
            },
            {
              icon: <FaCheckCircle size={50} className="text-[#2E3192]" />,
              title: "Career Growth",
              desc: "Mentorship, L&D budget & leadership roles.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gradient-to-b from-white to-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
            Explore Our Culture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((id) => (
              <motion.div
                key={id}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={`/images/office${id}.jpg`}
                  alt={`Office ${id}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-60"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-tr from-[#0f172a] to-[#1e293b] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Perks & Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBriefcase className="text-pink-400 text-4xl" />,
                title: "Flexible Work",
              },
              {
                icon: <FaHeartbeat className="text-red-400 text-4xl" />,
                title: "Health Insurance",
              },
              {
                icon: <FaHome className="text-yellow-400 text-4xl" />,
                title: "Remote Friendly",
              },
            ].map((perk, i) => (
              <motion.div
                key={i}
                className="bg-gray-800 p-6 rounded-xl hover:shadow-xl transition-transform hover:-translate-y-1"
                whileHover={{ scale: 1.03 }}
              >
                <div className="mb-4">{perk.icon}</div>
                <h4 className="text-xl font-semibold">{perk.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            We are on a mission to revolutionize the digital space. From AI to
            scalable cloud platforms, we empower teams to build with confidence
            and customers to succeed with innovation.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaUsers className="mx-auto text-blue-500 text-5xl" />,
              title: "Collaborative",
              desc: "Everyone’s voice matters. We grow together.",
            },
            {
              icon: <FaRocket className="mx-auto text-green-500 text-5xl" />,
              title: "Fast-Paced",
              desc: "We move quickly and ship fast.",
            },
            {
              icon: <FaGlobe className="mx-auto text-purple-500 text-5xl" />,
              title: "Diverse Team",
              desc: "Global team, shared mission, unique talents.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
            >
              {item.icon}
              <h4 className="text-2xl font-bold mt-4 mb-2">{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-white text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Explore Career Tracks</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                desc: "Build blazing fast websites with modern frameworks.",
                icon: (
                  <FaLaptopCode className="text-[#2E3192] text-4xl mb-4 mx-auto" />
                ),
              },
              {
                title: "Mobile App Development",
                desc: "Create intuitive iOS & Android apps with React Native and Flutter.",
                icon: (
                  <FaRocket className="text-pink-600 text-4xl mb-4 mx-auto" />
                ),
              },
              {
                title: "DevOps & Cloud",
                desc: "Automate, scale and deploy using Docker, AWS & CI/CD pipelines.",
                icon: (
                  <FaGlobe className="text-green-600 text-4xl mb-4 mx-auto" />
                ),
              },
            ].map((track, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-tr from-white via-gray-50 to-white p-6 rounded-xl shadow hover:shadow-xl transition hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
              >
                {track.icon}
                <h4 className="text-2xl font-bold mb-2">{track.title}</h4>
                <p>{track.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center bg-gradient-to-r from-[#2E3192] to-[#1BFFFF] text-white">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to Build the Future?
        </motion.h2>
        <p className="mb-6 text-lg">
          Join our passionate team and shape the next big thing.
        </p>
        <button className="bg-white text-[#2E3192] font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition shadow">
          View All Openings
        </button>
      </section>
    </div>
  );
}
