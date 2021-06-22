import axios from 'axios'

const api = axios.create({
  baseURL: 'http://0.0.0.0:3000',
  timeout: 1000
})

export const SamplesApi = {
  show: () => api.get('/samples')
}
