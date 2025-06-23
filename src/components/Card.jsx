import { useState } from 'react';
import { 
	motion,
	useMotionValue,
	useMotionValueEvent,
	useTransform
} from 'framer-motion'

import tonesStore from '../store'

const Card = ({ tone, index }) => {

	
	const { id, image, name } = tone;
	const tones = tonesStore((state) => state.tones);

	const activeTones = tones.filter(tone => !tone.swiped);

	const updateTone = tonesStore((state) => state.updateTone);
	const x = useMotionValue(0);
	
 	
	useMotionValueEvent(x, "change", (latest) => {
		// console.log(latest)
		// if (latest > 100 || latest < -100) {
		// 	x.set(0); // Reset position if dragged too far
		// }
	});	 
	const isFront = activeTones[activeTones.length - 1].id === id;

	const opacity = useTransform(x, [-100, 0, 100], [0.5, 1, 0.5]);
	const rotateBase = useTransform(x, [-150, 150], [-18, 18]);
	const scale = useTransform(x, [-150,0, 150], [0.8, 1, 0.8]);

	const rotate = useTransform(() => {
		const offset = isFront ? 0 : id % 2 ? -5 : 5;
		return `${rotateBase.get() + offset}deg`;
	});

	console.log(rotate.get());
	function handleDragEnd() {
		if (Math.abs(x.get()) > 100) {
			updateTone({ id, swiped: true, selected: x.get() > 0 ? 1 : 0 });
		}
	}
	const handleDoubleClick = () => {
		updateTone({ id, swiped: true, selected: 2 });
	}
	  return (
		<motion.div
            className='col-start-1 row-start-1 hover:cursor-grab active:cursor-grabbing bg-white shadow-md rounded-lg p-4'
			 onDoubleClick={handleDoubleClick}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ 
				x,
				opacity,
				rotate,
				scale,
				zIndex: index,
				"transition": "transform 0.2s ease-out"
		 }}
		 	onDragEnd={handleDragEnd}
		>
			<img src={`assets/images/${image}`} alt={name} className="w-full h-150  object-cover rounded" draggable={false} style={{ pointerEvents: "none" }}/>
			<h3 className="text-black" draggable={false} style={{ pointerEvents: "none" }}>{name}</h3>
		</motion.div>
	)
}

export default Card;