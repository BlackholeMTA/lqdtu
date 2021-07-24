
const postData = async (apiFunction, setState, data) => {
    try {
        const response = await apiFunction(data)
        setState(response)
        alert("Thêm mới thành công")
    } catch (error) {
        console.log("failed post: ", error)
    }
}

const postGetData = async (apiFunction, setState, data) => {
    try {
        const response = await apiFunction(data)

        setState(response.data[0].data.detailReqInvestment)
    } catch (error) {
        console.log("failed post: ", error)
    }
}
export { postData, postGetData}
    