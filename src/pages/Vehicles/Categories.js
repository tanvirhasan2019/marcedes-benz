import { Divider, Grid, Typography, Paper } from '@mui/material'
import React from 'react'

export default function Categories() {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            component={Paper}
            variant="outlined"
            sx={{ p: 2 }}
        >
            <Grid item md={1} xs={4}>
                <Typography variant='h6' className="category-text" sx={{ m: 1 }}>SUVs</Typography>
            </Grid>
            <Grid item md={1} xs={4}>
                <Divider sx={{ m: 1, display: { xs: 'none', md: 'inline' } }} orientation="vertical" flexItem />
            </Grid>
            <Grid item md={1} xs={4}>
                <Typography variant='h6' className="category-text" sx={{ m: 1 }}>Sedans & Wagons</Typography>
            </Grid>
            <Grid item md={1} xs={4}>
                <Divider sx={{ m: 1, display: { xs: 'none', md: 'inline' } }} orientation="vertical" flexItem />
            </Grid>
            <Grid item md={1} xs={4}>
                <Typography variant='h6' className="category-text" sx={{ m: 1 }}>Coupes</Typography>
            </Grid>
            <Grid item md={1} xs={4}>
                <Divider sx={{ m: 1, display: { xs: 'none', md: 'inline' } }} orientation="vertical" flexItem />
            </Grid>
            <Grid item md={1} xs={4}>
                <Typography variant='h6' className="category-text" sx={{ m: 1 }}>Roadsters</Typography>
            </Grid>
            <Grid item md={1} xs={4}>
                <Divider sx={{ m: 1, display: { xs: 'none', md: 'inline' } }} orientation="vertical" flexItem />
            </Grid>
            <Grid item md={1} xs={4}>
                <Typography variant='h6' className="category-text" sx={{ m: 1 }}>Electric</Typography>
            </Grid>
        </Grid>
    )
}
