import SectionAbout from '../organsims/SectionAbout'
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
    </>
  )
}

export default LandingPage
