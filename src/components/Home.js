import Hero from './Hero'
import Services from './Services'
import Location from './Location'
import OtherProducts from './OtherProducts'
import Fact from './Fact'
import Hours from './Hours'

// Home contains
// 1. Main page contents - everything but the header, footer, and other tab's contents

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Location />
            <OtherProducts />
            <Fact />
            <Hours />
        </>
    )
}

export default Home;