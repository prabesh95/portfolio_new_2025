'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#contact', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold gradient-text">Alex Johnson</div>
            <p className="text-muted-foreground leading-relaxed">
              Full-Stack Developer & Designer passionate about creating 
              exceptional digital experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-card/50 border border-border/50 rounded-lg text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold">Let's Connect</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>San Francisco, CA</p>
              <p>alex@example.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                Available for freelance projects and full-time opportunities.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2024 Alex Johnson. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}