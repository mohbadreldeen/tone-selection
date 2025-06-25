import tonesStore,{STEPS} from './store'
const startOver = () => {
  tonesStore.setState({ swipedCount: 0 }); // Reset swiped count
  tonesStore.setState({ winnerTones: [] }); // Reset winner tones
  tonesStore.setState({ kohTones: [] }); // Reset KOH tones
  tonesStore.setState({ tones: [] }); // Reset tones
  tonesStore.setState({ step: STEPS.TONE_SELECTION }); // Reset step to TONE_SELECTION
}

export { startOver };