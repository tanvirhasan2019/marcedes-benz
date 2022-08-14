import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import MasonryImageList from '../../components/gallery/MasonryImageList'
import { sports } from '../../constants/sports/sport'
export default function Introduction() {
    return (
        <Paper sx={{ p: { xs: 2, md: 8 } }}>
            <Typography gutterBottom align='center' variant='h3'>Mercedes-Benz</Typography>
            <Typography gutterBottom align='center' variant='h3'>Sports.</Typography>
            <Typography gutterBottom align='center' variant='body2'>Discover now.</Typography>
            <Box>
                <MasonryImageList itemData={sports} />
            </Box>
        </Paper>
    )
}