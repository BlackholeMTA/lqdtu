import {React, useEffect, useState} from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import add from './add.css'
import Thumb from "src/utility/Thumb"
function ContentPost(props) {
  const post = props.post
  const {onSubmit} = props
  console.log(post)
  const [valueEditor, setValueEditor] = useState("<p></p>")
  const [valueTitle, setValueTitle] = useState("")
  const [valueCategory, setValueCategory] = useState(1)
  const [listCategory, setListCategory] = useState([])
  const [valueAvatar, setValueAvatar] = useState()
  const [checkImage, setCheckImage] = useState("false")
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
  const handleSubmitForm = (e) => {
    e.preventDefault()
    if (!onSubmit) return
    let data = new FormData()
    data.append("unit_id", 1)
    data.append("category_id", valueCategory)
    data.append("title", valueTitle)
      data.append("image", valueAvatar)
    data.append("content", valueEditor)
    data.append("author", 'BlackHole')
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
    // console.log(valueEditor)
    }
    SetValue()

  }, [post])
  return (
      <>
        <div className= "wp-wrapper">
        <form onSubmit = {handleSubmitForm}>
          <div className= "form-group">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" value= {valueTitle} onChange = {handleChangeTitle} className= "form-control" placeholder ="Add title"/>
          </div>
          <div className="form-group">
           <label htmlFor="category">Category</label>
            <select name="category" id="category" class="form-control" value = {valueCategory} onChange = {handleChangeCategory} >
              {
                listCategory.map(item => (
                  <option value = {`${item.id}`} >{item.name}</option>
                ))
              }
             </select>
           </div>
            <div className= "form-group">
              <label htmlFor="avatar" style ={{display: 'inherit'}}>Avatar</label>
              {
                checkImage === "true" ?
                <Thumb file = {valueAvatar}></Thumb>
                : <> </>
              }
              {
                post.image_URL !== "" && checkImage === "true" ? <></>
                :<img className ="mb-2 img-thumbnail" style ={{height: '200px'}} src={`https://api.khcn.xyz/${valueAvatar}`} alt=""/>
              }
              <input  type="file" name="avatar"  onChange = {uploadFile} className="form-control"/>
            </div>
          <div>
            <div className = "form-group">
              <label htmlFor="content">Content</label>
              { valueEditor && <CKEditor style ={{minWidth: '600px'}}
                    editor={ ClassicEditor }
                    data={valueEditor}
                    // value = {valueEditor}
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onInit ={editor => {

                    }}
                    config = {
                      {
                        ckfinder: {
                          uploadUrl: 'https://api.khcn.xyz/upload'

                        }
                      }
                    }

                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                        //  setValueEditor(ReactHtmlParser(editor.getData()))
                        setValueEditor(data)
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />}
            </div>
            {/* <textarea name = "editor" rows="6" cols="100"></textarea> */}

          </div>
          <div className ="text-center">
          <button className ="btn-submit btn btn-success" type="" onSubmit = {handleSubmitForm}>Update</button>
          </div>

        </form>
        </div>
      </>

  )
}
export default ContentPost
