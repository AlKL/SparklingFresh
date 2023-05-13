import '../styles/otherProducts.css';
import pumpBox from '../images/pumpBox.png'
import cupsBox from '../images/cupsBox.png'
import dispenseBox from '../images/dispenseBox.png'
import key from '../images/key.png'
import Card from './Card'

const OtherProducts = () => {
    return (
        <>
            <div className='otherProductsTitle sectionWrapper'>
                <div className='sectionWrapperWidth'>
                    <h1>Shop our other products too!</h1>
                </div>
            </div>

            <div className='sectionWrapper'>
                <div className='sectionWrapperWidth'>
                    <div className='opCardContainer'>
                        <Card imgSrc={pumpBox} title='Bottle hand-pump' price='$20 /ea' />
                        <Card imgSrc={cupsBox} title='Cone water cups' price='$8 /box' />
                        <Card imgSrc={dispenseBox} title='Cooler cup dispenser' price='$28 /ea' />
                        <Card imgSrc={key} title='Key cutting' price='$5 /ea' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtherProducts;