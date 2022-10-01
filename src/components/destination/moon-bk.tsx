export default function Moon() {
  return (
    <div className='container flow'>
      <h5>
        <span>01</span>Pick your destination
      </h5>

      <picture>
        <source
          type='image/webp'
          srcSet='/src/assets/images/destination/image-moon.webp'
        />
        <img
          src='/src/assets/images/destination/image-moon.png'
          alt='Moon'
          loading='lazy'
          decoding='async'
        />
      </picture>

      <div className='container-within flow'>
        <ul className='destination__nav'>
          <li>
            <a href='#' className='navlink active'>
              Moon
            </a>
          </li>
          <li>
            <a href='#' className='navlink'>
              Mars
            </a>
          </li>
          <li>
            <a href='#' className='navlink'>
              Europa
            </a>
          </li>
          <li>
            <a href='#' className='navlink'>
              Titan
            </a>
          </li>
        </ul>

        <div className='destination__content'>
          <h2>Moon</h2>
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className='destination__distance'>
            <div>
              <p className='subheader-2'>Avg. Distance</p>
              <p className='subheader-1'>384,400 km</p>
            </div>
            <div>
              <p className='subheader-2'>Est. travel time</p>
              <p className='subheader-1'>3 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
