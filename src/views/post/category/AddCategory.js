import { Fragment, useState, useEffect } from 'react'
function AddCategory(props) {
    const {onSubmit} = props
    const [valueCategory, setValueCategory] = useState("")
    function handleCategoryChange(e) {
        setValueCategory(e.target.value)
    }
    const handleSubmitForm = (e) => {
        e.preventDefault()
        if (!onSubmit) return
        const formValues = {
            name: valueCategory
        }
        onSubmit(formValues)
      }
    return (
        <>
            <form onSubmit = {handleSubmitForm}>
                <div className = "form-group">
                    <label htmlFor="category">New Category</label>
                    <input type="text" name="category" placeholder ="New Category" value={valueCategory}  onChange = {handleCategoryChange} className = "form-control"/>
                </div>
                <button className ="btn-submit btn btn-success" type="" onSubmit = {handleSubmitForm}>To Post</button>
            </form>
        </>
    )

}

export default AddCategory
