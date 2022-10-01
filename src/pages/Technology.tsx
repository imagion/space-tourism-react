import { useState } from 'react'
import LaunchVehicle from '../components/technology/LaunchVehicle'
import SpaceCapsule from '../components/technology/SpaceCapsule'
import Spaceport from '../components/technology/Spaceport'

export default function Technology() {
  const [technology, setTechnology] = useState('launch-vehicle')

  return (
    <main className='technology'>
      <div className='container flow'>
        <h5>
          <span>03</span>Space Launch 101
        </h5>
        <div className='picture-wrap'>
          <picture>
            <source
              media='(max-width: 1199px)'
              srcSet={`/assets/images/technology/image-${technology}-landscape.jpg`}
            />
            <source
              media='(min-width: 1200px)'
              srcSet={`/assets/images/technology/image-${technology}-portrait.jpg`}
            />
            <img
              src={`/assets/images/technology/image-${technology}-landscape.jpg`}
              alt={technology}
              loading='lazy'
              decoding='async'
            />
          </picture>
        </div>

        <div className='content-wrap flow'>
          <div className='technology__controls'>
            <button
              className={technology == 'launch-vehicle' ? 'active' : ''}
              onClick={() => setTechnology('launch-vehicle')}
            >
              1
            </button>
            <button
              className={technology == 'space-capsule' ? 'active' : ''}
              onClick={() => setTechnology('space-capsule')}
            >
              2
            </button>
            <button
              className={technology == 'spaceport' ? 'active' : ''}
              onClick={() => setTechnology('spaceport')}
            >
              3
            </button>
          </div>

          <div className='technology__content flow'>
            {technology == 'launch-vehicle' && <LaunchVehicle />}
            {technology == 'space-capsule' && <SpaceCapsule />}
            {technology == 'spaceport' && <Spaceport />}
          </div>
        </div>
      </div>
    </main>
  )
}
