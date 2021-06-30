import axios from 'axios'
import { account } from '../apiUrls'

export default axios.create({
  baseURL: account,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json'
  }
})
