import axiosClient from './axiosClient'

const fetchPostApi = {
    fetchPost: (id) => {
        const url = `/news/${id}`
        return axiosClient.get(url)
    }
}

export default fetchPostApi
