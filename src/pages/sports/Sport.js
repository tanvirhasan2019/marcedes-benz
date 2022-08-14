import React from 'react'
import { Box, Typography } from '@mui/material'
import "./style.scss"
import Introduction from './Introduction'
import Description from './Description'

export default function Sport() {
    return (
        <div>
            <Box className='sport-hero'>
                <Typography sx={{ pt: 4, pl: 4, color: 'white' }} gutterBottom variant='h2'>Sports</Typography>
            </Box>
            <div>
                <Introduction/>
            </div>
            <div>
                <Description/>
            </div>
        </div>
    )
}
