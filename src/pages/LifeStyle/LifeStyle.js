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
              <img src={"https://drive.google.com/uc?export=view&id=1hyeARUEy9R2_4QW_5lBnphziF989AqUl"}
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
              <img src={"https://drive.google.com/uc?export=view&id=1Nhdtr73zKMjtzgarmd2-6NaKwiNuWtA7"}
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
        backgroundImage: 'url(https://drive.google.com/uc?export=view&id=1PVGnJa5TzHvVP3YrD6XXCr28WauFQ9ev)'
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
              <img src={"https://drive.google.com/uc?export=view&id=1Tc9mPddVej0e86_bOc9Rw_055AfX6u3A"}
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
              <img src={"https://drive.google.com/uc?export=view&id=1SZLWWurYjSPb_ipDgVK_PCVXlrJjXUC1"}
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
              <img src={"https://drive.google.com/uc?export=view&id=1LzUnJ7ocQctrOcTARxaxvR10zdfG4_P-"}
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
