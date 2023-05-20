import '../styles/otherProducts.css';

const Card = ({ imgSrc, title, price, alt }) => {

    return (
        <>
            <div className='opCard'>
                <div className='opCardImg'>
                    <img src={imgSrc} alt={alt}></img></div>


                <div className='opCardPrice'>
                    <h2>{title}</h2>
                    <h1>{price}</h1>

                </div>




            </div>
        </>
    )
}

export default Card;