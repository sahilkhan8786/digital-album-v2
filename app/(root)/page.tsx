import CTA from '@/components/custom/landing-page/cta'
import Features from '@/components/custom/landing-page/features'
import Galleries from '@/components/custom/landing-page/galleries'
import HeroLandingPage from '@/components/custom/landing-page/hero'
import SocialProof from '@/components/custom/landing-page/social-proof'
import Testimonials from '@/components/custom/landing-page/testimonials'

const LandingPage = () => {
  return (
    <>
      <HeroLandingPage />
      <SocialProof />
      <Features />
      <Galleries />
      <Testimonials />
      <CTA />
    </>
  )
}

export default LandingPage