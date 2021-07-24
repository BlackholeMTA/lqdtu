import axiosClient from './axiosClient'

const updateInfo1Api = {
    updateInfo1: (data) => {
        const url = "/customer"
        return axiosClient.put(url, data)
    }
}

export default updateInfo1Api