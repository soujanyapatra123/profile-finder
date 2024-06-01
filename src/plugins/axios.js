import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://api.github.com/'
})

// Request interceptor
httpClient.interceptors.request.use(
  (config) => {
    console.log('Request interceptor called')
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
httpClient.interceptors.response.use(
  (response) => {
    console.log('Response interceptor called')
    return response
  },
  (error) => {
    console.error('Error in response interceptor:', error)
    return Promise.reject(error)
  }
)

export default httpClient
