import axios from 'axios';

export default axios.create({
    baseURL: 'https://gbfs.urbansharing.com/oslobysykkel.no/',
    headers: {'client-identifier' : 'Anthony_Annarino-City-Bikes'}
})