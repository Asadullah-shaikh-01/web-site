"use client";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative py-44 px-6 bg-gradient-to-br from-[#0d0221] via-[#2a0845] to-[#000000] text-white overflow-hidden">
      <div className="absolute top-[-160px] left-[-160px] w-[500px] h-[500px] bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 rounded-full blur-[200px] opacity-70 z-0 animate-pulse" />
      <div className="absolute bottom-[-160px] right-[-160px] w-[500px] h-[500px] bg-gradient-to-br from-sky-400 via-cyan-500 to-teal-400 rounded-full blur-[200px] opacity-70 z-0 animate-pulse" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-2xl px-14 py-24 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.4)]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="flex justify-center mb-6">
          <Player
            autoplay
            loop
            src="https://lottie.host/0ebd48ec-bfc1-4bcb-87f6-7689e93e9d1e/g4z4eS2TCO.json"
            style={{ height: "130px", width: "130px" }}
          />
        </div>

        <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-fuchsia-500 to-sky-400 animate-text-glow">
          Let’s Collaborate on Something Incredible
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="peer w-full bg-gradient-to-r from-[#2e2b46]/60 to-[#1c1c3f]/60 border border-transparent hover:border-pink-400 focus:border-pink-300 text-white rounded-xl px-5 pt-6 pb-2 placeholder-transparent outline-none shadow-lg backdrop-blur-md transition-all duration-300"
            />
            <label className="absolute left-5 top-2 text-sm text-white/70 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-300 transition-all">
              Your Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="peer w-full bg-gradient-to-r from-[#352b48]/60 to-[#241c3c]/60 border border-transparent hover:border-cyan-400 focus:border-cyan-300 text-white rounded-xl px-5 pt-6 pb-2 placeholder-transparent outline-none shadow-lg backdrop-blur-md transition-all duration-300"
            />
            <label className="absolute left-5 top-2 text-sm text-white/70 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-300 transition-all">
              Your Email
            </label>
          </div>

          <div className="relative">
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
              placeholder="Your Number"
              className="peer w-full bg-gradient-to-r from-[#443522]/60 to-[#2c1c0a]/60 border border-transparent hover:border-amber-400 focus:border-amber-300 text-white rounded-xl px-5 pt-6 pb-2 placeholder-transparent outline-none shadow-lg backdrop-blur-md transition-all duration-300"
            />
            <label className="absolute left-5 top-2 text-sm text-white/70 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-amber-300 transition-all">
              Your Number
            </label>
          </div>

          <div className="relative md:col-span-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
              placeholder="Your Message"
              className="peer w-full bg-gradient-to-r from-[#2b2e44]/60 to-[#1d1f3a]/60 border border-transparent hover:border-indigo-400 focus:border-indigo-300 text-white rounded-xl px-5 pt-6 pb-2 placeholder-transparent outline-none shadow-lg backdrop-blur-md transition-all duration-300"
            ></textarea>
            <label className="absolute left-5 top-2 text-sm text-white/70 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/50 peer-focus:top-2 peer-focus:text-sm peer-focus:text-indigo-300 transition-all">
              Your Message
            </label>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:col-span-2 mt-6 w-full py-4 px-10 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-purple-500 text-white font-bold rounded-full text-xl shadow-xl hover:shadow-fuchsia-500/40 transition-transform duration-300"
          >
            ✨ Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
