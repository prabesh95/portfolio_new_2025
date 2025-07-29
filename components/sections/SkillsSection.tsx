'use client';

import { motion } from 'framer-motion';

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'GraphQL', level: 78 },
      ],
    },
    {
      title: 'Tools & Design',
      skills: [
        { name: 'Figma', level: 88 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 82 },
        { name: 'Git', level: 90 },
      ],
    },
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
    'MongoDB', 'GraphQL', 'AWS', 'Docker', 'Figma', 'Tailwind CSS'
  ];

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks 
            that power exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skills Progress */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title} className="luxury-card p-6">
                <h3 className="text-2xl font-semibold mb-4 gradient-text">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.1 
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2">
                        <motion.div
                          className="bg-primary h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3 
                          }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Technology Cloud */}
          <motion.div
            className="luxury-card p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 gradient-text text-center">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-card border border-border/50 rounded-lg text-foreground hover:border-primary/30 hover:text-primary transition-all duration-200 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}