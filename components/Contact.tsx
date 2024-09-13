'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-700">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Get in Touch</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[150px]"
              />
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
          <div className="md:w-1/2 space-y-4">
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-600 dark:text-gray-300">hammadtariq838@gmail.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-600 dark:text-gray-300">0304-1131685</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-600 dark:text-gray-300">DHA, Lahore</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}