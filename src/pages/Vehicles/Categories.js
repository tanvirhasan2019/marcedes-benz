import { Divider, Grid, Typography, Paper, Link } from '@mui/material'
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
                <Link href="#suvs" underline="none">
                    <Typography variant='h6' className="category-text" sx={{ m: 1 }}>SUVs</Typography>
                </Link>
            </Grid>
            <Grid item md={1} xs={4}>
                <Divider sx={{ m: 1, display: { xs: 'none', md: 'inline' } }} orientation="vertical" flexItem />
            </Grid>
            <Grid item md={1} xs={4}>
                <Link href="#sedans" underline="none">
                    <Typography variant='h6' className="category-text" sx={{ m: 1 }}>Sedans & Wagons</Typography>
                </Link>
            </Grid>
            <Grid item md={1} xs={4}>
                <Divider sx={{ m: 1, display: { xs: 'none', md: 'inline' } }} orientation="vertical" flexItem />
            </Grid>
            <Grid item md={1} xs={4}>
                <Link href="#coupoes" underline="none">
                    <Typography variant='h6' className="category-text" sx={{ m: 1 }}>Coupes</Typography>
                </Link>
            </Grid>
            <Grid item md={1} xs={4}>
                <Divider sx={{ m: 1, display: { xs: 'none', md: 'inline' } }} orientation="vertical" flexItem />
            </Grid>
            <Grid item md={1} xs={4}>
                <Link href="#convertibles" underline="none">
                    <Typography variant='h6' className="category-text" sx={{ m: 1 }}>Roadsters</Typography>
                </Link>
            </Grid>
            <Grid item md={1} xs={4}>
                <Divider sx={{ m: 1, display: { xs: 'none', md: 'inline' } }} orientation="vertical" flexItem />
            </Grid>
            <Grid item md={1} xs={4}>
                <Link href="#electric" underline="none">
                    <Typography variant='h6' className="category-text" sx={{ m: 1 }}>Electric</Typography>
                </Link>
            </Grid>
        </Grid>
    )
}
