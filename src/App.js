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
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;