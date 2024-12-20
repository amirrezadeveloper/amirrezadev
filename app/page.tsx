import { Metadata } from 'next'
import Introduction from '@/components/introduction'
import Skills from '@/components/skills'
import Projects from '@/components/projects'

export const metadata: Metadata = {
  title: 'Simple Portfolio',
  description: 'A showcase of my skills and projects',
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background p-8">
      <div className="container mx-auto max-w-2xl space-y-12">
        <Introduction />
        <Skills />
        <Projects />
      </div>
    </main>
  )
}

