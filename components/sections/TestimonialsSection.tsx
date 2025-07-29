'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechStart',
      content: 'Alex delivered exceptional work that exceeded our expectations. The attention to detail and innovative solutions were remarkable.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO, InnovateCorp',
      content: 'Working with Alex was a game-changer for our project. The technical expertise and design sensibility are truly world-class.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Emily Johnson',
      role: 'Product Manager, DesignPro',
      content: 'Alex transformed our vision into reality with precision and creativity. The collaborative approach made the entire process seamless.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-card/20">
      <div className="max-w-4xl mx-auto section-padding">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            What clients say about working with me.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="luxury-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="text-primary fill-current" size={24} />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 text-foreground">
              "{testimonials[currentIndex].content}"
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="p-3 bg-card border border-border/50 rounded-lg text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                className="p-3 bg-card border border-border/50 rounded-lg text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-primary' : 'bg-border'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}