import axios from 'axios'

const service = axios.create()
service.interceptors.request.use((config)=>{

    return config
},(error)=>{
    return Promise.reject(error)
});

service.interceptors.response.use((response)=>{
    // console.log(response)
    return response
},(error)=>{
    return Promise.reject(error)
})

export default {
    ...service
}