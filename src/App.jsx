import './App.css'
import Swiper from './components/Swiper'
import KOH from './components/KOH'
import Results from './components/Results'
import tonesStore, { STEPS } from './store'
import SectionTitle from './components/SectionTitle'
function App() {
 const step = tonesStore((state) => state.step);
  return (
    <>
    {
      step === STEPS.TONE_SELECTION && (
        <>
          <SectionTitle>Tone Selector</SectionTitle>
          <Swiper />    
        </>
      )
    }
    {
      step === STEPS.KOH && 
      (
        <>
          <SectionTitle>King of the Hill</SectionTitle>
          <KOH />
        </>
      )
      
    }
    {
      step === STEPS.DONE && 
      (
        <>
          <SectionTitle>Done!, Your prefrences</SectionTitle>
          <Results />
        </>
      )
    }
    
    </>
  )
}
export default App
