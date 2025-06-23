import { create } from 'zustand'

const tonesStore = create((set) => ({
  	tones: [],
	setTones: (tones) => set({ tones }),
	updateTone: ( updatedTone) =>
	set((state) => ({
		tones: state.tones.map((tone) =>{
			console.log("updatedTone", updatedTone);
			return tone.id === updatedTone.id ? { ...tone, ...updatedTone } : tone
		}
			
		),
	})),
}))

export default tonesStore;