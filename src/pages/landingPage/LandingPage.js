import React from 'react'
import Fab from '@mui/material/Fab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box'
import { Hero } from '../../components/hero/Hero'
import { Introduction } from "./Introduction"
import MainMenus from '../../components/menus/MainMenus'
import VehiclesSwipper from '../../components/swipper/VehiclesSwipper'
import {suvs} from "../../constants/cars/Suvs"

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <Introduction/>

      <Box sx={{ m: 2, p: 2 }} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
        <VehiclesSwipper cars={suvs} />
        <Fab sx={{m : 2}} variant="extended" color="primary" aria-label="add">
          <ExpandMoreIcon sx={{ mr: 1 }} />
           Explore more
        </Fab>
      </Box>

      <Box display={"flex"} alignItems={"center"} justifyContent={"center"} sx={{mt : 4 }}>
        <MainMenus />
      </Box>
    </div>
  )
}
