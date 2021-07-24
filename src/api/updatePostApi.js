import axiosClient from './axiosClient'

const updatePostApi = {
    updatePost: (id, data) => {
        const url = `/news/${id}`
        console.log(data)
        return axiosClient.put(url, data)
    }
}

export default updatePostApi
