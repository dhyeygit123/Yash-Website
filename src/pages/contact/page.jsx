
import ContactHero from '@/components/contact/ContactHero'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactFormSection from '@/components/contact/ContactFormSection'
import ContactTestimonials from '@/components/contact/ContactTestimonials'

export default function Contact() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <ContactHero />
        <ContactInfo />
        <ContactFormSection />
        <ContactTestimonials />
      </main>
      {/* <Footer /> */}
    </>
  )
}