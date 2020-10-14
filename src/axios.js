import axios from "axios"

const instance = axios.create({
    baseURL: "https://whatsapp---backend.herokuapp.com"
})

export default instance