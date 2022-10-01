import { useState } from 'react'
import DouglasHurley from '../components/crew/DouglasHurley'
import MarkShuttleworth from '../components/crew/MarkShuttleworth'
import VictorGlover from '../components/crew/VictorGlover'
import AnoushehAnsari from '../components/crew/AnoushehAnsari'

export default function Crew() {
  const [crew, setCrew] = useState('douglas-hurley')

  return (
    <main className='crew'>
      <div className='container flow'>
        <h5>
          <span>02</span>Meet your crew
        </h5>

        <div className='picture-wrap'>
          <picture>
            <source
              type='image/webp'
              srcSet={`/assets/images/crew/image-${crew}.webp`}
            />
            <img
              src={`/assets/images/crew/image-${crew}.png`}
              alt={crew}
              loading='lazy'
              decoding='async'
            />
          </picture>
        </div>

        <div className='crew__controls'>
          <button
            className={crew == 'douglas-hurley' ? 'active' : ''}
            onClick={() => setCrew('douglas-hurley')}
          ></button>
          <button
            className={crew == 'mark-shuttleworth' ? 'active' : ''}
            onClick={() => setCrew('mark-shuttleworth')}
          ></button>
          <button
            className={crew == 'victor-glover' ? 'active' : ''}
            onClick={() => setCrew('victor-glover')}
          ></button>
          <button
            className={crew == 'anousheh-ansari' ? 'active' : ''}
            onClick={() => setCrew('anousheh-ansari')}
          ></button>
        </div>

        <div className='crew__content flow'>
          {crew == 'douglas-hurley' && <DouglasHurley />}
          {crew == 'mark-shuttleworth' && <MarkShuttleworth />}
          {crew == 'victor-glover' && <VictorGlover />}
          {crew == 'anousheh-ansari' && <AnoushehAnsari />}
        </div>
      </div>
    </main>
  )
}
