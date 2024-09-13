import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowLeft, CalendarIcon, Clock } from "lucide-react"
import MarkdownRenderer from '@/components/MarkdownRenderer';


const blogPost =
{
  id: 1,
  title: "The Future of Web Development: Exploring the Potential of Web Assembly",
  excerpt: "Web Assembly is revolutionizing the way we think about performance in web applications. In this post, we dive deep into its potential and how it's shaping the future of web development.",
  date: "2023-05-15",
  content: `


  Web Assembly (Wasm) is a binary instruction format that can be executed in modern web browsers. It's a low-level assembly-like language with a compact binary format that runs with near-native performance. Web Assembly is designed to complement JavaScript, not replace it. It's a powerful tool that can be used to optimize performance-critical parts of web applications.

  ## Why Web Assembly?

  Web Assembly has several key advantages over JavaScript:

  - **Performance**: Web Assembly runs at near-native speed, making it ideal for performance-critical applications.
  - **Portability**: Web Assembly is platform-independent and can run on any device that supports it.
  - **Security**: Web Assembly runs in a sandboxed environment, making it more secure than JavaScript.
  - **Interoperability**: Web Assembly can interact with JavaScript and other web technologies.
  

  ## Use Cases

  Web Assembly is well-suited for a wide range of applications, including:

  - **Games**: Web Assembly is ideal for building high-performance games that run in the browser.
  - **Media Processing**: Web Assembly can be used to process audio and video files in the browser.
  - **Virtual Reality**: Web Assembly can power virtual reality experiences in the browser.
  - **Machine Learning**: Web Assembly can run machine learning models in the browser.
  - **CAD Applications**: Web Assembly can be used to build complex CAD applications that run in the browser.

  ## Getting Started

  To get started with Web Assembly, you'll need to install a Web Assembly compiler like Emscripten or Rust. You can then compile your code to Web Assembly and run it in the browser using a JavaScript API.

  Here's a simple example of a Web Assembly module written in Rust:

  \`\`\`rust
  #[no_mangle]
  pub extern "C" fn add(a: i32, b: i32) -> i32 {
      a + b
  }
  \`\`\`

  You can compile this code to Web Assembly using the Rust compiler and run it in the browser using JavaScript:

  \`\`\`javascript
  const { instance } = await WebAssembly.instantiateStreaming(fetch('add.wasm'));
  const result = instance.exports.add(1, 2);
  console.log(result); // 3
  \`\`\`

  ## Conclusion

  Web Assembly is revolutionizing the way we think about performance in web applications. It's a powerful tool that can be used to optimize performance-critical parts of web applications. With Web Assembly, developers can build high-performance web applications that run in the browser. If you haven't already, I encourage you to explore the potential of Web Assembly and see how it can shape the future of web development.
  `,
  readTime: "8 min read",
  slug: "future-of-web-development-web-assembly"
}

interface BlogPostProps {
  title: string
  content: string
  date: string
  readTime: string
}

function BlogPost({ title, content, date, readTime }: BlogPostProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <Button variant="ghost" className="mb-8" asChild>
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
      </Button>
      <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">{title}</h1>
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
        <CalendarIcon className="mr-2 h-4 w-4" />
        <span>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        <Clock className="ml-4 mr-2 h-4 w-4" />
        <span>{readTime}</span>
      </div>
      <MarkdownRenderer content={content} />
      {/* {content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))} */}
    </article>
  )
}

export default function BlogPage() {
  return (
    <BlogPost {...blogPost} />
  )
}
