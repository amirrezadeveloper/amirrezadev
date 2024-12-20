import { Badge } from '@/components/ui/badge'

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 
  'HTML', 'CSS', 'Tailwind CSS', 'Git'
]

export default function Skills() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary">{skill}</Badge>
        ))}
      </div>
    </section>
  )
}

