import { useEffect } from 'react'
import SwiperCard from './SwiperCard'
import data from '../data/data.json'
import tonesStore, {STEPS} from '../store'
const Swiper = () => {

  const tones = tonesStore((state) => state.tones); // subscribe to tones
  const setTones = tonesStore((state) => state.setTones)
	const swipedCount = tonesStore((state) => state.swipedCount) 
  useEffect(() => {
    setTones(data.tones)
  }, [setTones])
  useEffect(() => {
    if(swipedCount > 0 && swipedCount === tones.length) {
	  tonesStore.setState({ step: STEPS.KOH }) // update the step to KOH
	  const kohTones = tones.filter(tone => tone.selected >= 1);
	  tonesStore.setState({ kohTones }) // set the KOH tones
	  
	}
  }, [swipedCount, tones, tones.length])
  
  return (
    <>
      <div className='grid'>
        {
          tones.length && tones.filter(tone => !tone.swiped).map((tone) => (
            <SwiperCard 
              key={tone.id}
              tone={tone}
              index={tones.indexOf(tone)} 
			/>
          ))
          
          }
      </div>
    </>
  )
}

export default Swiper;