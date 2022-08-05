import React, { useEffect, useState } from 'react'
import { newCategory, popularCategory } from "../../constants/categories"
import {NewsHero} from "../../components/hero/NewsHero"
import Description from "./Description"
import "./style.scss"

export default function News() {

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get('category')
  const title = queryParams.get('title')
  
  useEffect(() => {
    let result = []
    if (title === 'New') {
      result = newCategory.filter(item => item.id === id)
    } else {
      result = popularCategory.filter(item => item.id === id)
    }
    setData(result[0])
    setLoading(false)
  }, [id, title])

  return (
    <div className='news-main-div'>
      {!loading && data && <NewsHero img={data?.mainImage} title={data?.title} />}
      {!loading && data &&
        <Description
          secondaryImage={data?.secondaryImage}
          subtitle={data?.subtitle}
          description={data?.description}
          tertiaryImage={data?.tertiaryImage}
        />
      }
    </div>
  )
}
