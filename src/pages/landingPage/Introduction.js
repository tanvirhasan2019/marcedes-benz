import React from 'react'
import { Typography } from '@mui/material'
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "./style.scss"
import { FadeIn } from '../../components/animation/FadeIn';
import TextAnimation from '../../components/animation/text/TextAnimation';

export const Introduction = () => {
  return (
    <div>
      <Box sx={{ mt: 4, p: 4, "& .MuiPaper-outlined": { color: 'black' } }} component={Paper} variant="outlined">
        <Typography gutterBottom align='center' variant='h3'>
          <TextAnimation text={'Welcome to the Mercedes-Benz international'}>
          </TextAnimation>
          <TextAnimation text={'web site.'}>
          </TextAnimation>
         
        </Typography>

        <Typography sx={{ mt: 2 }} gutterBottom align='center' variant='body1'>
          Exclusive reports and current films: experience a broad range of topics from the <br />
          fascinating world of Mercedes-Benz. To find out about offers in your location, please
          <br />
          go to the local Mercedes-Benz website.
        </Typography>

        <Typography sx={{ mt: 2 }} gutterBottom align='center' variant='body1'>
          This is the International website of Mercedes-Benz AG.
          <br />
          Visitors from the U.S., please visit our U.S. <a href='https://www.mbusa.com/en/home'>website www.mbusa.com.</a>
        </Typography>
        <Stack sx={{ mt: 4 }} direction={"row"} spacing={4} alignItems={"center"} justifyContent="center">
          <Button onClick={() => window.location.href = "https://www.mercedes-benz.co.uk/passengercars.html?_ga=2.110313222.2053128528.1658741486-988799379.1658741486&group=all&subgroup=see-all&view=BODYTYPE"}
            sx={{ textTransform: 'none', p: 2 }}
            align="center"
            variant="outlined">
            Bring Me to main website
          </Button>

          <Button onClick={() => window.location.href = "https://www.mercedes-benz.co.uk/passengercars.html?_ga=2.110313222.2053128528.1658741486-988799379.1658741486&group=all&subgroup=see-all&view=BODYTYPE"}
            sx={{ textTransform: 'none', p: 2 }}
            align="center"
            variant="contained">
            Bring Me to my local website
          </Button>
        </Stack>
      </Box>

      <Stack direction={{ xs: 'column', md: 'row', lg: 'row' }} spacing={4} alignItems={"center"} justifyContent={"center"} sx={{ mt: 2, p: 4 }}>

        <Box sx={{ width: '300px' }}>
          <FadeIn>
            <img
              className="intro-image"
              alt="intro logo"
              src={"https://drive.google.com/uc?export=view&id=133-2G_1W0uaUqKgRgqcooLbprvretME-"}
            />
          </FadeIn>
        </Box>

        <Box sx={{ width: '300px' }}>
          <FadeIn>
            <img
              alt="intro logo"
              className="intro-image"
              src={"https://drive.google.com/uc?export=view&id=1ToY_kb70K1FJm6CwAnJITN9NfCiISN2b"}
            />
          </FadeIn>
        </Box>

        <Box sx={{ width: '300px' }}>
          <FadeIn>
            <img
              alt="intro logo"
              className="intro-image"
              src={"https://drive.google.com/uc?export=view&id=1wqwUmf5u21tqQn0VzsGJOXtNGhLkNlaE"}
            />
          </FadeIn>
        </Box>
      </Stack>
    </div>
  )
}
