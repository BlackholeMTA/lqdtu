import axios from 'axios'
import queryString from 'qs'
const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers:{
        'content-type':'application/json'
        //  'access_token': localStorage.getItem('access_token')
    },
    paramsSerializer: params => queryString.stringify(params)
})
axiosClient.interceptors.request.use(async (config) => {
    //hanlde tooken...
    // console.log(localStorage.getItem('access_token'))
    // access_token = `${localStorage.getItem('access_token')}`
    // console.log(access_token)
    // const access_token = localStorage.getItem('access_token')
    // config.headers.access_token = access_token
    return config
})
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return {
          status: response.status,
          data: response.data,
          total: response.headers['content-range']
        }
    }
    return response
}, (error) => {
    //hanlde errors
    throw error
})
export default axiosClient
