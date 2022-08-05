import React from 'react'
import { Box } from '@mui/material'
import Categories from './Categories'
import CarList from './CarList'
import {suvs} from "../../constants/cars/Suvs"
import {coupoes} from "../../constants/cars/Coupes"
import {electric} from "../../constants/cars/Electric"
import {sedans} from "../../constants/cars/Sedans"
import {convertibles} from "../../constants/cars/Convertibles"

import "./style.scss"

export default function Vehicles() {
  return (
    <div>
      <Box><p className="all-vehicles">All Vehicles</p></Box>
      <Box sx={{mt : 2, p : 4}}><Categories/></Box>
      <Box id="suvs" sx={{mt : 2, p : 4}}>
        <CarList title={"SUVs"} data={suvs} />
      </Box>

      <Box id="suvcoupoes" sx={{mt : 2, p : 4}}>
        <CarList title={"Coupoes"} data={coupoes} />
      </Box>

      <Box id="sedans" sx={{mt : 2, p : 4}}>
        <CarList title={"Sedans"} data={sedans} />
      </Box>

      <Box id="convertibles" sx={{mt : 2, p : 4}}>
        <CarList title={"Convertibles"} data={convertibles} />
      </Box>

      <Box id="electric" sx={{mt : 2, p : 4}}>
        <CarList title={"Electric"} data={electric} />
      </Box>

    </div>
  )
}
