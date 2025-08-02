"use client"

import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 animate-in">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-in">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="https://avatars.githubusercontent.com/u/129983452?v=4"
                  alt="Profile"
                  width={600}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full -z-10" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full -z-10" />
            </div>

            <div className="animate-in">
              <h3 className="text-2xl font-semibold mb-4">Backend Engineer | Spring Boot </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Hi everyone! I’m Gaurav Kumar Singh, currently pursuing my B.Tech in Computer 
                Science & Engineering at IIIT Sonepat, with a CGPA of 8.1. I’m originally from 
                Aurangabad, Bihar. I completed my 10th education from DAV Public School, Ratwar Mohania, 
                with 94%, and my 12th from Mount Litera Zee School, Varanasi, with 93.6%.
                  
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                I’m a Java backend developer and competitive programmer with a strong foundation 
                in Data Structures and Algorithms, having solved over 400+ problems across LeetCode 
                and GeeksforGeeks. I enjoy building scalable backend systems using Java, Spring Boot, 
                and MongoDB. I’m a curious and team-oriented learner, always striving to grow, innovate, 
                and contribute to meaningful software projects.
              </p>

              <div className="text-lg grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Name:</p>
                  <p className="text-muted-foreground">Gaurav Kumar Singh</p>
                </div>
                <div>
                  <p className="font-medium">Email:</p>
                  <p className="text-muted-foreground">myselfgaurav2527@gmail.com</p>
                </div>
                <div>
                  <p className="font-medium">Location:</p>
                  <p className="text-muted-foreground">Sonipat, India</p>
                </div>
                <div>
                  <p className="font-medium">Availability:</p>
                  <p className="text-muted-foreground">Immediately</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
