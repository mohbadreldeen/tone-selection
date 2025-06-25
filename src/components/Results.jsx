import tonesStore, {STEPS} from '../store';

import Card from './ToneCard';

import { startOver } from '../utils';
const Results = () => {

	const winnerTones = tonesStore((state) => state.winnerTones);
 	return (
		<div className="results">

			<div className="results-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '16px', marginBottom: '24px' }}>
				<div className="text-center" style={{ gridColumn: '1 / span 2' }}>
					Primary Style
				</div>
				{winnerTones[winnerTones.length - 1] && (
					<div style={{ gridColumn: '1 / span 2' }}>
						<Card tone={winnerTones[winnerTones.length - 1]} />
					</div>
				)}
				<div className="text-center" style={{ gridColumn: '1 / span 2' }}>
					Secondary Style
				</div>
				{winnerTones[winnerTones.length - 2] && (
					<div style={{ gridColumn: '1 / span 1' }}>
						<Card tone={winnerTones[winnerTones.length - 2]} />
					</div>
				)}
				{winnerTones[winnerTones.length - 3] && (
					<div style={{ gridColumn: '2 / span 1' }}>
						<Card tone={winnerTones[winnerTones.length - 3]} />
					</div>
				)}

				<button onClick={startOver} style={{ gridColumn: '1 / span 2' }} className="bg-white hover:bg-gray-300 cursor-pointer rounded text-black p-2 font-display">Start Over</button>
			</div>
			 
			
			
			
		
		
		</div>
	);
}

export default Results;