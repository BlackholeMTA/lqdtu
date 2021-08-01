import {React, useEffect, useState} from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document'
import add from './add.css'
import Thumb from "src/utility/Thumb"
function ContentPost(props) {
  const post = props.post
  const {onSubmit} = props
  console.log(post)
  const [valueEditor, setValueEditor] = useState("")
  const [valueTitle, setValueTitle] = useState("")
  const [valueCategory, setValueCategory] = useState(1)
  const [listCategory, setListCategory] = useState([])
  const [valueAvatar, setValueAvatar] = useState()
  const [valueAuthor, setValueAuthor] = useState()
  const [checkImage, setCheckImage] = useState("false")
  const [valueDate, setValueDate] = useState()
  const [valueDes, setValueDes] = useState("")
  const [valueStatus, setValueStatus] = useState()
  function handleChangeTitle(e) {
    setValueTitle(e.target.value)
  }
  const uploadFile = (e) => {
    setValueAvatar(e.target.files[0])
    setCheckImage("true")
  }
  function handleChangeCategory(e) {
    setValueCategory(e.target.value)
  }
  function handleChangeDate(e) {
    setValueDate(e.target.value)
    console.log(e.target.value)
  }
  function handleChangeDes(e) {
    setValueDes(e.target.value)
  }
  function handleChangeAuthor(e) {
    setValueAuthor(e.target.value)
  }
  function handleChangeStatus(e) {
    setValueStatus(e.target.value)
  }
  const handleSubmitForm = (e) => {
    e.preventDefault()
    if (!onSubmit) return
    let data = new FormData()
    data.append("unit_id", 1)
    data.append("category_id", valueCategory)
    data.append("title", valueTitle)
      data.append("image", valueAvatar)
    data.append("content", valueEditor)
    data.append("author", valueAuthor)
    data.append("description", valueDes)
    data.append("date_created", valueDate)
    data.append("status", valueStatus)
    onSubmit(data)
  }
  const url_file = process.env.URL_FILE
  useEffect(() => {
    async function fetchListCategory() {
      try {
        const url = process.env.REACT_APP_API_URL
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        }
      const requestUrl = `${url}/news_categories`
      const response = await fetch(requestUrl, requestOptions)
      const responseJSON = await response.json()
       console.log(responseJSON)
      setListCategory(responseJSON)
      } catch (error) {
        console.log(error)
      }
    }
    fetchListCategory()
  }, [])
  useEffect(() => {
    async function SetValue() {
      console.log(post)

    setValueEditor(post.content)
    setValueAvatar(post.image_URL)
    setValueCategory(post.category_id)
    setValueTitle(post.title)
    // const temp_date = post.date_created.substr(0,10)
    // setValueDate(temp_date)
    setValueAuthor(post.author)
    setValueDate(post.date_created)
    setValueDes(post.description)
    setValueStatus(post.status)
    // console.log(valueEditor)
    }
    SetValue()

  }, [post])
  return (
      <>
        <div className= "wp-wrapper">
        <form onSubmit = {handleSubmitForm}>
          <CRow>
            <CCol md= '8'>
            <div className= "form-group">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" value= {valueTitle} onChange = {handleChangeTitle} className= "form-control" placeholder ="Add title"/>
          </div>
          <div className= "form-group">
            <label htmlFor="description">Description</label>
            <textarea name = "description" rows="6" cols="100" className = "form-control text-left" value = {valueDes} onChange ={handleChangeDes} placeholder="Add description" ></textarea>
          </div>
          <div className = "form-group">
              <label htmlFor="content">Content</label>
              { valueEditor && <CKEditor
                    onReady={ editor => {
                        console.log( 'Editor is ready to use!', editor );

                        // Insert the toolbar before the editable area.
                        editor.ui.getEditableElement().parentElement.insertBefore(
                            editor.ui.view.toolbar.element,
                            editor.ui.getEditableElement()
                        );
                        // this.editor = editor;
                    } }
                    onError={ ( { willEditorRestart } ) => {
                        // If the editor is restarted, the toolbar element will be created once again.
                        // The `onReady` callback will be called again and the new toolbar will be added.
                        // This is why you need to remove the older toolbar.
                        if ( willEditorRestart ) {
                            this.editor.ui.view.toolbar.element.remove();
                        }
                    } }
                    onChange={ ( event, editor ) => {
                      const data = editor.getData();
                      console.log( { event, editor, data } );
                      // setValueEditor(ReactHtmlParser(editor.getData()))
                      setValueEditor(data)
                  } }
                    editor={ DecoupledEditor }
                    data= {valueEditor}
                    // config={ /* the editor configuration */ }
                    config = {
                        {
                          viewportTopOffset: 100,
                          shouldNotGroupWhenFull: true,
                          ckfinder: {
                            uploadUrl: 'http://api.khcn.xyz/upload'
                          }
                        }
                        }
                />}
            </div>
            </CCol>
            <CCol md= '4'>
            <div className="form-group">
            {/* <button style = {{display: 'inherit'}} className ="btn-save-test btn btn-success" type="" onSubmit = {handleSubmitTestForm}>Save draft</button> */}
            <a style = {{display: 'inherit'}} href="#">Preview</a>
            <label for="status">Status</label>
            <select name ="status" id="status" className="form-control" value = {valueStatus} onChange= {handleChangeStatus}>
            <option value = "1" >Publish</option>
            <option value = "0" >Unpublish</option>
            </select>
            <label htmlFor="time">Date Submitted</label>
            <input type="date" name="time" value={valueDate} onChange = {handleChangeDate}  className="form-control mb-2" />
            <button className ="btn-submit btn btn-success" type="" onSubmit = {handleSubmitForm}>Update</button>
            </div>
            <div className="form-group">
           <label htmlFor="category">Category</label>
            <select name="category" id="category" className="form-control" value = {valueCategory} onChange = {handleChangeCategory} >
              {
                listCategory.map(item => (
                  <option value = {`${item.id}`} >{item.name}</option>
                ))
              }
             </select>
           </div>
           <div className = "form-group">
           <label htmlFor="author">Author</label>
            <input type="text" name="author" value={valueAuthor} onChange = {handleChangeAuthor} placeholder = "Add author" className="form-control mb-2" />
           </div>
            <div className= "form-group">
              <label htmlFor="avatar" style ={{display: 'inherit'}}>Avatar</label>

              {
                checkImage === "true" ?
                <Thumb file = {valueAvatar}></Thumb>
                :
                <img className ="mb-2 img-thumbnail" style ={{height: '200px'}} src={`https://api.khcn.xyz/${valueAvatar}`} alt=""/>
              }
              <input  type="file" name="avatar"  onChange = {uploadFile} className="form-control"/>
            </div>
            </CCol>
          </CRow>
            {/* <textarea name = "editor" rows="6" cols="100"></textarea> */}
          <div className ="text-center">

          </div>

        </form>
        </div>
      </>

  )
}
export default ContentPost
