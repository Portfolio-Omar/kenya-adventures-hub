import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-green-600">
              Kenya Adventures Hub
            </Link>
          </div>

          {/* Desktop Navigation - Right Aligned */}
          <div className="hidden md:flex md:items-center md:ml-auto">
            <div className="flex space-x-4">
              <Link to="/" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md">
                Home
              </Link>
              <Link to="/tours" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md">
                Tours
              </Link>
              <Link to="/scheduled-trips" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md">
                Scheduled Trips
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/tours"
              className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md"
              onClick={toggleMenu}
            >
              Tours
            </Link>
            <Link
              to="/scheduled-trips"
              className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md"
              onClick={toggleMenu}
            >
              Scheduled Trips
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar