import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StickyFooter from "./StickyFooter"
import "./Footer.scss"
const topics = ['Innovation', 'Design', 'Exhibitions', 'Museum & History', 'Sports', 'Driving', 'Events', 'Mercedes me', 'Portal']
const Shopping = [
  'Dealer Search',
  'Mercedes-Benz Accessoires',
  'Mercedes-Benz Collection',
  'Mercedes me connect Store',
  'Service & Parts',
  'Formula 1 Store',
  'Mercedes-Benz Classic Center'
]
const cars = [
  'Model Overview',
  'Configurator',
  'Test Drive',
  'Mercedes-Maybach',
  'Mercedes me connect',
  'Mercedes-Benz Ex-Factory Driving Aids',
  'WLTP',
  'RDE',
  'Semiconductors supply situation',
  'Li-Ion UN38.3'
]
const discovers = [
  'Newsroom',
  'Press',
  'Career',
  'heycar',
  'SHARE NOW',
  'Vulnerability Reporting Policy',
  'Mercedes-Benz Energy',
  'Mercedes-Benz Bank',
  'Fleet Sales',
  'Mercedes-Benz Global Training'
]
export const Footer = () => {
  return (
    <Box sx={{flexGrow: 1, backgroundColor: 'rgba(0, 0, 0, 0.89)' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Stack>
            <Typography sx={{ textAlign: 'left', color: 'whitesmoke', p: 1 }} gutterBottom variant='h4'>
              More topics
            </Typography>
            <div className='footer-divider'></div>
            {topics?.map((item, index) =>
              <Typography key={index} sx={{ textAlign: 'left', color: 'whitesmoke', p: 1 }} gutterBottom variant='body2'>
                {item}
              </Typography>
            )}
          </Stack>
        </Grid>
        <Grid item xs={12} md={3}>
          <Stack>
            <Typography sx={{ textAlign: 'left', color: 'whitesmoke', p: 1 }} gutterBottom variant='h4'>
              Shopping
            </Typography>
            <div className='footer-divider'></div>
            {Shopping?.map((item, index) =>
              <Typography key={index} sx={{ textAlign: 'left', color: 'whitesmoke', p: 1 }} gutterBottom variant='body2'>
                {item}
              </Typography>
            )}
          </Stack>
        </Grid>
        <Grid item xs={12} md={3}>
          <Stack>
            <Typography sx={{ textAlign: 'left', color: 'whitesmoke', p: 1 }} gutterBottom variant='h4'>
              All about cars
            </Typography>
            <div className='footer-divider'></div>
            {cars?.map((item, index) =>
              <Typography key={index} sx={{ textAlign: 'left', color: 'whitesmoke', p: 1 }} gutterBottom variant='body2'>
                {item}
              </Typography>
            )}
          </Stack>
        </Grid>
        <Grid item xs={12} md={3}>
          <Stack>
            <Typography sx={{ textAlign: 'left', color: 'whitesmoke', p: 1 }} gutterBottom variant='h4'>
              Discover more
            </Typography>
            <div className='footer-divider'></div>
            {discovers?.map((item, index) =>
              <Typography key={index} sx={{ textAlign: 'left', color: 'whitesmoke', p: 1 }} gutterBottom variant='body2'>
                {item}
              </Typography>
            )}
          </Stack>
        </Grid>
      </Grid>

      <Stack>
        <Typography sx={{ textAlign: 'left', color: 'whitesmoke', p: 1 }} gutterBottom variant='h4'>
          Stay informed
        </Typography>
        <div className='footer-divider'></div>
      </Stack>
      <p className='footer-desc-text'>
        Follow us and use the following social media platforms to get in contact with us and to share your passion<br /> for the brand, products and services of Mercedes-Benz.
      </p>
      <Stack sx={{ pl: 1, pb: 4, color: 'whitesmoke' }} direction={"row"} spacing={8}>
        <Typography><FacebookIcon /></Typography>
        <Typography><TwitterIcon /></Typography>
        <Typography><YouTubeIcon /></Typography>
        <Typography><InstagramIcon /></Typography>
        <Typography><LinkedInIcon /></Typography>
      </Stack>
      <Stack>
        <StickyFooter />
      </Stack>
    </Box>
  )
}
