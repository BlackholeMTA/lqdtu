import {React, useEffect, useState} from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import {useHistory} from 'react-router-dom'
import CreatePostApi from 'src/api/createPostApi'
import {postData} from 'src/hooks/postData'
import ContentPost from './ContentPost'
// import Test from './Test'
const AddPost = () => {
  const [temp, setTemp] = useState()
  const history = useHistory()
  function handleTodoFormSubmit(data) {
    console.log('form submit: ', data)
    postData(CreatePostApi.postCreatePost, setTemp, data)
   history.push('/post/all_post')
  }
  return (
    <CRow>
       <CCol lg={12}>
         <CCard>
         <CCardBody>
        <div>
        <div className='invoice-add-wrapper'>
        {/* <Test></Test> */}
        <ContentPost onSubmit = {handleTodoFormSubmit}/>

       {/* <CRow className='invoice-add'>
        <CCol xl={9} md={8} sm={12}>

        </CCol>
        <CCol xl={3} md={4} sm={12}>

        </CCol>
      </CRow> */}
         </div>
           </div>
       </CCardBody>
         </CCard>

       </CCol>
    </CRow>

  )
}
export default AddPost
