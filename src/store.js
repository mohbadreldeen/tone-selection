import { create } from 'zustand'

const STEPS ={
	TONE_SELECTION: 'Tone Selection',
	KOH: 'King of the hill',
	DONE: 'Done'
}
const tonesStore = create((set) => ({
	step: STEPS.TONE_SELECTION,
	setStep: (step) => set({ step }),

	tones: [],
	setTones: (tones) => set({ tones }),
	updateTone: ( updatedTone) =>
		set((state) => ({
			tones: state.tones.map((tone) =>{
				return tone.id === updatedTone.id ? { ...tone, ...updatedTone } : tone
		}),
	})),

	swipedCount: 0,
	incrementSwipedCount: () => set((state) => ({
		swipedCount: state.swipedCount + 1
	})),
	resetSwipedCount: () => set({ swipedCount: 0 }),

	kohTones: [],
	setKohTones: (tones) => set({ kohTones: tones }),
	primaryTone: null,
	secondaryTones: [],
	setPrimaryTone: (tone) => set({ primaryTone: tone }),
	setSecondaryTones: (tones) => set({ secondaryTones: tones }),
	winnerTones: [],
	setWinnerTones: (tones) => set({ winnerTones: tones }),
}))

export default tonesStore;
export { STEPS };