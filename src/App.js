import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import { Route, Routes } from "react-router-dom"
import Contact from './components/Contact'

const App = () => {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/SparklingFresh/" element={<Home />} />
				<Route path="/SparklingFresh/about" element={<About />} />
				<Route path="/SparklingFresh/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;