import React from "react";
import { FaBell } from "react-icons/fa";
import BgImage from "../../assets/bg2.png";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Subscribe = () => {
  return (
    <section className="bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="container py-24 md:py-48"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
            <h1 className="text-4xl font-bold !leading-snug">
            Dipercaya oleh 1000+ Institusi Pendidikan
            </h1>
            <p>
            Jadikan pembelajaran lebih efisien dengan platform LMS inovatif kami yang dirancang khusus untuk kebutuhan institusi pendidikan.
            </p>
            <a
              href=""
              className="primary-btn !mt-8 inline-flex items-center gap-4 group"
            >
              Gabung Sekarang!
              <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
