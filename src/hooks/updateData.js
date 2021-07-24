const updateDataById = async (apiFunction, setState, data, id) => {
    try {
        const response = await apiFunction(id, data)
        setState(response)
        alert("Cập nhật thành công")
    } catch (error) {
        console.log("failed update :", error)
    }
}

const updateData = async (apiFunction, setState, data) => {
    try {
        const response = await apiFunction(data)
        setState(response)
        alert("Cập nhật thành công")
    } catch (error) {
        console.log("failed update :", error)
        alert(error.response.data.message)
    }
}
export {
    updateDataById, updateData
} 