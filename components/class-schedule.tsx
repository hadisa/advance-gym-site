"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, Dumbbell, Filter, Heart, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ClassSession {
  id: string
  name: string
  instructor: string
  time: string
  duration: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  category: "Strength" | "Cardio" | "Flexibility" | "HIIT"
  spotsLeft: number
  maxSpots: number
}

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const classesData: Record<string, ClassSession[]> = {
  Monday: [
    {
      id: "mon-1",
      name: "Morning Strength",
      instructor: "Mike Johnson",
      time: "06:00 AM",
      duration: "60 min",
      difficulty: "Intermediate",
      category: "Strength",
      spotsLeft: 3,
      maxSpots: 15,
    },
    {
      id: "mon-2",
      name: "HIIT Blast",
      instructor: "Sarah Chen",
      time: "09:00 AM",
      duration: "45 min",
      difficulty: "Advanced",
      category: "HIIT",
      spotsLeft: 8,
      maxSpots: 20,
    },
    {
      id: "mon-3",
      name: "Yoga Flow",
      instructor: "Emma Davis",
      time: "06:00 PM",
      duration: "60 min",
      difficulty: "Beginner",
      category: "Flexibility",
      spotsLeft: 12,
      maxSpots: 25,
    },
  ],
  Tuesday: [
    {
      id: "tue-1",
      name: "Spin Class",
      instructor: "Tom Rodriguez",
      time: "07:00 AM",
      duration: "45 min",
      difficulty: "Intermediate",
      category: "Cardio",
      spotsLeft: 5,
      maxSpots: 20,
    },
    {
      id: "tue-2",
      name: "Powerlifting",
      instructor: "Mike Johnson",
      time: "12:00 PM",
      duration: "90 min",
      difficulty: "Advanced",
      category: "Strength",
      spotsLeft: 2,
      maxSpots: 10,
    },
  ],
  Wednesday: [
    {
      id: "wed-1",
      name: "Bootcamp",
      instructor: "Sarah Chen",
      time: "06:00 AM",
      duration: "60 min",
      difficulty: "Intermediate",
      category: "HIIT",
      spotsLeft: 10,
      maxSpots: 25,
    },
  ],
  Thursday: [
    {
      id: "thu-1",
      name: "CrossFit Fundamentals",
      instructor: "Tom Rodriguez",
      time: "05:30 AM",
      duration: "60 min",
      difficulty: "Beginner",
      category: "Strength",
      spotsLeft: 15,
      maxSpots: 20,
    },
  ],
  Friday: [
    {
      id: "fri-1",
      name: "Friday HIIT Party",
      instructor: "Sarah Chen",
      time: "06:00 PM",
      duration: "45 min",
      difficulty: "Intermediate",
      category: "HIIT",
      spotsLeft: 18,
      maxSpots: 30,
    },
  ],
  Saturday: [
    {
      id: "sat-1",
      name: "Weekend Warrior",
      instructor: "Mike Johnson",
      time: "09:00 AM",
      duration: "90 min",
      difficulty: "Advanced",
      category: "Strength",
      spotsLeft: 8,
      maxSpots: 15,
    },
  ],
  Sunday: [
    {
      id: "sun-1",
      name: "Recovery & Stretch",
      instructor: "Emma Davis",
      time: "10:00 AM",
      duration: "60 min",
      difficulty: "Beginner",
      category: "Flexibility",
      spotsLeft: 20,
      maxSpots: 30,
    },
  ],
}

const categoryIcons = {
  Strength: <Dumbbell className="w-4 h-4" />,
  Cardio: <Heart className="w-4 h-4" />,
  Flexibility: <Zap className="w-4 h-4" />,
  HIIT: <Zap className="w-4 h-4" />,
}

const difficultyColors = {
  Beginner: "bg-green-500/10 text-green-500 border-green-500/20",
  Intermediate: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  Advanced: "bg-red-500/10 text-red-500 border-red-500/20",
}

export function ClassSchedule() {
  const [selectedDay, setSelectedDay] = useState("Monday")
  const [filterCategory, setFilterCategory] = useState<string | null>(null)
  const [bookedClasses, setBookedClasses] = useState<Set<string>>(new Set())

  const filteredClasses =
    classesData[selectedDay]?.filter((classItem) => !filterCategory || classItem.category === filterCategory) || []

  const handleBookClass = (classId: string) => {
    setBookedClasses((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(classId)) {
        newSet.delete(classId)
      } else {
        newSet.add(classId)
      }
      return newSet
    })
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-4">
            Weekly Schedule
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Book Your <span className="text-primary">Next Class</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interactive schedule with real-time availability and instant booking
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <Button
            variant={filterCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setFilterCategory(null)}
            className="gap-2"
          >
            <Filter className="w-4 h-4" />
            All Classes
          </Button>
          {(["Strength", "Cardio", "Flexibility", "HIIT"] as const).map((category) => (
            <Button
              key={category}
              variant={filterCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterCategory(category)}
              className="gap-2"
            >
              {categoryIcons[category]}
              {category}
            </Button>
          ))}
        </div>

        <div className="flex overflow-x-auto gap-3 mb-8 pb-2 scrollbar-hide">
          {weekDays.map((day) => (
            <motion.button
              key={day}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedDay(day)}
              className={`flex-shrink-0 px-6 py-3 rounded-xl font-semibold transition-all ${
                selectedDay === day
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card border border-border hover:border-primary text-foreground"
              }`}
            >
              {day}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClasses.map((classItem, index) => {
            const isBooked = bookedClasses.has(classItem.id)
            const isAlmostFull = classItem.spotsLeft <= 5

            return (
              <motion.div
                key={classItem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-card border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  isBooked
                    ? "border-primary ring-2 ring-primary ring-offset-2 ring-offset-background"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{classItem.name}</h3>
                    <p className="text-sm text-muted-foreground">with {classItem.instructor}</p>
                  </div>
                  <Badge className={difficultyColors[classItem.difficulty]}>{classItem.difficulty}</Badge>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {classItem.time} • {classItem.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    {categoryIcons[classItem.category]}
                    {classItem.category}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4" />
                    <span className={isAlmostFull ? "text-orange-500 font-semibold" : "text-muted-foreground"}>
                      {classItem.spotsLeft}/{classItem.maxSpots} spots available
                    </span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full"
                  variant={isBooked ? "secondary" : "default"}
                  onClick={() => handleBookClass(classItem.id)}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {isBooked ? "Cancel Booking" : "Book Now"}
                </Button>
              </motion.div>
            )
          })}
        </div>

        {filteredClasses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No classes found for the selected filters. Try a different day or category.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
