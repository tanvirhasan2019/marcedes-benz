import * as React from 'react'
import { useNavigate } from "react-router-dom"
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'

export default function TitlebarImageList({data,title}) {

  let navigate = useNavigate()
  
  const handleNavigatePage = (id)=>{
    if(title === "Video"){
      navigate(`/marcedes/videos?category=${id}`)
    }else{
      navigate(`/marcedes/news?title=${title}&category=${id}`)
    }
  }

  return (
    <ImageList sx={{
      mb: 8,
      gridTemplateColumns:
        'repeat(auto-fill, minmax(380px, 1fr))!important',
    }}>
      {data.map((item) => (
        <ImageListItem onClick={()=>handleNavigatePage(item?.id)} sx={{ "&:hover": { cursor: 'pointer' } }} key={item?.id}>
          <img
            src={`${item?.mainImage}?w=248&fit=crop&auto=format`}
            srcSet={`${item.mainImage}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item?.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item?.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item?.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
