import SectionAbout from '../organisms/heroSection/SectionAbout'
import SectionBenefit from '../organisms/heroSection/SectionBenefit'
import SectionCarousel from '../organisms/heroSection/SectionCarousel'
import SectionIntro from '../organisms/heroSection/SectionIntro'
import SectionProducts from '../organisms/heroSection/SectionProducts'

import Sectionstorecategories from '../organisms/heroSection/SectionStoreCatogery'

const LandingPage = () => {
  return (
    <>
      <SectionIntro />
      <Sectionstorecategories />
      <SectionAbout />
      <SectionProducts />
      <SectionBenefit />
      <SectionCarousel />
    </>
  )
}

export default LandingPage
