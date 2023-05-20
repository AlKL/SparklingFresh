import '../styles/about.css';
import tableTop from '../images/tabletop.png'
import fillingWater from '../images/fillingWater.png'
import tanks from '../images/tanks.png'
import store from '../images/store.png'

const About = () => {
    return (
        <>
            <div className='about sectionWrapper'>
                <div className='aboutContainer sectionWrapperWidth'>
                    <div className='rowContainer'>
                        <div className='contentRow'>
                            <div className='aboutRowImageContainer'>
                                <div className='aboutPic0'>
                                    <img src={store} alt='A view of the stores shelves'></img>
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
                                    <img src={tableTop} alt='Counterstop where water is filled and then capped.'></img>
                                </div>
                            </div>
                            <div className='aboutRowTextContainer'>
                                <div className='aboutRowTextTop'>
                                    <h1>This is our process.</h1>
                                </div>
                                <div className='aboutRowTextMid'>
                                    <p>
                                        We aim to serve the best quality water using our filtration process.
                                        Here we use <span className='guide'>reverse osmosis</span> to remove impurities and contaminants from the water.
                                        In our water, the total dissolved solids are less than <span className='guide'>10 parts per million. </span>
                                        After reverse osmosis, the purified water is then stored in 5-gallon bottles and distributed to customers.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='contentRow'>
                            <div className='aboutRowImageContainer'>
                                <div className='aboutPic1'>
                                    <img src={tanks} alt='Two large water filters.'></img>
                                </div>
                            </div>
                            <div className='aboutRowTextContainer'>
                                <div className='aboutRowTextTop'>
                                    <h1>What is reverse osmosis?</h1>
                                </div>
                                <div className='aboutRowTextMid'>
                                    <p>
                                        The reverse osmosis process works by applying pressure to force water molecules through a semipermeable membrane. This membrane has extremely tiny pores that allow water molecules to pass through while blocking larger molecules, such as dissolved minerals, chemicals, and contaminants. As a result, the impurities and contaminants are left behind, and the purified water collects on the other side of the membrane.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='contentRow'>
                            <div className='aboutRowImageContainer'>
                                <div className='aboutPic'>
                                    <img src={fillingWater} alt='A 5 gallon water bottle filled half way being filled.'></img>
                                </div>
                            </div>
                            <div className='aboutRowTextContainer'>
                                <div className='aboutRowTextTop'>
                                    <h1>What is parts per million?</h1>
                                </div>
                                <div className='aboutRowTextMid'>
                                    <p>
                                        Parts per million (PPM) represents the number of parts of a substance per one million parts of water.
                                        What is considered a part is primarily minerals, salts, and other small particles.
                                        Water below 10 PPM is considered extremely pure or dissolved.
                                        The reverse osmosis process ensures that our water has less than 10 PPM total dissolved solids.
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