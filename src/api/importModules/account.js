import axios from 'axios'
export default axios.create({
  baseURL: 'http://localhost:3000/account',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
})
