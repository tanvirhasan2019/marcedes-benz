import React from 'react'
import { Box, Paper } from '@mui/material'
import Description from './Description'
import Hero from "./Hero"
import "./style.scss"

export default function Meuseum() {
    return (
        <Box sx={{pb : 2}}>
            <Box className='museum-hero'>
                <Hero />
            </Box>
            <Box sx={{ p: 2}} component={Paper}>
              <Description/>
            </Box>
        </Box>
    )
}
