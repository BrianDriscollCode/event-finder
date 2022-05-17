import axios from 'axios'

const KEY = 's0jibX3vITg9AR1u45vTWMQfDkzPR3pp'

export default axios.create({
    baseURL: 'https://app.ticketmaster.com/discovery/v2',
    params: {
        apikey: KEY,    
    }
})