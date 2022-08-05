import React, { useEffect, useState } from 'react'
import { videoCategory } from "../../constants/categories"
import Hero from './Hero'
import Description from './Description'
import "./style.scss"

export default function Videos() {

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get('category')

  
  useEffect(() => {
    let result = videoCategory.filter(item => item.id === id)
    setData(result[0])
    setLoading(false)
  }, [id])

  return (
    <div className='video-main-div'>
     {!loading && data && <Hero url={data?.url} />} 
     {!loading && data && <Description img={data?.mainImage} description={data?.description} />} 
  </div>
  )
}
