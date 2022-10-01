import { useState } from 'react'
import Moon from '../components/destination/Moon'
import Europa from '../components/destination/Europa'
import Mars from '../components/destination/Mars'
import Titan from '../components/destination/Titan'

export default function Destination() {
  const [destination, setDestination] = useState('moon')

  return (
    <main className='destination'>
      <div className='container flow'>
        <h5>
          <span>01</span>Pick your destination
        </h5>

        <picture>
          <source
            type='image/webp'
            srcSet={`/assets/images/destination/image-${destination}.webp`}
          />
          <img
            src={`/assets/images/destination/image-${destination}.png`}
            alt={destination}
            loading='lazy'
            decoding='async'
          />
        </picture>

        <div className='container-within flow'>
          <ul className='destination__nav'>
            <li>
              <button
                className={`navlink ${destination == 'moon' ? 'active' : ''}`}
                onClick={() => setDestination('moon')}
              >
                Moon
              </button>
            </li>
            <li>
              <button
                className={`navlink ${destination == 'mars' ? 'active' : ''}`}
                onClick={() => setDestination('mars')}
              >
                Mars
              </button>
            </li>
            <li>
              <button
                className={`navlink ${destination == 'europa' ? 'active' : ''}`}
                onClick={() => setDestination('europa')}
              >
                Europa
              </button>
            </li>
            <li>
              <button
                className={`navlink ${destination == 'titan' ? 'active' : ''}`}
                onClick={() => setDestination('titan')}
              >
                Titan
              </button>
            </li>
          </ul>

          <div className='destination__content'>
            <h2>{destination}</h2>
            {destination == 'moon' && <Moon />}
            {destination == 'mars' && <Mars />}
            {destination == 'europa' && <Europa />}
            {destination == 'titan' && <Titan />}
          </div>
        </div>
      </div>
    </main>
  )
}
