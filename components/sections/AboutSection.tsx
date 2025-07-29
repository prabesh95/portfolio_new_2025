'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Zap } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building robust applications with modern technologies and best practices.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually stunning user experiences.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Delivering fast, scalable solutions that exceed expectations.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer and designer with over 5 years of experience
            creating digital solutions that combine cutting-edge technology with exceptional design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="luxury-card p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">My Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I believe in creating digital experiences that are not just functional, but 
                transformative. Every project is an opportunity to push boundaries and 
                deliver exceptional value.
              </p>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Figma'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="luxury-card p-6 hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <highlight.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}