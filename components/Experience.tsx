import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Founding Full Stack Frontend-Heavy Engineer",
    company: "FindYourTutor",
    date: "August 2023 - Present",
    description: "Integral team member bringing problem-solving and team collaboration skills, used state-of-the-art technologies. Built a 5 step tutor application system, robust booking system, admin dashboards.",
    technologies: "NextJS 14 App Router, ReactJS, TypeScript, TailwindCSS, PostgreSQL, GitHub, CI/CD, Vercel, AWS, Shadcn, Tanstack Router, Redux, Node.js Express.js"
  },
  {
    title: "Team Lead, Software Engineer",
    company: "BidAI US",
    date: "May 2023 - August 2023",
    description: "Managed team of 3 developers. Led the first version development of a SaaS platform for intelligent bids.",
    technologies: "React, Tailwind CSS, Javascript, Express.js, Shadcn, MongoDB, Digital Ocean droplet, Git & Github"
  },
  {
    title: "Lead Software Engineer",
    company: "Building Inspection",
    date: "Jan 2023 - May 2023",
    description: "Led the development of a building inspection software solution.",
    technologies: "Python, Django, Flask, React, TailwindCSS, Redis, Celery, Docker, Docker Compose, OpenCV, PostgreSQL, Git & GitHub, Nginx, AWS, Vercel"
  },
  {
    title: "Freelance Web Developer",
    company: "Self-employed",
    date: "2020 - 2022",
    description: "Delivered 10+ full-stack projects for international clients, specializing in scalable web applications and API integrations. Secured $5.4K+ earnings and 500+ freelance hours through multiple platforms such as Upwork, and Fiverr.",
    technologies: "JavaScript, Python, Django, Express, React, MongoDB, MySQL, Nginx, Digital Ocean"
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-700">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Professional Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.company} | {exp.date}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{exp.description}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300"><strong>Technologies:</strong> {exp.technologies}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}