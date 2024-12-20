import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Personal Blog',
    description: 'A responsive blog built with Next.js and MDX for content management.',
    technologies: ['Next.js', 'React', 'MDX', 'Tailwind CSS'],
    url: '#'
  },
  {
    title: 'Weather App',
    description: 'A simple weather application using a third-party API for real-time weather data.',
    technologies: ['React', 'API Integration', 'CSS Modules'],
    url: '#'
  },
  {
    title: 'Task Manager',
    description: 'A to-do list application with local storage for data persistence.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Local Storage'],
    url: '#'
  }
]

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
              <Button variant="outline" size="sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Project
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

