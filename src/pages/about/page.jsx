import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AboutHero from '../../components/about/AboutHero'
import StudioStory from '../../components/about/StudioStory'
import TeamSection from '../../components/about/TeamSection'
import VisionMission from '../../components/about/VisionMission'
import Achievements from '../../components/about/Achievements'

export default function AboutPage() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <AboutHero />
        <StudioStory />
        <TeamSection />
        <VisionMission />
        <Achievements />
      </main>
      {/* <Footer /> */}
    </>
  )
}
