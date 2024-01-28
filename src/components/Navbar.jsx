import { useState } from 'react'
import Logo from '../assets/logo.png'
import '../components/Styles.css'
import { Link, animateScroll as scroll } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
const Navbar = () => {
    const [isNavOpen, setNavOpen] = useState(false);

  return (
    <>
            <nav
        style={{
          backgroundColor: '#C6FCED',
          width: '100%',
          position: 'fixed', // Make the navbar fixed
          top: 0,             // Stick it to the top
          zIndex: 500        // Set a high z-index to ensure it's above other elements
          
        }}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <RouterLink to="/logIn">
            <img
              src={Logo}
              className="h-20 w-auto sm:h-20"
              alt="Flowbite Logo"
            />
          </RouterLink>
          <button
            onClick={() => setNavOpen(!isNavOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-expanded={isNavOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${
              isNavOpen ? 'block' : 'hidden'
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
        <RouterLink to="/"
              // match the id of your target section
            spy={true}
            smooth={true}
            offset={-5}  // adjust the offset as needed
            duration={500}
          >
        <a
            style={{ color: '#4190C3'  }}
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Home
          </a>
         </RouterLink>
        </li>
        <Link
            to="services"  // match the id of your target section
            spy={true}
            smooth={true}
            offset={-5}  // adjust the offset as needed
            duration={500}
          >
            <a
              style={{ color: '#4190C3' }}
              href="#"
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Our Services
            </a>
          </Link>
        <li>
        <Link
            to="schedule"  // match the id of your target section
            spy={true}
            smooth={true}
            offset={-5}  // adjust the offset as needed
            duration={500}
          >
        <a
            style={{ color: '#4190C3'  }}
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Schedule
          </a>
        </Link>
        </li>
        <li>
        <Link
            to="location"  // match the id of your target section
            spy={true}
            smooth={true}
            offset={-5}  // adjust the offset as needed
            duration={500}
          >
          <a
            style={{ color: '#4190C3'  }}
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Location
          </a>
          </Link>
        </li>
        <li>
        <Link
            to="about"  // match the id of your target section
            spy={true}
            smooth={true}
            offset={-5}  // adjust the offset as needed
            duration={500}
          >
          <a
            style={{ color: '#4190C3'  }}
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            About
          </a>
          </Link>
        </li>
        <li>
        <Link
            to="appointment"  // match the id of your target section
            spy={true}
            smooth={true}
            offset={-5}  // adjust the offset as needed
            duration={500}
          >
          <a
            style={{ color: '#4190C3'  }}
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Appointment
          </a>
          </Link>
        </li>

      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar