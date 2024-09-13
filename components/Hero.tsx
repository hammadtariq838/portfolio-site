import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center max-w-6xl">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Muhammad Hammad Tariq</h1>
          <p className="text-xl md:text-2xl mb-6">Full Stack Frontend-Heavy Engineer</p>
          <p className="text-lg mb-8">Turning Ideas into Powerful Web Applications</p>
          <div className="flex space-x-4 mb-8">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              View Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
              Download CV
            </Button>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/m-hammad-tariq" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:hammadtariq838@gmail.com" className="text-white hover:text-gray-200">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Muhammad Hammad Tariq"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}