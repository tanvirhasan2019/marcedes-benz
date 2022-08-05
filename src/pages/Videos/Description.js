import React from 'react'
import { Box, Paper, Stack } from '@mui/material'

export default function Description({description, img}) {
  return (
      <Stack>
          <Box>
             <img className='video-desc-img' src={img} alt="description" />
          </Box>

          <Box sx={{p : 4}}>
              <Paper sx={{ p: 4, mt : -10, borderRadius : '20px'}} variant='outlined'>
                  <p className='video-description-text'>{description}</p>
              </Paper>
          </Box>
      </Stack>
  )
}
