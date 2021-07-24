import {React, useState, useEffect} from 'react'
 function FetchDetailPosts(id) {
    const [info, setInfo] = useState({})
    // const x = id
    useEffect(() => {
      async function FetchDetailPost() {
        try {
          const url = process.env.REACT_APP_API_URL
          const requestOptions = {
            method: 'GET',
            redirect: 'follow'
          }
          //limit=10
          const requestUrl = `${url}/news/${id}`
          const response = await fetch(requestUrl, requestOptions)
          const responseJSON = await response.json()
          const info = responseJSON
          setInfo(info)
        } catch (error) {
          console.log(error)
        }
      }
      FetchDetailPost()
    }, [id])
        return {info}
    }
export default FetchDetailPosts
