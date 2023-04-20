import logo from './images/logo.png'
import design from './images/design.svg'

const App = () => {
	return (
		<div className="App">

			<header>

				<div className='headerWrapper'>

					<div className='banner'>
						<div className="logo">
							<img src={logo} className='logImg' alt='Water cooler icon.'></img>
						</div>
						<div className="storeName">
							<h1>Sparkling Fresh Water</h1>
						</div>
					</div>




					<div className="nav">
						<ul>
							<li><a href='/'>Home</a></li>
							<li><a href='/'>Products</a></li>
							<li><a href='/'>Location</a></li>
							<li><a href='/'>Contact</a></li>
						</ul>
					</div>
				</div>


			</header>

			<div className="relative flex designSection">
				<div className="relative my-4 grid w-full grid-cols-5 grid-rows-3 gap-2">


					{/* <div className='z-20 col-start-1 col-end-3 row-start-1 row-end-1 item-text-1'> */}
						{/* <div className='price leading-tight'><span className="itemPrice">$3.5</span></div><div><span className="itemName">Refill</span></div> */}
					{/* </div> */}
					{/* <div className='z-20 col-start-3 col-end-4 row-start-2 row-end-3 item-text-2'> */}
						{/* <div className='price leading-tight'><span className="itemPrice">$10</span></div><div><span className="itemName">Empty Bottle</span></div> */}
					{/* </div> */}
					{/* <div className='z-20 col-start-3 col-end-4 row-start-3 row-end-4 item-text-3'> */}
						{/* <div className='price leading-tight'><span className="itemPrice">$13.5</span></div><div><span className="itemName">Empty Bottle and Fill</span></div> */}
					{/* </div> */}



					<div className="z-20 col-start-1 col-end-2 row-start-1 row-end-2 rounded-xl bg-transparent ring-8 ring-white"></div>
					<div className="z-20 col-start-2 col-end-3 row-start-1 row-end-2 rounded-xl bg-transparent ring-8 ring-white"></div>
					<div className="z-20 col-start-3 col-end-4 row-start-1 row-end-2 rounded-xl bg-transparent ring-8 ring-white"></div>
					<div className="z-20 col-start-4 col-end-5 row-start-1 row-end-2 rounded-xl bg-transparent ring-8 ring-white"></div>
					<div className="z-20 col-start-5 col-end-6 row-start-1 row-end-2 rounded-xl bg-transparent ring-8 ring-white"></div>

					<div className="z-20 col-start-1 col-end-2 row-start-2 row-end-3 rounded-xl bg-transparent ring-8 ring-white"></div>
					<div className="z-20 col-start-2 col-end-3 row-start-2 row-end-3 rounded-xl bg-transparent ring-8 ring-white"></div>
					<div className="z-20 col-start-3 col-end-4 row-start-2 row-end-3 rounded-xl bg-transparent ring-8 ring-white"></div>
					<div className="z-20 col-start-4 col-end-5 row-start-2 row-end-3 rounded-xl bg-transparent ring-8 ring-white"></div>
					<div className="z-20 col-start-5 col-end-6 row-start-2 row-end-3 rounded-xl bg-transparent ring-8 ring-white"></div>

					<div className="z-20 col-start-1 col-end-2 row-start-3 row-end-4 rounded-xl bg-transparent ring-8 ring-white"></div>
					<div className="z-20 col-start-2 col-end-3 row-start-3 row-end-4 rounded-xl bg-transparent ring-8 ring-white"></div>
					<div className="z-20 col-start-3 col-end-4 row-start-3 row-end-4 rounded-xl bg-transparent ring-8 ring-white"></div>
					<div className="z-20 col-start-4 col-end-5 row-start-3 row-end-4 rounded-xl bg-transparent ring-8 ring-white"></div>
					<div className="z-20 col-start-5 col-end-6 row-start-3 row-end-4 rounded-xl bg-transparent ring-8 ring-white"></div>

					<div className="col-start-1 col-end-6 row-start-1 row-end-2 rounded-1-xl bg-cyan-400"></div>
					{/* <div className="col-start-1 col-end-3 row-start-2 row-end-4 rounded-xl bg-slate-400"></div> */}
					<div className="col-start-1 col-end-6 row-start-2 row-end-3 rounded-l-xl bg-indigo-300"></div>
					<div className="col-start-1 col-end-6 row-start-3 row-end-4 rounded-l-xl bg-lime-600"></div>




					<img className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 scale-125 h-fit" src={design} alt="mascoot" />


				</div>
			</div>


		</div>
	);
}

export default App;
