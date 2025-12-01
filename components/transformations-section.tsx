"use client"

import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Award, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

const transformations = [
  {
    id: 1,
    name: "James Mitchell",
    goal: "Lost 25 lbs",
    duration: "12 weeks",
    beforeImage: "/before-overweight-man.jpg",
    afterImage: "/after-fit-athletic-man.jpg",
    quote: "I never thought I could transform my body at 45. The coaching changed everything.",
    metrics: [
      { label: "Weight Lost", value: "25 lbs" },
      { label: "Body Fat", value: "-8%" },
      { label: "Muscle Gain", value: "+7 lbs" },
    ],
  },
  {
    id: 2,
    name: "Emily Chen",
    goal: "Gained 15 lbs of Muscle",
    duration: "16 weeks",
    beforeImage: "/before-thin-woman.jpg",
    afterImage: "/after-muscular-athletic-woman.jpg",
    quote: "From skinny to strong. The nutrition and training plan was exactly what I needed.",
    metrics: [
      { label: "Muscle Gain", value: "+15 lbs" },
      { label: "Strength", value: "+45%" },
      { label: "Confidence", value: "100%" },
    ],
  },
  {
    id: 3,
    name: "Marcus Johnson",
    goal: "Marathon Ready",
    duration: "20 weeks",
    beforeImage: "/before-sedentary-man.jpg",
    afterImage: "/after-marathon-runner.jpg",
    quote: "Went from couch to completing my first marathon. The progressive training approach works.",
    metrics: [
      { label: "Endurance", value: "+200%" },
      { label: "5K Time", value: "18:45" },
      { label: "Marathon", value: "3:42:15" },
    ],
  },
]

const socialProofStats = [
  {
    icon: TrendingUp,
    value: "4.9/5",
    label: "Google Reviews",
    subtext: "Based on 500+ reviews",
  },
  {
    icon: Award,
    value: "98%",
    label: "Success Rate",
    subtext: "Members achieve goals",
  },
  {
    icon: Target,
    value: "500+",
    label: "Transformations",
    subtext: "Lives changed",
  },
]

export function TransformationsSection() {
  return (
    <section id="transformations" className="py-24 relative overflow-hidden bg-secondary/30">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

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
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Success Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            REAL PEOPLE. <span className="text-primary">REAL RESULTS.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            These aren't just transformations. They're life-changing journeys that prove what's possible with the right
            guidance.
          </p>
        </motion.div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
        >
          {socialProofStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-card border border-border rounded-2xl hover:shadow-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.subtext}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Transformation Cards */}
        <div className="space-y-16">
          {transformations.map((transformation, index) => (
            <motion.div
              key={transformation.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Before/After Images */}
                <div className={`order-1 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Before Image */}
                      <div className="relative overflow-hidden rounded-2xl border-2 border-border">
                        <div className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-xs font-bold text-muted-foreground uppercase">Before</span>
                        </div>
                        <img
                          src={transformation.beforeImage || "/placeholder.svg"}
                          alt={`${transformation.name} before`}
                          className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      </div>

                      {/* After Image */}
                      <div className="relative overflow-hidden rounded-2xl border-2 border-primary shadow-lg shadow-primary/20">
                        <div className="absolute top-4 left-4 z-10 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-xs font-bold text-primary-foreground uppercase">After</span>
                        </div>
                        <img
                          src={transformation.afterImage || "/placeholder.svg"}
                          alt={`${transformation.name} after`}
                          className="w-full aspect-[3/4] object-cover"
                        />
                      </div>
                    </div>

                    {/* Decorative Arrow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <ArrowRight className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Transformation Details */}
                <div className={`order-2 ${index % 2 === 1 ? "lg:order-1" : ""} space-y-6`}>
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                      <span className="text-xs font-semibold text-primary uppercase">{transformation.duration}</span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-bold mb-2">{transformation.name}</h3>
                    <div className="text-xl text-primary font-bold mb-4">{transformation.goal}</div>
                    <p className="text-lg text-muted-foreground leading-relaxed italic">"{transformation.quote}"</p>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {transformation.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                      >
                        <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 font-bold px-8 h-12 group shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300"
                  >
                    Start Your Transformation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">Join 500+ members who've transformed their lives</p>
          <Button
            size="lg"
            variant="outline"
            className="font-semibold text-base px-8 h-12 hover:bg-primary/10 hover:border-primary transition-all duration-300 bg-transparent"
          >
            View All Success Stories
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
