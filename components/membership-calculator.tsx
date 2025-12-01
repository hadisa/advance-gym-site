"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Crown, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

interface PlanFeature {
  name: string
  included: boolean
}

interface MembershipPlan {
  name: string
  icon: React.ReactNode
  monthlyPrice: number
  yearlyPrice: number
  popular?: boolean
  features: PlanFeature[]
  color: string
}

const plans: MembershipPlan[] = [
  {
    name: "Starter",
    icon: <Zap className="w-6 h-6" />,
    monthlyPrice: 29,
    yearlyPrice: 290,
    color: "from-blue-500 to-cyan-500",
    features: [
      { name: "Access to gym floor", included: true },
      { name: "Basic equipment", included: true },
      { name: "Locker room access", included: true },
      { name: "Personal trainer", included: false },
      { name: "Nutrition plan", included: false },
      { name: "Group classes", included: false },
    ],
  },
  {
    name: "Pro",
    icon: <Crown className="w-6 h-6" />,
    monthlyPrice: 59,
    yearlyPrice: 590,
    popular: true,
    color: "from-yellow-500 to-orange-500",
    features: [
      { name: "Access to gym floor", included: true },
      { name: "Premium equipment", included: true },
      { name: "Locker room access", included: true },
      { name: "2 PT sessions/month", included: true },
      { name: "Basic nutrition plan", included: true },
      { name: "All group classes", included: true },
    ],
  },
  {
    name: "Elite",
    icon: <Sparkles className="w-6 h-6" />,
    monthlyPrice: 99,
    yearlyPrice: 990,
    color: "from-purple-500 to-pink-500",
    features: [
      { name: "24/7 gym access", included: true },
      { name: "All premium equipment", included: true },
      { name: "Private locker", included: true },
      { name: "Unlimited PT sessions", included: true },
      { name: "Custom nutrition plan", included: true },
      { name: "All classes + priority booking", included: true },
    ],
  },
]

export function MembershipCalculator() {
  const [isYearly, setIsYearly] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const calculateSavings = (plan: MembershipPlan) => {
    const yearlyTotal = plan.monthlyPrice * 12
    const savings = yearlyTotal - plan.yearlyPrice
    return Math.round((savings / yearlyTotal) * 100)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-4">
            Pricing Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your <span className="text-primary">Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Flexible membership options designed for every fitness goal
          </p>

          <div className="flex items-center justify-center gap-4 mb-2">
            <Label
              htmlFor="billing-toggle"
              className={`font-semibold ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}
            >
              Monthly
            </Label>
            <Switch
              id="billing-toggle"
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <Label
              htmlFor="billing-toggle"
              className={`font-semibold ${isYearly ? "text-foreground" : "text-muted-foreground"}`}
            >
              Yearly
            </Label>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-block px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-bold"
            >
              Save up to 20%
            </motion.span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {plans.map((plan, index) => {
              const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
              const savings = calculateSavings(plan)

              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <span className="inline-block px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <div
                    className={`relative h-full bg-card border-2 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 ${
                      plan.popular ? "border-primary" : "border-border hover:border-primary/50"
                    } ${selectedPlan === plan.name ? "ring-4 ring-primary ring-offset-4 ring-offset-background" : ""}`}
                  >
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} text-white mb-4`}
                    >
                      {plan.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>

                    <div className="mb-6">
                      <motion.div
                        key={isYearly ? "yearly" : "monthly"}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-baseline gap-1"
                      >
                        <span className="text-5xl font-bold text-foreground">${price}</span>
                        <span className="text-muted-foreground">/{isYearly ? "year" : "month"}</span>
                      </motion.div>
                      {isYearly && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-sm text-green-500 font-semibold mt-1"
                        >
                          Save {savings}% with annual billing
                        </motion.p>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check
                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              feature.included ? "text-primary" : "text-muted-foreground/30"
                            }`}
                          />
                          <span className={feature.included ? "text-foreground" : "text-muted-foreground line-through"}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      size="lg"
                      className={`w-full ${
                        plan.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/80"
                      }`}
                      onClick={() => setSelectedPlan(plan.name)}
                    >
                      {selectedPlan === plan.name ? "Selected" : "Get Started"}
                    </Button>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-12"
        >
          All plans include a 7-day money-back guarantee. No contracts, cancel anytime.
        </motion.p>
      </div>
    </section>
  )
}
