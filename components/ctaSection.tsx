import React, { RefObject } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const CtaSection = ({ ctaRef }: { ctaRef: RefObject<null> }) => {
  return (
    <>
      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="w-full justify-center flex py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-950 relative overflow-hidden"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"
        />

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white"
            >
              Ready to Start Building?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto max-w-[600px] text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg lg:text-xl"
            >
              Join DevGuild today and connect with thousands of developers who
              are passionate about creating amazing things.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full flex items-center justify-center space-y-2"
            >
              <form className="relative flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row sm:gap-10 items-center ">
                  <p className="text-xl font-lato font-bold text-[#545454] dark:text-[#ababab] ">
                    Domain:
                  </p>
                  <div className="flex relative  w-full gap-5 ">
                    <Search className="size-6 absolute top-9 left-5" />
                    <input
                      type="text"
                      placeholder="Web Development."
                      className="ps-14 px-5 py-4 my-4 border-2 focus:outline-none w-full md:w-[33rem] text-xl text-black border-[#545454] dark:text-[#ababab] rounded-full placeholder:font-dmsans sm:placeholder:text-xl placeholder:text-md"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-10 items-center ">
                  <p className="text-xl font-lato font-bold text-[#545454] dark:text-[#ababab] ">
                    Institute:
                  </p>
                  <div className="flex relative  w-full gap-5 ">
                    <Search className="size-6 absolute top-9 left-5" />
                    <input
                      type="text"
                      placeholder="eg PCCOER"
                      className="ps-14 px-5 py-4 my-4 border-2 focus:outline-none w-full md:w-[33rem] text-xl text-black border-[#545454] dark:text-[#ababab] rounded-full placeholder:font-dmsans sm:placeholder:text-xl placeholder:text-md"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="text-white w-full  bg-gradient-to-r from-blue-600 to-purple-600  dark:from-cyan-500 dark:to-blue-400 hover:from-blue-700 hover:to-purple-700  my-4 py-3 sm:py-4 px-3 text-2xl rounded-full"
                >
                  Search
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CtaSection;
