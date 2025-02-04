import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-gray shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">Mugilan GC</span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">
              Home
            </Link>
            <Link
              to="/about"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              About Me
            </Link>
            <Link
              to="/education"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              Education
            </Link>
            <Link
              to="/experience"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              Experience
            </Link>
            <Link
              to="/projects"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

