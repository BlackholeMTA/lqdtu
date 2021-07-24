import axiosClient from './axiosClient'

const confirmListPriContractApi = {
    confirmListPriContract: (data) => {
        const url = `/loan-contract/invest-many-loans`
        return axiosClient.put(url, data)
    }
}

export default confirmListPriContractApi