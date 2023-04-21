import design from './images/design.svg'
import Header from './components/Header'

const App = () => {
	return (
		<div className="App">
			<Header/>





			<div className="sectionWrapper hero qh">
				<div className="heroContainer sectionWrapperWidth">
					<div className="heroLeftContainer">
						{/* <p>Water that is</p> */}
						{/* <p>Local</p> */}
						{/* <p>Affordable</p> */}
						{/* <p>Trustworthy</p> */}
						{/* <p>Pure drinking water filtered by reverse osmosis</p> */}
						{/* <p>Total dissolved solids less than 10 parts per million</p> */}
						<div className='topText'>
							<p>Buy bottles and come back for refills!</p>
						</div>
						<div className='midText'>
							<p>Get hydrated with your friendly neighbourhood water supplier</p>
						</div>
						<div className='bottomText'>
							<p>Local, affordable & water you can trust!</p>
						</div>
					</div>

					<div className="heroRightContainer">
						<div className="heroImageContainer">
							<img className='heroImage' src={design}></img>
						</div>
					</div>
				</div>
			</div>





			<div className="sectionWrapper products">
				<div className='cardContainer sectionWrapperWidth'>
					<div className='productCard'>
						<p>First time?</p>
						<p>Buy a bottle and water for $14</p>
					</div>
					<div className='productCard'>
						<p>Next time just bring the bottle!</p>
						<p>You can bring the bottle back and get a full refill for $4</p>
					</div>
					<div className='productCard'>
						<p>Just want an empty bottle?</p>
						<p>Only $10 and you can use it to fill water whenever you want</p>
					</div>
				</div>
			</div>

			<div className='sectionWrapper'>
				<div className='sectionWrapperWidth'>
					<h1>Why Choose Sparkling Fresh?</h1>
				</div>
			</div>

			<div className='sectionWrapper wcsfBody'>
				<div className='sectionWrapperWidth'>
					<div className='wcsfTabContainer'>

					</div>
				</div>
			</div>

			<div className='sectionWrapper'>
				<div className='sectionWrapperWidth'>
					<h1>Shop for other products too!</h1>
				</div>
			</div>

			<div className='sectionWrapper'>
				<div className='sectionWrapperWidth'>
					<div className='otherProductsContainer'>

					</div>
				</div>
			</div>

			<div className='sectionWrapper location'>
				<div className='sectionWrapperWidth'>
					<div className=''>
						<p>Map map backpack</p>
					</div>
				</div>
			</div>

			<div className='sectionWrapper questionForm'>
				<div className='sectionWrapperWidth'>
					<div className=''>
						<p>Ask us anything [button]</p>
					</div>
				</div>
			</div>

			<div className='sectionWrapper footer'>
				<div className='sectionWrapperWidth'>
					<div className=''>
						<p>Footer</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
