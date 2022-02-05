import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-backend-david.herokuapp.com/'
})

export default instance;