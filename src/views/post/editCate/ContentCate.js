import {React, useEffect, useState} from 'react'
import edit from './edit.css'
function ContentCate(props) {
  const cate = props.cate
  console.log(cate)
  const {onSubmit} = props
 const [name, setName] = useState()
  const handleSubmitForm = (e) => {
    e.preventDefault()
    if (!onSubmit) return
    const data ={
      name: name
    }
    onSubmit(data)
  }
  function handleChangeCate(e) {
    setName(e.target.value)
  }
  useEffect(() => {
    async function SetValue() {
      setName(cate.name)
    // console.log(valueEditor)
    console.log(name)
    }
    SetValue()

  }, [cate])
  return (
      <>
        <div className= "wp-wrapper">
        <form onSubmit = {handleSubmitForm}>
          <div className= "form-group">
            <label htmlFor="cate">Category</label>
            <input type="text" name="cate" value= {name} onChange = {handleChangeCate} className= "form-control" placeholder ="Name Category"/>
          </div>
          <div className ="text-center">
          <button className ="btn-submit btn btn-success" type="" onSubmit = {handleSubmitForm}>Update</button>
          </div>

        </form>
        </div>
      </>

  )
}
export default ContentCate
