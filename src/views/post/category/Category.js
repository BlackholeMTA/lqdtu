import {React, useEffect, useState} from 'react'
import {Edit, Trash} from 'react-feather'
import deleteData from 'src/hooks/deleteData'
import deleteCateApi from 'src/api/deteleCateApi'
function Category(props) {
  const cate = props.cate
  const [temp, setTemp] = useState()
  const handleDeleteCate = (e) => {
    deleteData(deleteCateApi.DeleteCate, setTemp, cate.id)

  }
  return (
      <tr>
       <td>{cate.id}</td>
        <td>{cate.name}</td>
        <td style ={{width: '15%'}}><a data-toggle="tooltip" title="Edit" href={`/#/post/editCate/${cate.id}`} ><Edit></Edit></a> <Trash  style ={{cursor: 'pointer'}} onClick = {handleDeleteCate}><a href="#" data-toggle="tooltip" title="Delete"></a></Trash></td>
    </tr>

  )
}
export default Category
