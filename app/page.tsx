"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Users,
  Rocket,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowRight,
  Star,
  GitBranch,
  MessageSquare,
  Zap,
  Heart,
  Trophy,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import CtaSection from "@/components/ctaSection";

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);
  const ctaRef = useRef(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(heroProgress, [0, 1], ["0%", "15%"]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8, 1], [1, 0.95, 0.8]);

  const scrollToCTA = () => {
    //@ts-ignore
    ctaRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        // ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const slideInVariants = {
    hidden: {
      opacity: 0,
      x: -60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        // ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.9,
        // ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-1, 1, -1],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        // ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col items-center min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-slate-950 ">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <main className="w-screen flex flex-col">
        {/* Hero Section */}
        <motion.section
          ref={heroRef}
          style={{ opacity: heroOpacity }}
          className="w-full py-8 sm:py-12 md:py-24 2xl:py-32 relative overflow-hidden min-h-[90vh] flex items-center justify-center"
        >
          {/* Animated Background Elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
          />

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_500px] 2xl:grid-cols-[1fr_600px] lg:gap-8 xl:gap-12 items-center">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col justify-center space-y-4 sm:space-y-6"
              >
                <motion.div className="space-y-3 sm:space-y-4">
                  <motion.div
                    variants={slideInVariants}
                    whileHover={{ scale: 1.1, x: 30, y: -2 }}
                  >
                    <Badge
                      variant="secondary"
                      className="w-fit text-xs sm:text-sm bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                    >
                      <Star className="w-3 h-3 mr-1" />
                      Join 10,000+ Developers
                    </Badge>
                  </motion.div>

                  <motion.h1
                    variants={textVariants}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter text-slate-900 dark:text-white leading-tight"
                  >
                    <motion.span
                      className="block"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      A Perfect Place Where
                    </motion.span>
                    <motion.span
                      className="block bg-gradient-to-r from-blue-600 to-purple-600 dark:from-sky-400 dark:to-pink-600 bg-clip-text text-transparent"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    >
                      Developers Unite
                    </motion.span>
                    <motion.span
                      className="block"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                    >
                      to Build Something Great
                    </motion.span>
                  </motion.h1>

                  <motion.p
                    variants={fadeInUpVariants}
                    className="text-lg sm:text-xl md:text-2xl text-blue-600 dark:text-cyan-300 font-medium"
                  >
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      className="inline-block mr-2"
                    >
                      Connect.
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.3 }}
                      className="inline-block mr-2"
                    >
                      Collaborate.
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1.5 }}
                      className="inline-block"
                    >
                      Create.
                    </motion.span>
                  </motion.p>

                  <motion.p
                    variants={fadeInUpVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.7 }}
                    className="max-w-[600px] text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400"
                  >
                    Join a thriving community of passionate developers who share
                    knowledge, collaborate on projects, and build the future of
                    technology together.
                  </motion.p>
                </motion.div>

                <motion.div
                  variants={fadeInUpVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1.9 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600  dark:from-cyan-300 dark:to-blue-400 hover:from-blue-700 hover:to-purple-700 text-sm sm:text-base"
                    >
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        Explore Projects
                      </motion.div>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>

                  {/* <motion.div
                    whileHover={{ scale: 1.05, borderColor: "#8b5cf6" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto text-sm sm:text-base bg-transparent border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300"
                    >
                      Explore Projects
                      <GitBranch className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div> */}
                </motion.div>

                <motion.div
                  variants={fadeInUpVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 2.1 }}
                  className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-800 dark:text-gray-200"
                >
                  {[
                    { icon: Users, text: "1,000+ Members" },
                    { icon: Rocket, text: "50+ Projects" },
                    { icon: MessageSquare, text: "24/7 Support" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.3 + index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.1, color: "#3b82f6" }}
                      className="flex items-center space-x-1 cursor-pointer"
                    >
                      <item.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex justify-center lg:justify-end mt-8 lg:mt-0"
              >
                <div className="relative">
                  <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl"
                  />

                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      rotateX: 5,
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <Image
                      src="/hero-image.png"
                      width="800"
                      height="700"
                      alt="Developers collaborating and building together"
                      className="relative overflow-hidden rounded-2xl object-cover shadow-2xl w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-full lg:h-full max-w-[800px]"
                    />

                    {/* Static Icons - Remove spinning animations */}
                    <motion.div
                      animate={{
                        y: [-5, 5, -5],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-blue-600 p-2 sm:p-3 rounded-full shadow-lg"
                    >
                      <Code2 className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                    </motion.div>

                    <motion.div
                      animate={{
                        y: [5, -5, 5],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: 2,
                      }}
                      className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-purple-600 p-2 sm:p-3 rounded-full shadow-lg"
                    >
                      <Heart className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Down Arrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <motion.button
              onClick={scrollToCTA}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
              }}
              className="flex flex-col items-center space-y-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer group"
            >
              <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                Get Started
              </span>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="p-3 rounded-full bg-white/80 dark:bg-blue-900/80 backdrop-blur-sm border border-blue-200 dark:border-blue-700 shadow-lg group-hover:shadow-xl transition-shadow"
              >
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-950 justify-center flex"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                >
                  Features
                </Badge>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white"
              >
                Everything You Need to Succeed
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-[900px] text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg lg:text-xl"
              >
                DevGuild provides all the tools and community support you need
                to take your development skills to the next level.
              </motion.p>
            </motion.div>

            <div className="mx-auto grid max-w-5xl items-start gap-4 sm:gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Users,
                  title: "Connect with Peers",
                  description:
                    "Network with like-minded developers from around the world. Share experiences and learn from each other.",
                  color: "from-blue-500 to-blue-600",
                  accent:
                    "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
                },
                {
                  icon: GitBranch,
                  title: "Collaborate on Projects",
                  description:
                    "Join exciting open-source projects or start your own. Work together to build amazing applications.",
                  color: "from-purple-500 to-purple-600",
                  accent:
                    "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800",
                },
                {
                  icon: Rocket,
                  title: "Launch Your Ideas",
                  description:
                    "Get support and feedback to turn your innovative ideas into reality. From concept to deployment.",
                  color: "from-green-500 to-green-600",
                  accent:
                    "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
                },
                {
                  icon: Zap,
                  title: "Fast Development",
                  description:
                    "Accelerate your development process with our tools and community-driven solutions.",
                  color: "from-yellow-500 to-orange-600",
                  accent:
                    "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800",
                },
                {
                  icon: Trophy,
                  title: "Skill Recognition",
                  description:
                    "Showcase your achievements and get recognized for your contributions to the community.",
                  color: "from-pink-500 to-red-600",
                  accent:
                    "bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800",
                },
                {
                  icon: MessageSquare,
                  title: "24/7 Support",
                  description:
                    "Get help whenever you need it from our active community and support team.",
                  color: "from-indigo-500 to-blue-600",
                  accent:
                    "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 },
                  }}
                  className="group"
                >
                  <Card
                    className={`relative overflow-hidden h-full border-2 hover:border-opacity-50 transition-all duration-300 ${feature.accent}`}
                  >
                    <CardHeader className="p-4 sm:p-6">
                      <motion.div
                        whileHover={{
                          rotate: 360,
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.6 }}
                        className={`h-10 w-10 sm:h-12 sm:w-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:shadow-lg transition-shadow duration-300`}
                      >
                        <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </motion.div>
                      <CardTitle className="text-lg sm:text-xl mb-2 text-slate-900 dark:text-white">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>

                    {/* Hover Effect Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10 pointer-events-none"
                    />
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CtaSection ctaRef={ctaRef} />
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-2 sm:flex-row py-4 sm:py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900"
      >
        <div className="flex items-center space-x-2">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="h-5 w-5 sm:h-6 sm:w-6 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-sky-500 rounded flex items-center justify-center"
          >
            <Code2 className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
          </motion.div>
          <p className="text-xs text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} DevGuild. All rights reserved.
          </p>
        </div>
        <nav className="sm:ml-auto flex gap-3 sm:gap-4 lg:gap-6 mt-2 sm:mt-0">
          {[
            { icon: Github, href: "#" },
            { icon: Twitter, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Mail, href: "#" },
          ].map((social, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.2,
                color: "#3b82f6",
                y: -2,
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={social.href}
                className="text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors"
              >
                <social.icon className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.footer>
    </div>
  );
}
