import {React, useEffect, useState} from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import {useHistory} from 'react-router-dom'
import UpdatePostApi from 'src/api/updatePostApi'
import {updateDataById} from 'src/hooks/updateData'
import ContentPost from './ContentPost'
import fetchDetailPosts from 'src/api/fetchDetailPosts'
const EditPost = () => {
  const [temp, setTemp] = useState()
  const history = useHistory()
  function handleTodoFormSubmit(data) {
    console.log('form submit: ', data)
    updateDataById(UpdatePostApi.updatePost, setTemp, data, id)
   history.push('/post/all_post')
  }
  // const [post, setPost] = useState()
  const url = window.location.href
  const id = url.substring(url.lastIndexOf('/') + 1)

  const {info} = fetchDetailPosts(id)

  // console.log(post)
  return (
    <CRow>
       <CCol lg={12}>
         <CCard>
         <CCardBody>
        <div>
        <div className='invoice-add-wrapper'>
        <ContentPost onSubmit = {handleTodoFormSubmit} post = {info}/>
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
export default EditPost
