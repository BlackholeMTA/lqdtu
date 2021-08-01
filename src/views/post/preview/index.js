import {React, useEffect, useState} from 'react'

const PreviewPost = (props) => {
  const value =props.value
  console.log(props)
  return (
    <>
    <p>{value}</p>
    </>

  )
}
export default PreviewPost
