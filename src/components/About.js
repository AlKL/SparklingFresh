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
                                    <h1>Welcome to Sparkling Fresh Water!</h1>
                                </div>
                                <div className='aboutRowTextMid'>
                                    <p>
                                        We hope you've enjoyed our service and water.
                                        As a local business, we take pride in supporting the water needs of our community and building long-lasting relationships with our customers.
                                        We have been serving the community for over 18 years and would like to thank all of those who have supported us!


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
                                    <h1>This is our process.</h1>
                                </div>
                                <div className='aboutRowTextMid'>
                                    <p>

                                        We aim to serve the best quality water using our filtration process.
                                        Here we use reverse osmosis to remove impurities and contaminants from the water.
                                        In our water, the total dissolved solids are less than 10 parts per million.
                                        After reverse osmosis, the purified water is then stored in 5-gallon bottles and distributed to customers.












                                        {/* Welcome to Sparkling Fresh Water! Since 2005, we have been dedicated to providing our customers with the finest quality water. We take pride in our commitment to excellence and strive to exceed your expectations with every sip.
                                        As a family-owned business, we understand the importance of offering the best for our customers. Our journey began over 18 years ago, driven by the desire to deliver purified water that not only quenches your thirst but also promotes your well-being. Over the years, we have continuously improved our processes and invested in cutting-edge technology to ensure that our water meets the highest standards of purity.
                                        At Sparkling Fresh Water, we believe that water is more than just a beverage; it is an essential element for a healthy lifestyle. That's why we go the extra mile to source water from pristine natural sources, carefully treating and purifying it to remove impurities while preserving its natural minerals and refreshing taste. Our state-of-the-art facilities and rigorous quality control procedures guarantee that each drop of water that reaches your glass is of the utmost quality.
                                        We value our customers and take their satisfaction seriously. Our friendly and knowledgeable staff is always ready to assist you and answer any questions you may have. We strive to create a personalized experience, ensuring that your specific water needs are met and that you have the best drinking water experience possible.
                                        Whether you're at home, in the office, or on the go, Sparkling Fresh Water is here to hydrate and invigorate you. Join the countless individuals and businesses who have made us their trusted source for premium water. Discover the difference that our dedication to quality and customer service can make in your life.
                                        Thank you for choosing Sparkling Fresh Water. We look forward to serving you and being a part of your healthy hydration journey! */}
                                    </p>
                                </div>
                            </div>
                        </div>




















                        <div className='contentRow'>
                            <div className='aboutRowImageContainer'>
                                <div className='aboutPic1'>
                                    <img src={tanks}></img>
                                </div>
                            </div>
                            <div className='aboutRowTextContainer'>
                                <div className='aboutRowTextTop'>
                                    <h1>What is reverse osmosis?</h1>
                                </div>
                                <div className='aboutRowTextMid'>
                                    <p>

                                        The reverse osmosis process works by applying pressure to force water molecules through a semipermeable membrane. This membrane has extremely tiny pores that allow water molecules to pass through while blocking larger molecules, such as dissolved minerals, chemicals, and contaminants. As a result, the impurities and contaminants are left behind, and the purified water collects on the other side of the membrane.

                                        {/* The carbon-filtered water is then pressurized and forced through a semi-permeable membrane that separates out impurities and contaminants such as dissolved minerals, heavy metals, and bacteria. The purified water then passes through a post-filter to remove any remaining particles and improve taste. */}

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