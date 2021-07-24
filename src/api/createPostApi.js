import axiosClient from './axiosClient'

const createPostApi = {
    postCreatePost: (data) => {
        const url = "/news"
        console.log(data)
        return axiosClient.post(url, data)
    }
}

export default createPostApi
