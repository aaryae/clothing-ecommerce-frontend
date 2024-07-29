import SectionAbout from '../organsims/SectionAbout'
import SectionBenefit from '../organsims/SectionBenefit'
import SectionCarousel from '../organsims/SectionCarousel'
import SectionIntro from '../organsims/SectionIntro'
import SectionProducts from '../organsims/SectionProducts'
import Sectionstorecategories from '../organsims/SectionStoreCatogery'

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
