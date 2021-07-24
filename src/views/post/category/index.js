import {React, useEffect, useState} from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import AddCategory from './AddCategory'
import {useHistory} from 'react-router-dom'
import Category from './Category'
import css from './category.css'
import CreateCategoryApi from 'src/api/createCategoryApi'
import {postData} from 'src/hooks/postData'
function ListCategory() {
  const [listCate, setListCate] = useState([])
  const [temp, setTemp] = useState()
  const history = useHistory()
  function handleTodoFormSubmit(formValues) {
    console.log('form submit: ', formValues)
    postData(CreateCategoryApi.postCreateCategory, setTemp, formValues)
    history.push('/post/category')
  }
  useEffect(() => {
    async function fetchListPost() {
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
      setListCate(responseJSON)
      } catch (error) {
        console.log(error)
      }
    }
    fetchListPost()
  }, [])
  return (
    <CRow>
      <CCol md={4}>
        <CCard>
          <CCardBody>
          <AddCategory onSubmit = {handleTodoFormSubmit}></AddCategory>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol md={8}>
        <CCard>
          <CCardBody>
          <table  className="table table-striped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                listCate.map(item => (
                  <Category cate = {item} key = {item.id}></Category>
                ))
              }
            </tbody>
          </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default ListCategory
