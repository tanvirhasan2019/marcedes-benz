import React from 'react'
import { Box, Paper, Typography, Grid, Link } from '@mui/material'
import { sports } from '../../constants/sports/sport'
import Button from '@mui/material/Button';

export default function Description() {
    return (
        <Paper sx={{ p: { xs: 2, md: 8 } }}>
            <Typography gutterBottom align='center' variant='h3'>What drives us.</Typography>
            <Typography gutterBottom align='center' variant='body2'>By engaging in the ABB FIA Formula E Championship, we’re not only being part of an electrifiying racing series but also a part of urban culture around the globe. We seek for points on the track as well driving sustainable change, creating an initial spark for innovation and contribute to a better life for all within the city.</Typography>
            {sports.map((item, index) =>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={4}
                    sx={{ mt: 3 }}
                    key={index}
                >
                    <Grid item md={8} xs={12}>
                        <img className='sport-desc-img' src={item?.img} alt="sports" />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Box spacing={4}>
                            <Typography gutterBottom variant='h5'>{item?.title}</Typography>
                            <Typography sx={{mt : 1}} gutterBottom variant='body2'>{item?.subtitle}</Typography>
                            <Link href={item?.link}><Button variant="contained">Get all the insights</Button></Link>
                        </Box>
                    </Grid>
                </Grid>
            )}
        </Paper>
    )
}
