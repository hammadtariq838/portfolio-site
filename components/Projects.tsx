import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "FindYourTutor Platform",
    description: "A comprehensive tutor-student matching platform with a 5-step tutor application system, robust booking system, and admin dashboards.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["NextJS 14", "React", "TypeScript", "TailwindCSS", "PostgreSQL", "AWS"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "BidAI SaaS Platform",
    description: "An intelligent bidding SaaS platform for businesses, featuring advanced analytics and automated bid suggestions.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Express.js", "MongoDB", "Tailwind CSS", "Shadcn"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Building Inspection Software",
    description: "A comprehensive solution for building inspectors, featuring image processing capabilities and report generation.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Python", "Django", "React", "OpenCV", "Docker"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "WebRTC Video Chat Application",
    description: "A real-time video chat application built as part of a Software Engineering course project.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Express.js", "React", "WebRTC", "Socket.io"],
    liveLink: "#",
    githubLink: "#"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-700">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" className="flex items-center" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}