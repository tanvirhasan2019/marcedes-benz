import React, { useState } from 'react'
import { Box, Grid } from '@mui/material'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import LifeStyleSwipper from '../../components/swipper/LifeStyle/LifeStyleSwipper'
import ImageLoader from "../../images/loader/loader.gif"
import "./style.scss"
export default function LifeStyle() {
  const [imageLoading, setImageLoading] = useState(true)
  const mainFeature = (src, link, text, size) => {
    return <Grid item md={size} xs={12}>
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <img
          onLoad={() => setImageLoading(false)}
          src={imageLoading ? ImageLoader : src}
          className="classic-caps-image"
          alt="classic caps"
        />
        <p className="caps-title">{text}</p>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link href={`${link}`} underline="none">
            <Button sx={{ p: 1, m: 1, width: '200px' }} variant="outlined">Show Now</Button>
          </Link>
        </Box>
      </Box>
    </Grid>
  }
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
          {mainFeature("https://drive.google.com/uc?export=view&id=1hyeARUEy9R2_4QW_5lBnphziF989AqUl", "https://lifestylecollection.mbusa.com/Browse/HEADWEAR", "Classic Caps", 6)}
          {mainFeature("https://drive.google.com/uc?export=view&id=1Nhdtr73zKMjtzgarmd2-6NaKwiNuWtA7", "https://lifestylecollection.mbusa.com/Browse/WOMENSPOLOSANDTSHIRTS", "Trending Tanks", 6)}
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
          {mainFeature("https://drive.google.com/uc?export=view&id=1Tc9mPddVej0e86_bOc9Rw_055AfX6u3A", "https://lifestylecollection.mbusa.com/Browse/BAGS", "Carry Everything", 4)}
          {mainFeature("https://drive.google.com/uc?export=view&id=1SZLWWurYjSPb_ipDgVK_PCVXlrJjXUC1", "https://lifestylecollection.mbusa.com/Browse/LUXURY", "Luxurious Fragrance", 4)}
          {mainFeature("https://drive.google.com/uc?export=view&id=1LzUnJ7ocQctrOcTARxaxvR10zdfG4_P-", "https://lifestylecollection.mbusa.com/Browse/THEGARAGE", "Garage Sale", 4)}
        </Grid>
      </Box>
    </div>
  )
}
