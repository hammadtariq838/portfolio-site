import { Award } from "lucide-react"

const certifications = [
  {
    name: "AWS Certified Cloud Practitioner (AWS CCP)",
    issuer: "Amazon Web Services",
    date: "2023"
  }
]

export default function Certifications() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Certifications</h2>
        <div className="max-w-2xl mx-auto">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center mb-4 bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
              <Award className="text-blue-500 mr-4 h-8 w-8" />
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">{cert.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer} | {cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}