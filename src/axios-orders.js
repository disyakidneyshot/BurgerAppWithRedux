import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-burger-app-7195c.firebaseio.com/'
})

export default instance