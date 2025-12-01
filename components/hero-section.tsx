"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"

export function HeroSection() {
  const stats = [
    { value: "500+", label: "Members Transformed" },
    { value: "98%", label: "Success Rate" },
    { value: "15+", label: "Expert Trainers" },
  ]

  return (
    <section id="home" className="relative min-h-screen pt-20 pb-16 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Available for Training</span>
            </div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance"
              >
                STOP WORKING OUT.
                <br />
                <span className="text-primary">START TRAINING.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed"
              >
                Personalized coaching and a community-driven environment to smash your goals and build lasting strength.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 font-bold text-lg px-10 h-14 group shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300"
              >
                Claim Your Free Session
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold text-base px-8 h-14 bg-transparent hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                View Success Stories
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary border border-primary/20">
              <img
                src="/professional-athletic-person-training-in-modern-gy.jpg"
                alt="Fitness Training"
                className="w-full h-full object-cover"
              />

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-8 left-8 right-8 bg-card/90 backdrop-blur-md border border-border rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Average Progress</div>
                    <div className="flex items-end gap-4">
                      <div>
                        <div className="text-2xl font-bold text-primary">90%</div>
                        <div className="text-xs text-muted-foreground">Goal Achievement</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">5.0</div>
                        <div className="text-xs text-muted-foreground">Avg Rating</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-foreground">24/7</div>
                        <div className="text-xs text-muted-foreground">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Tech Stack Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 bg-primary/95 py-6"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {["Strength", "Cardio", "Nutrition", "Recovery", "Flexibility"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-primary-foreground">
                <div className="w-2 h-2 bg-primary-foreground rounded-full" />
                <span className="font-semibold text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
