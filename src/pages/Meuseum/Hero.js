import React from 'react'
import { Box, Divider } from '@mui/material'

export default function Hero() {
    return (
        <Box className='museum-hero-text-box'>
            <p className='hero-text-primary'>Top attraction in Stuttgart</p>
            <Divider sx={{ width: '100px', backgroundColor: 'white' }} />
            <p className='hero-text-main-title'>Mercedes-Benz</p>
            <p className='hero-text-main-title'>Museum Stuttgart.</p>
            <p style={{ marginTop: '10px' }} className='hero-text-primary'>On nine levels and covering a floor space of 16,500 m², the museum presents breathtaking vehicles and over 1,500 exhibits. Discover the automotive and contemporary history from the very first patented car in the world to the hydrogen vehicle from this millennium.</p>
        </Box>
    )
}
