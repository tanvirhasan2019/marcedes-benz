import { Stack, Typography, Divider, Paper, Grid } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ImageLoader from "../../images/loader/loader.gif"
export default function CarList({ title, data }) {
  const [imageLoading, setImageLoading] = useState(true)
  const navigate = useNavigate()
  return (
    <Stack sx={{ mt: 2 }}>
      <Typography className="car-brand-name" variant='h6' align='center'>{title}</Typography>
      <Divider sx={{ mt: 1, mb: 1 }} />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ mt: 2, pb: 2 }}
        component={Paper}
      >
        {data?.map((item, index) =>
          <Grid onClick={() => navigate(`/marcedes/vehicles/${item?.id}`)} className="vehicle-card-list" key={index} item md={3} xs={12}>
            <p className="vehicle-title-text">{item.title}</p>
            <p className="vehicle-price-text">starting at : &nbsp;{item.price}$</p>
            <div id="inplace-zoom-container">
              <img
                onLoad={() => setImageLoading(false)}
                id="inplace-zoom-element"
                className='vehicle-card-image'
                src={imageLoading ? ImageLoader : item?.colors[0].image}
                alt={"title vehicle"}
              />
            </div>
          </Grid>
        )}
      </Grid>
    </Stack>
  )
}
