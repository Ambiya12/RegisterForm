import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  const [services, setServices] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchServices = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/service/`)
      if (response.status === 200) {
        setServices(response.data)
      }
    } catch (err) {
      console.error(err)
      setError('Failed to fetch services')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchServices()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline mb-6">Welcome to the event APP</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services && services.map((service) => (
          <div
            key={service._id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <span
                className={`px-2 py-1 text-sm font-medium rounded ${
                  service.availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {service.availability ? 'Available' : 'Not Available'}
              </span>
            </div>
            <p className="text-gray-700 mb-2">{service.description}</p>
            <p className="text-gray-800 font-medium mb-1">Price: ${service.price}</p>
            <p className="text-gray-800 mb-1">Category: {service.category}</p>
            <p className="text-gray-800 mb-1">Address: {service.address}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
