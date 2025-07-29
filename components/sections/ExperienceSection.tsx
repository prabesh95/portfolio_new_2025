'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      company: 'TechCorp Solutions',
      role: 'Senior Full-Stack Developer',
      period: '2022 - Present',
      description: 'Leading development of enterprise-grade applications, mentoring junior developers, and architecting scalable solutions.',
      achievements: [
        'Reduced application load time by 40%',
        'Led team of 6 developers',
        'Implemented CI/CD pipelines',
      ],
    },
    {
      company: 'StartupXYZ',
      role: 'Full-Stack Developer & Designer',
      period: '2020 - 2022',
      description: 'Developed the core platform from scratch, designed user interfaces, and established development workflows.',
      achievements: [
        'Built MVP in 3 months',
        'Designed complete design system',
        'Achieved 99.9% uptime',
      ],
    },
    {
      company: 'Digital Agency Pro',
      role: 'Frontend Developer',
      period: '2019 - 2020',
      description: 'Created responsive websites and web applications for various clients across different industries.',
      achievements: [
        'Delivered 25+ client projects',
        'Improved mobile performance by 60%',
        'Client satisfaction rate: 98%',
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
            across diverse projects and teams.
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
                              delay: index * 0.1 + achIndex * 0.1 + 0.3 
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