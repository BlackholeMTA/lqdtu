import axiosClient from './axiosClient'

const deleteCateApi = {
    DeleteCate: (id) => {
        const url = `/news_categories/${id}`
        return axiosClient.delete(url)
    }
}

export default deleteCateApi
