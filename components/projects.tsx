"use client"

import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Journal Application",
    description:
      "Developed a secure journal app using Spring Boot that allows users to create, edit, and manage personal entries with search, email reminders, and data persistence via MongoDB and Redis.",
    image: "/download.jpeg?height=400&width=600",
    tags: ["Spring Boot", "MongoDB","Redis", "Maven", "Restful APIs","JavaMailSender", "logback.xml"],
    liveUrl: "https://github.com/gaurav-2622/JournalApp",
    githubUrl: "https://github.com/gaurav-2622/JournalApp",
  },
  {
    title: "Online Auction System",
    description: "Built a secure online auction platform with real-time bidding, item listings, user authentication, and payment integration using Spring Boot, MongoDB, and Razorpay API.",
    image: "/travel.png?height=200&width=200",
    tags: ["Spring Boot","Thymeleaf", "Payment Gateway API", "JWT authentication", "JUnit", "MongoDB",],
    liveUrl: "https://github.com/gaurav-2622/Online-Auction-System",
    githubUrl: "https://github.com/gaurav-2622/Online-Auction-System",
  },
  {
    title: "Courier Management System",
    description: "Built the backend of a Courier Management System using Spring Boot and MySQL, implementing REST APIs for role-based user operations, courier assignment, and real-time delivery status tracking.",
    image: "/download1.jpeg?height=400&width=600",
    tags: ["Spring Boot", "Spring Security",  "JWT","MySQL", "Hibernate", "Lombok", "Restful APIs"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio site built with Next.js, showcasing projects, skills, and achievements with seamless UX and performance.",
    image: "/portfolio.jpg?height=400&width=600",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com/gaurav-2622/Portfolio",
  },
  {
    title: "Disaster Management App",
    description: "Developed the backend of a Disaster Management App using Firebase, Kotlin, Google Maps API, MVVM, Android, and REST APIs, enabling real-time alerts, secure user authentication, and location-based disaster reporting.",
    image: "/images.jpeg?height=400&width=600",
    tags: ["Kotlin", "Firebase", "Google Maps API", "Android", "REST API" , "MVVM"],
    liveUrl: "https://github.com/gaurav-2622/Disaster-Management-App",
    githubUrl: "https://github.com/gaurav-2622/Disaster-Management-App",
  },
  
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-in">
            My <span className="text-primary">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="animate-in">
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="">{project.title}</CardTitle>
                    <CardDescription  className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <Badge className="text-sm" key={idx} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    </Button>
                    <Button size="sm" className="flex items-center gap-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <span>Live Demo</span>
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
