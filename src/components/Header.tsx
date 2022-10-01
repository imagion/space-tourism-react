import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className='header'>
      <div className='container--full'>
        <nav className='main-nav'>
          <NavLink to='/' className='main-nav__logo'>
            <img src='/assets/images/shared/logo.svg' alt='Logo' />
          </NavLink>

          {!open && (
            <button className='main-nav__toggle' onClick={() => setOpen(!open)}>
              <svg xmlns='http://www.w3.org/2000/svg' width='24' height='21'>
                <g fill='#D0D6F9' fillRule='evenodd'>
                  <path d='M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z' />
                </g>
              </svg>
            </button>
          )}
          {open && (
            <button
              className='main-nav__toggle open'
              onClick={() => setOpen(!open)}
            >
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='21'>
                <g fill='#D0D6F9' fillRule='evenodd'>
                  <path d='M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z' />
                  <path d='M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z' />
                </g>
              </svg>
            </button>
          )}

          <div className={`main-nav__menu ${open ? 'open' : ''}`}>
            <ul id='main-nav' className='main-nav__list'>
              <li className='main-nav__item'>
                <NavLink
                  end
                  to='/'
                  className='navlink'
                  onClick={() => setOpen(false)}
                >
                  <span aria-hidden='true'>00</span>Home
                </NavLink>
              </li>

              <li className='main-nav__item'>
                <NavLink
                  to='/destination'
                  className='navlink'
                  onClick={() => setOpen(false)}
                >
                  <span aria-hidden='true'>01</span>Destination
                </NavLink>
              </li>

              <li className='main-nav__item'>
                <NavLink
                  to='/crew'
                  className='navlink'
                  onClick={() => setOpen(false)}
                >
                  <span aria-hidden='true'>02</span>Crew
                </NavLink>
              </li>

              <li className='main-nav__item'>
                <NavLink
                  to='/technology'
                  className='navlink'
                  onClick={() => setOpen(false)}
                >
                  <span aria-hidden='true'>03</span>Technology
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
