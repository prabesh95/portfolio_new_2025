"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import prabesh from "../../assets/prabesh.png";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/90"></div>
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-24"
        >
          {/* Text Content */}
          <div className="text-center md:text-left flex-1 space-y-8">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-foreground">Crafting Digital</span>
              <br />
              <span className="gradient-text">Experiences</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full-Stack Developer & Designer passionate about creating
              <br />
              <span className="text-primary font-medium">
                premium digital solutions
              </span>{" "}
              that matter.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors duration-200 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ArrowDown size={20} />
              </motion.a>

              <div className="flex items-center gap-4">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/prabesh95",
                    label: "GitHub",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/prabesh-dahal-90172127b/",
                    label: "LinkedIn",
                  },
                  {
                    icon: Mail,
                    href: "mailto:midas.prabesh@gmail.com",
                    label: "Email",
                  },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      title={social.label}
                      target={
                        social.href.startsWith("mailto:") ? undefined : "_blank"
                      }
                      rel={
                        social.href.startsWith("mailto:")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="p-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="flex-1 flex justify-center items-center"
          >
            <div
              className="
    relative 
    w-56 h-56 
    md:w-[520px] md:h-[800px] 
   
    overflow-hidden 
    shadow-xl
    rounded-full md:rounded-[200px]
    transition-all duration-300
  "
            >
              <Image
                src={prabesh}
                alt="Prabesh Dahal"
                fill
                className="object-cover scale-x-[-1]"
                sizes="(max-width: 768px) 300px, 420px"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      
    </section>
  );
}
