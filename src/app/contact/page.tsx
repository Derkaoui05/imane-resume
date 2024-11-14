import ContactForm from './contact-form'
import { Toaster } from '@/components/ui/toaster'

export default function ContactPage() {
  return (
    <div className="flex flex-col justify-center min-h-screen py-10 md:py-24 overflow-hidden">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Me</h1>
      <ContactForm />
      <Toaster />
    </div>
  )
}