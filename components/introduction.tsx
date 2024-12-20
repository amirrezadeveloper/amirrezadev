import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Introduction() {
  return (
    <section className="text-center space-y-4">
      <h1 className="text-4xl font-bold">John Doe</h1>
      <p className="text-xl text-muted-foreground">Web Developer</p>
      <p>
        Passionate about creating clean, efficient, and user-friendly web applications.
        Specializing in front-end development with React and Next.js.
      </p>
      <div className="flex justify-center space-x-4">
        <Button variant="outline" size="icon" aria-label="GitHub">
          <Github className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" aria-label="LinkedIn">
          <Linkedin className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" aria-label="Email">
          <Mail className="h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}

