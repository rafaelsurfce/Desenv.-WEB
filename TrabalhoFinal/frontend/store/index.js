import axios from 'axios';



const instance = axios.create({
    baseURL: 'http://localhost:2222/login',
    timeout: 1000,
    headers: {
        Accept: "application/json",
        "Content-type": "application/json"
    }

});


export default instance;