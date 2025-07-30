"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  const projects = [
    {
      title: "Nepal Ma Future Cha? – Employer Insights Hub",
      description:
        "A Next.js + TailwindCSS frontend portal showcasing career sectors, company insights, and salary benchmarks for Nepali professionals.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "TypeScript", "TailwindCSS", "Sanity CMS"],
      links: {
        demo: "https://www.hivelaya.com/futurecha",
        // github: "#",
      },
    },
    {
      title: "Ntcs – Vite React ShadCN UI",
      description:
        "A modern React frontend built with Vite, ShadCN UI, Radix UI, React Query, and TypeScript for a scalable, performant web experience.",
      image:
        "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80",
      tags: [
        "React",
        "Vite",
        "TypeScript",
        "ShadCN UI",
        "Radix UI",
        "React Query",
      ],
      links: {
        demo: "https://ntcs.com.np/",
        // github: "https://github.com/your-repo/kinnmel-frontend",
      },
    },
    {
      title: "Kinnmel Backend API",
      description:
        "Express.js backend with MySQL integration, file uploads, CORS, and Nodemailer for email notifications powering the Kinnmel platform.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      tags: ["Express", "MySQL", "Nodemailer", "REST API", "UUID"],
      links: {
        demo: "https://kinnmel.com/",
        // github: "https://github.com/your-repo/kinnmel-backend",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-card/20">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Selected projects demonstrating technology expertise, scalability,
            and impact in the Nepal tech ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="luxury-card overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background/80 backdrop-blur-sm rounded-lg text-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                 
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
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
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
