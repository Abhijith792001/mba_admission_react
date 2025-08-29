import AppNavbar from '../../components/Navbar/AppNavbar'
import Hero from '../../components/Hero/Hero'
import ASB from '../../components/ASB/ASB'
import DualDegree from '../../components/DualDegree/DualDegree'
import AccordionSection from '../../components/AccordionSection/AccordionSection'
import StepsSection from '../../components/StepsSection/StepsSection'
import Campuses from '../../components/Campus/Campus'
import FeeStructure from '../../components/FeeStructure/FeeStructure'
import ScholarshipDetails from '../../components/ScholarshipDetails/ScholarshipDetails'
import RankingsAccreditation from '../../components/RankingsAccreditation/RankingsAccreditation'
import InternationalCollaboration from '../../components/InternationalCollaboration/InternationalCollaboration'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <>
      <AppNavbar />
      <Hero />
      <ASB />
      <DualDegree/>
      <AccordionSection/>
      <StepsSection/>
      <Campuses/>
      <FeeStructure/>
      <ScholarshipDetails/>
      <RankingsAccreditation/>
      <InternationalCollaboration/>
      <Footer/>
    </>
  )
}

export default Home
