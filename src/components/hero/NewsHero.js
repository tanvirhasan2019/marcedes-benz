import React from 'react'
import { Box, Typography } from '@mui/material'

export const NewsHero = ({img, title}) => {
  return (
    <Box sx={{width : '100%', mt : -1, height : '90vh', background : `url(${img}) no-repeat center center`,backgroundSize: 'cover' }}>
        <Typography variant='h5' sx={{pt : 8, pl : 2,color : 'whitesmoke', opacity : '0.6', textAlign : 'left'}}>{title}</Typography>
    </Box>
  )
}
