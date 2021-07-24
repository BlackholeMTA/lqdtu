import axiosClient from './axiosClient'

const updateCateApi = {
    updateCate: (id, data) => {
        const url = `/news_categories/${id}`
        console.log(data)
        return axiosClient.put(url, data)
    }
}

export default updateCateApi
