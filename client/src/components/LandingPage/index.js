import React from "react";
import './landingPage.styles.css'

const LandingPage = () => {
	return (
		<div className="min-h-screen flex flex-col text-white landing">
			<main className="container mx-auto px-6 pt-16 flex-1 text-center">
				<h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
					Welcome To
				</h2>
				<h1 className="text-3xl md:text-6xl lg:text-8xl font-black uppercase">
					Food Wallet
				</h1>
				<div className="text-lg md:text-2xl lg:3xl py-2 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-green-900 bg-opacity-40 w-fit mx-auto mb-8 rounded-full">
				Do you really know how many calories you need to meet your fitness goals?

        </div>
				<div className="text-lg md:text-2xl lg:3xl py-2 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-green-900 bg-opacity-40 w-fit mx-auto mb-8 rounded-full">
				What if you could value your food in the same way as your investments?

        </div>

        <p className="text-base md:text-lg lg:text-2xl mb-8 bg-green-900 text- bg-opacity-60 w-fit mx-auto rounded-full">Reach your fitness goals quicker with real time quantitative data.</p>
			</main>
			<footer className="container mx-auto p-6">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<p className="mb-4 md:mb-0 md:text-xl">Made with 💖 by Robbie </p>

					{/* <div className="flex -mx-6">
						<a href="#" className=" mx-3 hover:opacity-80 duration-150">
							About us
						</a>{" "}
						|
						<a href="#" className="mx-3 hover:opacity-80 duration-150">
							Privacy
						</a>{" "}
						|
						<a href="#" className="mx-3 hover:opacity-80 duration-150">
							Contact
						</a> */}
					{/* </div> */}
				</div>
			</footer>
		</div>
  )};

export default LandingPage;
