import React from 'react';
import { motion } from 'framer-motion';

const CurrentlyBuilding = () => {
  return (
    <section id="currently-building" className="py-14 px-6 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-white/10 bg-[#0f141a] p-5 sm:p-6 md:flex md:items-start md:justify-between md:gap-12"
        >
          <div className="md:max-w-md">
            <p className="text-[10px] tracking-[0.38em] uppercase font-medium text-[#b9f2d4] mb-4">
              CURRENTLY BUILDING
            </p>
            <h2 className="text-white text-3xl md:text-4xl font-black tracking-[-0.06em] uppercase">
              AI Coach
            </h2>
            <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-white/60">
              AI PRODUCT / APPLICATION ENGINEERING
            </p>
          </div>

          <div className="mt-6 md:mt-0 md:max-w-xl">
            <p className="text-sm leading-relaxed text-white/75">
              An AI-powered coaching product that combines persistent user data, deterministic analysis and contextual LLM reasoning to generate personalized recommendations.
            </p>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#b9f2d4] mb-2">
                CURRENT FOCUS
              </p>
              <p className="text-sm leading-relaxed text-white/60">
                Building the longitudinal coaching loop that uses a user's historical data to improve future recommendations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentlyBuilding;