import axiosClient from './axiosClient'

const createCategoryApi = {
    postCreateCategory: (data) => {
        const url = "/news_categories"
        return axiosClient.post(url, data)
    }
}

export default createCategoryApi