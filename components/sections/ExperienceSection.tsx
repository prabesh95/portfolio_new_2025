'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      company: 'Kinnmel Tech',
      role: 'Lead Full-Stack Developer',
      period: '2023 - Present',
      description:
        'Driving full-stack development of a scalable Vite + React + TypeScript frontend with an Express & MySQL backend. Implementing advanced features like multi-tenant architecture and robust API design.',
      achievements: [
        'Architected multi-domain tenancy system improving scalability by 30%',
        'Led migration to TypeScript and integrated Radix UI for accessible components',
        'Streamlined backend workflows using Nodemailer and UUID for secure user management',
      ],
    },
    {
      company: 'Nepal Ma Future Cha? Project',
      role: 'Frontend & API Developer',
      period: '2022 - 2023',
      description:
        'Built a dynamic, SEO-friendly Next.js frontend and collaborated on backend REST APIs. Created intuitive UI components with Tailwind CSS and ShadCN UI, enhancing user experience for thousands of visitors.',
      achievements: [
        'Implemented reusable UI components increasing frontend dev speed by 40%',
        'Optimized API response times, reducing latency by 25%',
        'Contributed to event landing pages with high user engagement metrics',
      ],
    },
    {
      company: 'Freelance & Open Source',
      role: 'Full-Stack Developer',
      period: '2020 - 2022',
      description:
        'Delivered multiple client projects involving React, Node.js, and MySQL. Built responsive websites, RESTful APIs, and contributed to open source UI libraries.',
      achievements: [
        'Successfully completed 15+ projects with 5-star client ratings',
        'Improved client website performance with optimized React builds',
        'Enhanced application security using JWT and OAuth workflows',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto section-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of continuous growth, innovation, and impactful contributions
            to tech projects rooted in Nepal’s growing digital landscape.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                <div className="md:ml-20">
                  <div className="luxury-card p-8 hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-primary mb-1">
                          {exp.role}
                        </h3>
                        <h4 className="text-xl text-foreground mb-2">{exp.company}</h4>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div>
                      <h5 className="font-semibold mb-3 flex items-center gap-2">
                        <Briefcase size={16} className="text-primary" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            className="flex items-start gap-3 text-muted-foreground"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.1 + achIndex * 0.1 + 0.3,
                            }}
                            viewport={{ once: true }}
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
