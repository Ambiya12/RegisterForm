/* eslint-disable no-unused-vars */
import {useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const ServicesContext = createContext(null)

export const ServicesController = ({children}) => {
const [services, setServices] = useState([])
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

  return (
    <ServicesContext.Provider value={[services, setServices]}>
      {!loading && children}
    </ServicesContext.Provider>
  )

}