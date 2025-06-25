import { useEffect, useState } from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import tonesStore, {STEPS} from '../store';
import KOHCard from './KOHCard';
 


const KOH = () => {

	const step = tonesStore((state) => state.step);
	const setStep = tonesStore((state) => state.setStep);
	const tones = tonesStore((state) => state.kohTones); 
	const setKohTones = tonesStore((state) => state.setKohTones);
	const [currentContenders, setCurrentContenders] = useState([]);
	const winnerTones = tonesStore((state) => state.winnerTones);
	const setWinnerTones = tonesStore((state) => state.setWinnerTones);

	const [animating, setAnimating] = useState(false);
	const [animatingId, setAnimatingID] = useState(0);
	const [loserTone, setLoserTone] = useState(null);

	const fadeOut = (tone) => {
		const loserTone = currentContenders.filter((t) => t.id !== tone.id)[0];
		setAnimating(true);
		setAnimatingID(loserTone.id);
		setLoserTone(loserTone);
	}
	const handelSelection = (tone) => {
		setAnimating(false);
		setAnimatingID(0);
		if (tones.length === 0) {
			const winnerIndex = currentContenders.findIndex(t => t.id !== loserTone.id);
			setWinnerTones([...winnerTones, ...[loserTone, currentContenders[winnerIndex]]]);
			setStep(STEPS.DONE);
		}else{
			setWinnerTones([...winnerTones, loserTone]);
			const loserIndex = currentContenders.findIndex(t => t.id === loserTone.id);
			const newContenders = [...currentContenders];
			newContenders[loserIndex] = tones[0];
			setCurrentContenders([...newContenders]);
			setKohTones([...tones.slice(1)]);
			 
		}
	}
	useEffect(() => {
		setCurrentContenders([...tones.slice(0, 2)]);
		setKohTones([...tones.slice(2)]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
 
	
 	return (
		<>
			<div className='grid gap-5'>
			 
				{
					currentContenders.length === 2 && (
						<>
							<h1 className='text-2xl text-center'>Select your favorite tone</h1>
							 
							{currentContenders.map((tone) => (

								  < >
									{animating && animatingId === tone.id && (
										<motion.div
											key={tone.id}
											initial={{ opacity: 1, x: 0 }}
											animate={{ opacity: 0, x: -100 }}
											transition={{ duration: 0.4 }}
											style={{
												 
											}}
											onAnimationComplete={() => {
												handelSelection(tone)
											}}
										>
										<KOHCard 
											key={tone.id}
											tone={tone}
										/>
										</motion.div>	
									)}
									{ animatingId !== tone.id && (
										<motion.div
											initial={{ opacity: 0, x: -100 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.4 }}
										>
											<KOHCard
												onClick={(tone) => {
													fadeOut(tone);
												}}
												key={tone.id}
												tone={tone}
											/>
										</motion.div>
									 
									)}
								</>
							))}
							 
						</>
						
					)
				}
				
				 
			</div>
		</>
	);

}

export default KOH;