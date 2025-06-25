import { 
	motion,
	useMotionValue,
	useTransform
} from 'framer-motion'
import tonesStore from '../store'
import ToneCard from './ToneCard'
const SwiperCard = ({ tone, index }) => {

	
	const { id } = tone;
	const tones = tonesStore((state) => state.tones);
	const incrementSwipedCount = tonesStore((state) => state.incrementSwipedCount);


	const activeTones = tones.filter(tone => !tone.swiped);

	const updateTone = tonesStore((state) => state.updateTone);
	const x = useMotionValue(0);
	const isFront = activeTones[activeTones.length - 1].id === id;
	const opacity = useTransform(x, [-100, 0, 100], [0.5, 1, 0.5]);
	const scale = useTransform(x, [-150,0, 150], [0.8, 1, 0.8]);
	
	const rotateBase = useTransform(x, [-150, 150], [-18, 18]);
	const rotate = useTransform(() => {
		const offset = isFront ? 0 : id % 2 ? -5 : 5;
		return `${rotateBase.get() + offset}deg`;
	});


	function handleDragEnd() {
		if (Math.abs(x.get()) > 100) {
			updateTone({ id, swiped: true, selected: x.get() > 0 ? 1 : 0 });
		}
		incrementSwipedCount()
	}
	const handleDoubleClick = () => {
		updateTone({ id, swiped: true, selected: 2 });
		incrementSwipedCount()
	}
	  return (
		<motion.div
            className='col-start-1 row-start-1 hover:cursor-grab active:cursor-grabbing '
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
			<ToneCard tone={tone} />
		</motion.div>
	)
}

export default SwiperCard;