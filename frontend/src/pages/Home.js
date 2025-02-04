import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Mugilan GC</h1>
        <h2 className="text-3xl text-gray-600 mb-8">Software Developer</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          A brief introduction about yourself. Highlight your key skills and what makes you unique in your field.
        </p>
        <div className="space-x-4">
          <Link
            to="/about"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Click here to know more
          </Link>
          <Link
            to="/contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Any queries? Contact me
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home

