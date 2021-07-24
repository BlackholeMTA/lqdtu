import {React, useEffect, useState} from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import { formatNumber, toDateString } from 'src/utility/Utils'
import {Edit, Trash} from 'react-feather'
import deleteData from 'src/hooks/deleteData'
import deletePostApi from 'src/api/detelePostApi'
function Post(props) {
  const post = props.post
  const [temp, setTemp] = useState()
  const handleDeletePost = (e) => {
    deleteData(deletePostApi.DeletePost, setTemp, post.id)
    console.log(post.id)

  }
  return (
      <tr>
       <td><a href={`#/post/edit/${post.id}`}>{post.id}</a></td>
        <td><a href={`#/post/edit/${post.id}`}>{post.title}</a></td>
        <td>{post.author}</td>
        <td>{post.category_name}</td>
        <td>{toDateString(post.date_created)}</td>
        <td style ={{width: '9%'}}><a data-toggle="tooltip" title="Edit" href={`/#/post/edit/${post.id}`} ><Edit></Edit></a> <Trash  style ={{cursor: 'pointer'}} onClick = {handleDeletePost}><a href="#" data-toggle="tooltip" title="Delete"></a></Trash></td>
    </tr>

  )
}
export default Post
