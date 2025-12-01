"use client"

import { motion } from "framer-motion"
import { Users, Clock, Award, Target } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Expert Personal Training",
    description:
      "Work with certified trainers who create customized workout plans tailored to your fitness level and goals.",
    stats: "15+ Certified Trainers",
  },
  {
    icon: Clock,
    title: "24/7 Gym Access",
    description: "Train on your schedule with round-the-clock access to state-of-the-art equipment and facilities.",
    stats: "Always Open",
  },
  {
    icon: Award,
    title: "Proven Results System",
    description: "Our data-driven approach tracks your progress and adjusts programs to ensure consistent improvement.",
    stats: "98% Success Rate",
  },
  {
    icon: Target,
    title: "Holistic Wellness",
    description:
      "Beyond workouts - nutrition planning, recovery protocols, and lifestyle coaching for total transformation.",
    stats: "Complete Program",
  },
]

const stats = [
  { value: "99.9%", label: "Member Satisfaction", gradient: "from-primary to-yellow-500" },
  { value: "24/7", label: "Support Available", gradient: "from-blue-500 to-cyan-400" },
  { value: "50+", label: "Training Programs", gradient: "from-green-500 to-emerald-400" },
  { value: "100%", label: "Results Guaranteed", gradient: "from-purple-500 to-pink-400" },
]

export function FeaturesSection() {
  return (
    <section id="benefits" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

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
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            COMPREHENSIVE
            <br />
            <span className="text-primary">FITNESS SOLUTIONS</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We provide end-to-end fitness solutions that drive business growth. Enhance your well-being through
            innovative methodology and personalized support.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-8 bg-card border border-border rounded-2xl hover:shadow-2xl transition-all duration-300 hover:border-primary/50">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 px-3 py-1 bg-secondary/80 backdrop-blur-sm rounded-full text-xs font-bold text-secondary-foreground">
                      {feature.stats}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="relative group"
            >
              <div className="text-center p-8 bg-card border border-border rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div
                  className={`text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>

              {/* Decorative gradient border on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
