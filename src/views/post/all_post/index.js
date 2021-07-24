import {React, useEffect, useState} from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Post from './Post'

// import usersData from './UsersData'

const AllPost = ({match}) => {
  // const user = usersData.find( user => user.id.toString() === match.params.id)
  // const userDetails = user ? Object.entries(user) :
  //   [['id', (<span><CIcon className="text-muted" name="cui-icon-ban" /> Not found</span>)]]
  const [listPost, setListPost] = useState([])

  useEffect(() => {
    async function fetchListPost() {
      try {
        const url = process.env.REACT_APP_API_URL
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        }
      const requestUrl = `${url}/news?unit=Trang chủ&page=1&size=50`
      const response = await fetch(requestUrl, requestOptions)
      const responseJSON = await response.json()
       console.log(responseJSON)
      setListPost(responseJSON)
      } catch (error) {
        console.log(error)
      }
    }
    fetchListPost()
  }, [])
  return (
    <CRow>
      <CCol lg={12}>

        <CCard>
          <div className ='d-flex mt-3'>
          <span className = 'mx-3' style ={{fontSize: '18px', fontWeight: 500}}>List Post</span>
        <a className= "btn btn-success" href="#/post/add">Write a new post</a>
          </div>

          <CCardBody>
          <table  className="table table-striped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                listPost.map(item => (
                  <Post post = {item} key = {item.id}></Post>
                ))
              }
            </tbody>
          </table>
              {/* <table className="table table-striped table-hover">
                <tbody>
                  {
                    userDetails.map(([key, value], index) => {
                      return (
                        <tr key={index.toString()}>
                          <td>{`${key}:`}</td>
                          <td><strong>{value}</strong></td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table> */}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AllPost
