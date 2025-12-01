"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Business Executive",
    image: "/placeholder.svg?key=vxz64",
    rating: 5,
    text: "Incredible transformation! I lost 30 pounds and gained confidence I never knew I had. The trainers are exceptional.",
    results: "-30 lbs in 3 months",
  },
  {
    id: 2,
    name: "David Park",
    role: "Software Engineer",
    image: "/placeholder.svg?key=mndk6",
    rating: 5,
    text: "The personalized nutrition plan combined with strength training completely transformed my physique and energy levels.",
    results: "+15 lbs muscle gain",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    role: "Healthcare Professional",
    image: "/placeholder.svg?key=lkdo2",
    rating: 5,
    text: "Best investment in myself. The 24/7 access fits my schedule perfectly, and the community support is amazing.",
    results: "Marathon ready",
  },
]

const clientStats = [
  { value: "4.9/5", label: "Average Rating", subtext: "From 1000+ Reviews" },
  { value: "50+", label: "Happy Clients", subtext: "Active Members" },
  { value: "98%", label: "Satisfaction Rate", subtext: "Client Retention" },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + newDirection
      if (newIndex < 0) return testimonials.length - 1
      if (newIndex >= testimonials.length) return 0
      return newIndex
    })
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

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
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            WHAT <span className="text-primary">CLIENTS SAY</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don't just take our word for it. Hear from clients who've experienced exceptional results.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative min-h-[400px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Testimonial Content */}
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Quote className="h-8 w-8 text-primary" />
                    </div>

                    <div className="p-8 bg-card border border-border rounded-2xl relative">
                      {/* Star Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-lg leading-relaxed mb-6 text-foreground">"{currentTestimonial.text}"</p>

                      {/* Client Info */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary overflow-hidden">
                          <img
                            src={currentTestimonial.image || "/placeholder.svg"}
                            alt={currentTestimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-foreground">{currentTestimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{currentTestimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results Card */}
                  <div className="relative">
                    <div className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl">
                      <div className="mb-6">
                        <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                          Results Achieved
                        </div>
                        <div className="text-4xl font-bold text-primary">{currentTestimonial.results}</div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Progress</span>
                          <span className="text-sm font-bold text-foreground">Exceptional</span>
                        </div>
                        <div className="w-full h-2 bg-secondary/20 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "98%" }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-primary to-yellow-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => paginate(-1)}
                className="rounded-full w-12 h-12 border-2 hover:border-primary hover:bg-primary/10"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1)
                      setCurrentIndex(index)
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={() => paginate(1)}
                className="rounded-full w-12 h-12 border-2 hover:border-primary hover:bg-primary/10"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Client Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {clientStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-card border border-border rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.subtext}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
