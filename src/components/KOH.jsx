import { useEffect } from 'react';
import tonesStore from './store';
import data from './data/data.json'



const KOH = () => {

	const tones = tonesStore((state) => state.tones); 
	const setTones = tonesStore((state) => state.setTones)

	useEffect(() => {
    	setTones(data.tones)
  	}, [setTones])


}