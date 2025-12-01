"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Dumbbell, Heart, Zap } from "lucide-react"
import { useState } from "react"

const programs = [
  {
    id: 1,
    title: "Strength Training Elite",
    description: "Build muscle mass and increase overall strength with our comprehensive powerlifting program.",
    image: "/strength-training-powerlifting.jpg",
    category: "Featured",
    tags: ["Strength", "Muscle", "Advanced"],
    icon: Dumbbell,
  },
  {
    id: 2,
    title: "Performance Nutrition",
    description: "Personalized meal plans and nutritional guidance optimized for your fitness goals.",
    image: "/healthy-meal-prep-nutrition.jpg",
    category: "Premium",
    tags: ["Nutrition", "Health", "Wellness"],
    icon: Heart,
  },
  {
    id: 3,
    title: "HIIT Transformation",
    description: "High-intensity interval training designed to burn fat and boost cardiovascular endurance.",
    image: "/hiit-workout.png",
    category: "Popular",
    tags: ["Cardio", "Fat Loss", "Endurance"],
    icon: Zap,
  },
]

export function ProgramsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="programs" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Programs</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            YOUR <span className="text-primary">BODY</span>
            <br />
            TRANSFORM YOUR <span className="text-primary">LIFE!</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose from our expertly designed fitness programs tailored to your goals. Whether you're building strength,
            losing weight, or optimizing performance.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredCard(program.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
              >
                <div className="relative h-full bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  {/* Program Image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredCard === program.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-primary/90 backdrop-blur-sm rounded-full">
                      <span className="text-xs font-bold text-primary-foreground uppercase tracking-wider">
                        {program.category}
                      </span>
                    </div>

                    {/* Icon Overlay */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-border">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {program.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button
                      variant="ghost"
                      className="w-full group/btn justify-between font-semibold hover:bg-primary/10 hover:text-primary transition-all"
                    >
                      Learn More
                      <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="font-semibold group border-2 hover:border-primary hover:bg-primary/5 bg-transparent"
          >
            View All Programs
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
