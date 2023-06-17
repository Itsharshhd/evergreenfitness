import React from 'react'
import { plansData } from '../constants'
import { WhiteTick } from '../assets';
import { Link } from 'react-router-dom';

const Plans = () => {
	return (
		<div id="Plans" className='md:-mt-32 py-8 px-0 flex flex-col gap-16 relative'>
			
			{/* blur */}
			{/* <div className='absolute  -left-32 h-full w-1/2 bg-gradient-to-br from-green-200 to-green-800 rounded-full filter blur-xl z-0'></div> */}
			<div className='absolute md:top-0 top-1/2 md:left-1/4 md:right-1/4 md:h-full h-1/4 md:w-1/2 w-full bg-gradient-to-br from-green-200 to-green-800 rounded-b filter blur-xl md:z-0'></div>
			{/* <div className='absolute -right-32 h-full w-4/5 bg-gradient-to-bl from-green-200 to-green-800 rounded-full filter blur-xl z-0'></div> */}

			{/* headings */}
			<div className='flex md:flex-row flex-col md:gap-16 gap-8 bold justify-center text-white uppercase italic md:text-5xl text-3xl md:z-10'>
				<span className='stroke-text'>READY TO START</span>
				<span>YOUR JOURNEY</span>
				<span className='stroke-text'>NOW WITH US</span>
			</div>

			{/* plans card */}
			<div className='flex md:flex-row flex-col items-center justify-center gap-12 md:z-10'>
				{
					plansData.map((plan)=>(
						<div className='plans-grid'>
							<img src={plan.icon} alt="plan-icon" className='w-8 h-8'/>
							<span className='font-bold text-base'>{plan.name}</span>
							<span className='font-bold md:text-5xl text-3xl'>Rs.{plan.price}</span>
							<div className='flex flex-col gap-4'>
								{
									plan.features.map((feature) => (
										<div className='flex items-center gap-4'>
											<img src={WhiteTick} alt="" className='w-4'/>
											<span>{feature}</span>
										</div>
									))
								}
							</div>
							<div>
								<span className='text-xl underline'>See more benefits...</span>
							</div>
							
							<Link to="/join"
							className='bg-green-400 p-2 w-32 font-bold rounded-lg text-black text-center self-center'
							>
								<button>Join Now</button>
							</Link>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Plans;
