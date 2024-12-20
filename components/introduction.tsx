import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Introduction() {
  return (
    <section className="text-center space-y-4">
      <h1 className="text-4xl font-bold">Amirreza Ghahremani</h1>
      <p className="text-xl text-muted-foreground">Web Developer</p>
      <p>
    I am a skilled software developer specializing in <strong>ASP.NET Core</strong> and <strong>MVC</strong> for building secure and scalable web applications. I have experience with <strong>Microservices</strong> using <strong>gRPC</strong>, <strong>GraphQL</strong>, and <strong>REST APIs</strong>, as well as proficiency in <strong>Entity Framework Core</strong>, <strong>SQL Server</strong>, and authentication with <strong>JWT</strong> and <strong>OAuth</strong>.
  </p>
  <p>
    I am knowledgeable in <strong>CQRS</strong>, <strong>Clean Architecture</strong>, and front-end technologies like <strong>Angular</strong> and <strong>Next.js</strong>, with a strong foundation in <strong>Git</strong> and <strong>DevOps</strong> for efficient workflows. My focus is on delivering high-quality, maintainable solutions that align with user and business needs.
  </p>

  <div className="flex justify-center space-x-4">
      <Link href="https://github.com/amirrezadeveloper" passHref>
        <Button variant="outline" size="icon" aria-label="GitHub">
          <Github className="h-5 w-5" />
        </Button>
      </Link>
      <Link href="https://www.linkedin.com/in/amirrezaghahremani" passHref>
        <Button variant="outline" size="icon" aria-label="LinkedIn">
          <Linkedin className="h-5 w-5" />
        </Button>
      </Link>
      <Link href="mailto:amirrezaghahremani@gmail.com" passHref>
        <Button variant="outline" size="icon" aria-label="Email">
          <Mail className="h-5 w-5" />
        </Button>
      </Link>
    </div>
    </section>
  )
}

