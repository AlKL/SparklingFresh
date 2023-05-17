import '../styles/about.css';
import tableTop from '../images/tabletop.png'
import fillingWater from '../images/fillingWater.png'
import tanks from '../images/tanks.png'

const About = () => {
    return (
        <>
            <div className='about sectionWrapper'>
                <div className='aboutContainer sectionWrapperWidth'>
                    <div className='rowContainer'>

                        <div className='contentRow'>
                            <div className='aboutRowImageContainer'>
                                <div className='aboutPic'>
                                    <img src={tableTop}></img>
                                </div>
                            </div>
                            <div className='aboutRowTextContainer'>
                                <div className='aboutRowTextTop'>
                                    <h1>aboutRowTextTop</h1>
                                </div>
                                <div className='aboutRowTextMid'>
                                    <p>
                                        At Sparkling Fresh Water, we aim to serve the best quality water possible for our customers.
                                        We have been open operating Sparkling Fresh Water since 2005.
                                        Our family-owned business has been operating for over 18 years and is committed to providing our customers with high-quality, purified water.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className='contentRow'>
                            <div className='aboutRowImageContainer'>
                                <div className='aboutPic'>
                                    <img src={fillingWater}></img>
                                </div>
                            </div>
                            <div className='aboutRowTextContainer'>
                                <div className='aboutRowTextTop'>
                                    <h1>aboutRowTextTop</h1>
                                </div>
                                <div className='aboutRowTextMid'>
                                    <p>
                                        As a local business, we take pride in supporting the water needs of our community and building long-lasting relationships with our customers.
                                        We believe in friendly and attentive customer service, and strive to exceed our customers' expectations every day.
                                        Our values of honesty, integrity, and environmental sustainability guide our business decisions and practices.
                                        Our team is dedicated to providing exceptional service and ensuring that our customers are always satisfied with their experience.
                                        Thank you for considering us as your trusted provider of high-quality, purified water. We look forward to serving you for years to come.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='contentRow'>
                            <div className='aboutRowImageContainer'>
                                <div className='aboutPic'>
                                    <img src={tanks}></img>
                                </div>
                            </div>
                            <div className='aboutRowTextContainer'>
                                <div className='aboutRowTextTop'>
                                    <h1>Our Process</h1>
                                </div>
                                <div className='aboutRowTextMid'>
                                    <p>
                                        Total dissolved solids less than 10 parts per million
                                        Pre-filtration: Water from the source (such as a municipal water supply) is first passed through a pre-filter to remove large particles and debris.
                                        Carbon filtration: The pre-filtered water is then passed through activated carbon filters, which remove chlorine and other organic compounds that can affect taste and odor.
                                        Reverse osmosis: The carbon-filtered water is then pressurized and forced through a semi-permeable membrane that separates out impurities and contaminants such as dissolved minerals, heavy metals, and bacteria. The purified water then passes through a post-filter to remove any remaining particles and improve taste.
                                        Storage and distribution: The purified water is then stored in 5-gallon bottles and distributed to customers.
                                        Overall, reverse osmosis is a highly effective method for purifying water and removing impurities.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;