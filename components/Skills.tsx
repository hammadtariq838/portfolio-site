import { CheckCircle } from "lucide-react"

const skillCategories = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "C", "C++"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["NextJS 14 App Router", "ReactJS", "Server Components", "Redux", "Context", "ExpressJS", "NodeJS", "NestJS", "Flask", "EJS", "Jinja2", "REST API", "tRPC"]
  },
  {
    category: "Databases & Tools",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "AWS RDS", "Drizzle", "Prisma", "Mongoose ORM"]
  },
  {
    category: "Cloud & Deployment",
    skills: ["AWS (EC2, S3, SES, IAM, VPC, Amplify)", "Nginx", "Apache", "Vercel", "Digital Ocean"]
  },
  {
    category: "Testing",
    skills: ["Jest", "React Testing Library", "Playwright", "Selenium"]
  },
  {
    category: "Other Tools",
    skills: ["Figma Prototyping", "Microsoft Office Suite", "Google Workspace"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                    <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}