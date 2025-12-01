"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Award, Target, TrendingUp, Users } from "lucide-react"

interface StatCardProps {
  icon: React.ReactNode
  value: number
  suffix: string
  label: string
  delay: number
}

function StatCard({ icon, value, suffix, label, delay }: StatCardProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="relative group"
    >
      <div className="bg-card border border-border rounded-xl p-8 text-center transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <div className="text-5xl font-bold text-foreground mb-2 tabular-nums">
          {count}
          <span className="text-primary">{suffix}</span>
        </div>
        <p className="text-muted-foreground font-medium">{label}</p>
      </div>
    </motion.div>
  )
}

export function AnimatedStatsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-4">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Results That <span className="text-primary">Speak</span> For Themselves
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of members who have transformed their lives with our proven training methods
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard icon={<Users className="w-8 h-8" />} value={2500} suffix="+" label="Active Members" delay={0} />
          <StatCard icon={<Award className="w-8 h-8" />} value={98} suffix="%" label="Success Rate" delay={0.1} />
          <StatCard icon={<Target className="w-8 h-8" />} value={5000} suffix="+" label="Goals Achieved" delay={0.2} />
          <StatCard
            icon={<TrendingUp className="w-8 h-8" />}
            value={15}
            suffix="+"
            label="Years Experience"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  )
}
