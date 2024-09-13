import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Exploring the Potential of Web Assembly",
    excerpt: "Web Assembly is revolutionizing the way we think about performance in web applications. In this post, we dive deep into its potential and how it's shaping the future of web development.",
    date: "2023-05-15",
    readTime: "8 min read",
    slug: "future-of-web-development-web-assembly"
  },
  {
    id: 2,
    title: "Optimizing React Applications: Advanced Techniques for Performance",
    excerpt: "Performance is crucial in modern web apps. Learn advanced techniques to optimize your React applications, from code splitting to memoization and efficient state management.",
    date: "2023-06-22",
    readTime: "10 min read",
    slug: "optimizing-react-applications-advanced-techniques"
  },
  {
    id: 3,
    title: "Building Scalable Microservices with Node.js and Docker",
    excerpt: "Microservices architecture has gained popularity for its scalability and flexibility. Discover how to leverage Node.js and Docker to build robust, scalable microservices.",
    date: "2023-07-30",
    readTime: "12 min read",
    slug: "building-scalable-microservices-nodejs-docker"
  }
  // Add more blog posts here
]

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Technical Insights</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <Clock className="ml-4 mr-2 h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}