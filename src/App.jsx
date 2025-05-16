import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <div className="flex justify-center space-x-6 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="h-16 w-16" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold text-blue-600">Hello Tailwind!</h1>


      <div className="bg-gray-800 rounded-lg p-6 text-white mb-6">
        <button 
          onClick={() => setCount(count + 1)} 
          className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 transition"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-300">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
