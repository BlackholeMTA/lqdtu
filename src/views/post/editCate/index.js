import {React, useEffect, useState} from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import {useHistory} from 'react-router-dom'
import UpdateCateApi from 'src/api/updateCateApi'
import {updateDataById} from 'src/hooks/updateData'
import ContentCate from './ContentCate'
import fetchDetailCates from 'src/api/fetchDetailCates'
const EditPost = () => {
  const [temp, setTemp] = useState()
  const history = useHistory()
  function handleTodoFormSubmit(data) {
    console.log('form submit: ', data)
    updateDataById(UpdateCateApi.updateCate, setTemp, data, id)
   history.push('/post/category')
  }
  // const [post, setPost] = useState()
  const url = window.location.href
  const id = url.substring(url.lastIndexOf('/') + 1)

  const {info} = fetchDetailCates(id)
  console.log(info)
  // console.log(post)
  return (
    <CRow>
       <CCol lg={12}>
         <CCard>
         <CCardBody>
        <div>
        <div className='invoice-add-wrapper'>
        <ContentCate onSubmit = {handleTodoFormSubmit} cate = {info}/>
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
