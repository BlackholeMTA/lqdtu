import axiosClient from './axiosClient'

const deletePostApi = {
    DeletePost: (id) => {
        const url = `/news/${id}`
        return axiosClient.delete(url)
    }
}

export default deletePostApi
