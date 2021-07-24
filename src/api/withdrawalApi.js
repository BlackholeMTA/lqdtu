import axiosClient from './axiosClient'

const withdrawalApi = {
    postWithdrawal: (data) => {
        const url = "/request-get-money"
        return axiosClient.post(url, data)
    }
}

export default withdrawalApi