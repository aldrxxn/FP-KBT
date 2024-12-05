import React from "react";
import BannerPng from "../../assets/banner.png";
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-4xl font-bold !leading-snug">
            Transformasi Pendidikan dengan LMS Modern
            </h1>
            <p className="text-dark2">
            Kami menghadirkan platform LMS fleksibel dan adaptif untuk mendukung pembelajaran sinkronus/asinkronus. Dengan fitur interaktif seperti live sessions, forum diskusi, dan gamifikasi, kami memastikan kolaborasi yang efektif antara siswa dan guru.
            </p>
            <a
              href="https://wa.me/6282362584000?text=Nama%20Contact%20Person:%0AInstansi:%0AJenis%20Kebutuhan:%0A" 
              target="_blank"              
              className="primary-btn !mt-8"
            >
              Daftar Sekarang
            </a>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={BannerPng}
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
