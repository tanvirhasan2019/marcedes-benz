import { Stack, Typography, Divider, Paper, Grid } from '@mui/material'
import React from 'react'

export default function CarList({ title, data }) {

  return (
    <Stack sx={{ mt: 2 }}>
      <Typography variant='h6' align='center'>{title}</Typography>
      <Divider sx={{ mt: 1, mb: 1 }} />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{mt : 2, pb : 2}}
        component={Paper}
      >
        {data?.map((item , index)=>
          <Grid className="vehicle-card-list" key={index} item md={3} xs={12}>
             <p className="vehicle-title-text">{item.title}</p>
             <p className="vehicle-price-text">starting at : &nbsp;{item.price}$</p>
             <img className='vehicle-card-image' src={item?.colors[0].image} alt={"title vehicle"} />
          </Grid>
        )}
      </Grid>
    </Stack>
  )
}
