function App() {
	return (
		<div className="min-h-screen flex flex-col text-white">
			<main className="container mx-auto px-6 pt-16 flex-1 text-center">


				<h2 className="text-7xl md:text6xl lg:text-8xl text-primary font-black mt-32 mb-10">Iconic Bot</h2>
				<h1 className="text-4xl md:text-4xl lg:text-6xl mb-10">Launching in Early 2022</h1>

				<p className="text-base md:text-lg lg:text-2xl mb-8">
				multiple-purpose bot that delivers unique utility, moderation, logging and configuration features.
				</p>

				{/*}
         <div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
					943,245 members
				</div>
       */}

	   
        

				<form 
					action="https://www.getrevue.co/profile/iconic/add_subscriber" 
					method="post" 
					id="revue-form"
					name="revue-form"
					target="_blank">

					<div className="flex flex-col md:flex-row justify-center mb-10">
						<input
							placeholder="Your Email Address...."
							type="email"
							name="member[email]"
							id="member_email"
							className="text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0"
						/>
						<input
							type="submit"
							value="Subscribe"
							name="member[subscribe]"
							id="member_submit"
							className="bg-primary md:rounded-tl-none md:rounded-bl-none rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150"
						/>
					</div>

					<div className="opacity-75 italic">
						By subscribing, you agree with Iconic's & Revue's <a target="_blank" href="https://www.getrevue.co/terms" className="hover:opacity-80 duration-150">Terms of Service</a> and <a target="_blank" href="https://www.getrevue.co/privacy" className="hover:opacity-80 duration-150">Privacy Policy</a>.
					</div>

				</form>
			</main>
		</div>	
	)
}

export default App
