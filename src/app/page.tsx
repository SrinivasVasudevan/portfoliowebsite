"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Twitter, BookOpen, FileText } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const projects = [
    {
      title: "WindBorne Challenge",
      description: "A weather balloon trajectory predictor",
      year: "2025",
      link: "http://svasude7.ddns.net/",
    },
    {
      title: "By14",
      description: "A book keeping app",
      year: "2023",
      link: "https://github.com/SrinivasVasudevan/By14",
    },
    {
      title: "VAD",
      description: "Video anomaly detection research paper's codebase",
      year: "2021",
      link: "https://github.com/SrinivasVasudevan/VAD",
    },
    {
      title: "Teaching Slate",
      description: "An application to assist teachers in online teaching (Google Solution Challenge)",
      year: "2021",
      link: "https://github.com/SrinivasVasudevan/TeachingSlate",
    },
  ];

  const publications = [
    {
      title: "Residual spatiotemporal autoencoder with skip connected and memory guided network for detecting video anomalies",
      authors: "S Chandrakala, V Srinivas, K Deepak",
      conference: "Neural Processing Letters",
      year: "2021",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_aOnuYEAAAAJ&authuser=1&citation_for_view=_aOnuYEAAAAJ:u5HHmVD_uO8C",
    },
    {
      title: "Object-centric and memory-guided network-based normality modeling for video anomaly detection",
      authors: "S Chandrakala, P Shalmiya, V Srinivas, K Deepak",
      conference: "Signal, Image and Video Processing",
      year: "2022",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_aOnuYEAAAAJ&authuser=1&citation_for_view=_aOnuYEAAAAJ:u-x6o8ySG0sC",
    },
  ];

  const years = Array.from(new Set(projects.map(project => project.year))).sort((a, b) => b.localeCompare(a));

  const filteredProjects = selectedYear
    ? projects.filter(project => project.year === selectedYear)
    : projects;

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/SrinivasVasudevan",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/srinivas-vasudevan/",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://x.com/SrinivasVasude3",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center">
        <h1 className="text-4xl font-bold mb-4">Srinivas Vasudevan</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl flex items-center">
          I like building cool things
          <span className="ml-2 w-2 h-6 bg-foreground animate-blink" />
        </p>
        <div className="flex gap-4 mb-8">
          {socialLinks.map((social) => (
            <Button
              key={social.name}
              variant="outline"
              size="icon"
              asChild
            >
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </a>
            </Button>
          ))}
        </div>

        {/* Resume Preview Card */}
        <Link 
          href="/Resume_SrinivasVasudevan.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group py-20"
        >
          <Card className="w-64 h-40 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <CardHeader className="flex flex-row items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              <CardTitle className="text-lg">Resume</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Click to view my professional experience and skills
              </p>
            </CardContent>
          </Card>
        </Link>
      </section>

      {/* Publications Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
          <BookOpen className="h-8 w-8" />
          Publications
        </h2>
        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          {publications.map((publication, index) => (
            <Link 
              key={index} 
              href={publication.link} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Card className="transition-all hover:scale-[1.02] hover:shadow-lg bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">{publication.title}</CardTitle>
                  <CardDescription className="text-base">
                    {publication.authors}
                  </CardDescription>
                  <CardDescription>
                    {publication.conference} • {publication.year}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Projects Timeline */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        
        {/* Horizontal Timeline */}
        <div className="relative mb-12">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-muted-foreground/20" />
          <div className="flex justify-between relative">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(selectedYear === year ? null : year)}
                className={`relative z-10 px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedYear === year
                    ? "bg-primary text-primary-foreground scale-110"
                    : "bg-muted hover:bg-muted-foreground/20"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <Link 
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Card className="h-full transition-all hover:scale-[1.02] hover:shadow-lg bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.year}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{project.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
