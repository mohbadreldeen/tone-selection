import { useEffect, useState } from 'react'
import Card from './components/Card'
import './App.css'
import data from './data/data.json'

import tonesStore from './store'


function App() {

  const tones = tonesStore((state) => state.tones); // subscribe to tones
  const setTones = tonesStore((state) => state.setTones)

  useEffect(() => {
    setTones(data.tones)
  }, [setTones])
  
  return (
    <>
      <div className='grid'>
        {
          tones.length && tones.filter(tone => !tone.swiped).map((tone) => (
            <Card 
              key={tone.id}
              tone={tone}
              index={tones.indexOf(tone)} 
            />
          ))
          
          }
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
