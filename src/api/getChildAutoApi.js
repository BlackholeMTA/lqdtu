import axiosClient from './axiosClient'

const getChildAutoApi = {
    postChildAuto: (data) => {
        const url = "/request-investment/detail"
        return axiosClient.post(url, data)
    }
}

export default getChildAutoApi