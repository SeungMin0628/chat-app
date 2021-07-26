import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST,
  timeout: 1000
})

export const SamplesApi = {
  show: () => api.get('/samples')
}
