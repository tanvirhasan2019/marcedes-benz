import React from 'react'
import { Box, Grid } from '@mui/material'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import LifeStyleSwipper from '../../components/swipper/LifeStyle/LifeStyleSwipper'
import "./style.scss"

export default function LifeStyle() {
  return (
    <div className='life-style-div'>
      <LifeStyleSwipper />

      <Box sx={{ mt: 2 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={6} xs={12}>
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <img src={"https://c.bdac.co/bdac/MBUSA/Assets/b6054b6b-d45b-4ee4-9571-949302eb3ec4/14411_MBUSA_July_Banner_UPdates_Middle_x_2_1%20(1).jpg?v=637933463789171970"}
                className="classic-caps-image"
                alt="classic caps"
              />
              <p className="caps-title">Classic Caps</p>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link href="https://lifestylecollection.mbusa.com/Browse/HEADWEAR" underline="none">
                  <Button sx={{ p: 1, m: 1, width: '200px' }} variant="outlined">Show Now</Button>
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid item md={6} xs={12}>
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <img src={"https://c.bdac.co/bdac/MBUSA/Assets/2cb1e98d-e096-4147-8d21-5c7bf6d9ac21/14411_MBUSA_July_Banner_UPdates_Middle_x_2_2%20(1).jpg?v=637933462848031050"}
                className="classic-caps-image"
                alt="classic caps"
              />
              <p className="caps-title">Trending Tanks</p>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link href="https://lifestylecollection.mbusa.com/Browse/WOMENSPOLOSANDTSHIRTS" underline="none">
                  <Button sx={{ p: 1, m: 1, width: '200px' }} variant="outlined">Show Now</Button>
                </Link>
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Box>

      <Box sx={{
        pt: 20,
        pl: 4,
        mt: 2,
        height: '70vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundImage: 'url(https://c.bdac.co/bdac/MBUSA/Assets/346e1d90-ce86-4c60-9909-3675a3068f15/14411_MBUSA_July_Banner_UPdates__Static.jpg?v=637933464749643160)'
      }}>
        <p className='youth-text'>
          Check out Youth <br /> Apparel
        </p>
        <Link href="https://lifestylecollection.mbusa.com/Browse/YOUTH" underline="none">
          <Button variant="contained">Shop Youth</Button>
        </Link>
      </Box>


      <Box sx={{ mt: 2, pb: 8 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          sx={{ p: 2 }}
        >
          <Grid item md={4} xs={12}>
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <img src={"https://c.bdac.co/bdac/MBUSA/Assets/5b17d69b-9b60-49f7-a557-54b6cf7e99b5/14411_MBUSA_July_Banner_UPdates_Bottom_x_3_2%20(1).jpg?v=637933479536431990"}
                className="classic-caps-image"
                alt="classic caps"
              />
              <p className="caps-title">Carry Everything</p>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link href="https://lifestylecollection.mbusa.com/Browse/BAGS" underline="none">
                  <Button sx={{ p: 1, m: 1, width: '200px' }} variant="outlined">Show Now</Button>
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid item md={4} xs={12}>
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <img src={"https://c.bdac.co/bdac/MBUSA/Assets/8dd6597c-924e-41a9-bb2c-7c6df0bbbe15/14411_MBUSA_July_Banner_UPdates_Bottom_x_3_1%20(1).jpg?v=637933474226931940"}
                className="classic-caps-image"
                alt="classic caps"
              />
              <p className="caps-title">Luxurious Fragrance</p>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link href="https://lifestylecollection.mbusa.com/Browse/LUXURY" underline="none">
                  <Button sx={{ p: 1, m: 1, width: '200px' }} variant="outlined">Show Now</Button>
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid item md={4} xs={12}>
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <img src={"https://c.bdac.co/bdac/MBUSA/Assets/96f6a6b6-e897-4451-b4c5-53268b710d53/9235_Feb_Banner_Refresh_Lower_3.jpg?v=637867740543911510"}
                className="classic-caps-image"
                alt="classic caps"
              />
              <p className="caps-title">Garage Sale</p>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link href="https://lifestylecollection.mbusa.com/Browse/THEGARAGE" underline="none">
                  <Button sx={{ p: 1, m: 1, width: '200px' }} variant="outlined">Show Now</Button>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

    </div>
  )
}
