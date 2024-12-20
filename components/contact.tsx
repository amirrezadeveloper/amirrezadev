import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form className="space-y-4 max-w-md mx-auto">
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <Textarea placeholder="Your Message" />
        <Button type="submit" className="w-full">Send Message</Button>
      </form>
    </section>
  )
}

