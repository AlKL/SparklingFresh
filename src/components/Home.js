import Hero from './Hero'
import Services from './Services'
import Location from './Location'
import OtherProducts from './OtherProducts'
import Questionnaire from './Questionnaire'

// Home contains
// 1. Main page contents - everything but the header, footer, and other tab's contents

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Location />
            <OtherProducts />
            <Questionnaire />
        </>
    )
}

export default Home;