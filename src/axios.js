import axios from 'axios'

const app = axios.create({
    baseURL: 'https://covid19.mathdro.id/api/'
})

export default app