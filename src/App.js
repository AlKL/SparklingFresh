import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import { Route, Routes } from "react-router-dom"

const App = () => {
	return (
		<div className="App">
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About/>} />
			</Routes>






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
