import React from 'react'
import Fab from '@mui/material/Fab';
import Chip from '@mui/material/Chip';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box'
import Paper from "@mui/material/Paper"
import { Hero } from '../../components/hero/Hero'
import { Introduction } from "./Introduction"
import MainMenus from '../../components/menus/MainMenus'
import VehiclesSwipper from '../../components/swipper/VehiclesSwipper'
import { suvs } from "../../constants/cars/Suvs"
import { coupoes } from "../../constants/cars/Coupes"
import { sedans } from "../../constants/cars/Sedans"
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';
=======
>>>>>>> 4b0f4764bd07f5ca6aedf98b33a6809d5d84cb20

export default function LandingPage() {
  const navigate = useNavigate()
  return (
    <div>
      <Hero />
      <Introduction />

      {/* Swipper for Suvs */}
      <Box sx={{ m: 2, p: 2 }} display={"flex"} flexDirection={"column"}>
        <Chip component={Paper} elevation={4} sx={{ width: '150px', textAlign: 'center', mt: 1, mb: 1, p: 2, fontSize: '1rem' }} label="Suvs" color="warning" />
        <VehiclesSwipper cars={suvs} />
        <Box display={"flex"} justifyContent={"center"}>
<<<<<<< HEAD
          <Fab onClick={()=>navigate('/marcedes/vehicles')} sx={{ m: 2, width: '200px' }} variant="extended" color="primary" aria-label="add">
=======
          <Fab sx={{ m: 2, width: '200px' }} variant="extended" color="primary" aria-label="add">
>>>>>>> 4b0f4764bd07f5ca6aedf98b33a6809d5d84cb20
            <ExpandMoreIcon sx={{ mr: 1 }} />
            Explore more
          </Fab>
        </Box>
      </Box>

      {/* Swipper for coupoes */}
      <Box sx={{ m: 2, p: 2 }} display={"flex"} flexDirection={"column"}>
        <Chip component={Paper} elevation={4} sx={{ width: '150px', textAlign: 'center', mt: 1, mb: 1, p: 2, fontSize: '1rem' }} label="Coupoes" color="warning" />
        <VehiclesSwipper cars={coupoes} />
        <Box display={"flex"} justifyContent={"center"}>
<<<<<<< HEAD
          <Fab onClick={()=>navigate('/marcedes/vehicles')} sx={{ m: 2, width: '200px' }} variant="extended" color="primary" aria-label="add">
=======
          <Fab sx={{ m: 2, width: '200px' }} variant="extended" color="primary" aria-label="add">
>>>>>>> 4b0f4764bd07f5ca6aedf98b33a6809d5d84cb20
            <ExpandMoreIcon sx={{ mr: 1 }} />
            Explore more
          </Fab>
        </Box>
      </Box>

      {/* Swipper for sedans */}
      <Box sx={{ m: 2, p: 2 }} display={"flex"} flexDirection={"column"}>
        <Chip component={Paper} elevation={4} sx={{ width: '150px', textAlign: 'center', mt: 1, mb: 1, p: 2, fontSize: '1rem' }} label="Sedans" color="warning" />
        <VehiclesSwipper cars={sedans} />
        <Box display={"flex"} justifyContent={"center"}>
<<<<<<< HEAD
          <Fab onClick={()=>navigate('/marcedes/vehicles')} sx={{ m: 2, width: '200px' }} variant="extended" color="primary" aria-label="add">
=======
          <Fab sx={{ m: 2, width: '200px' }} variant="extended" color="primary" aria-label="add">
>>>>>>> 4b0f4764bd07f5ca6aedf98b33a6809d5d84cb20
            <ExpandMoreIcon sx={{ mr: 1 }} />
            Explore more
          </Fab>
        </Box>
      </Box>

      <Box display={"flex"} alignItems={"center"} justifyContent={"center"} sx={{ mt: 4 }}>
        <MainMenus />
      </Box>
    </div>
  )
}
