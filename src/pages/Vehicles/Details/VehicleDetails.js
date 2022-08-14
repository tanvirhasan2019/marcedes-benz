import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Box, Divider, Grid, Typography } from '@mui/material'
import "./style.scss"
import { suvs } from "../../../constants/cars/Suvs"
import { coupoes } from "../../../constants/cars/Coupes"
import { electric } from "../../../constants/cars/Electric"
import { sedans } from "../../../constants/cars/Sedans"
import { convertibles } from "../../../constants/cars/Convertibles"
import SimpleBackdrop from '../../../components/Backdrop/SimpleBackDrop'

export default function VehicleDetails() {
  const [vehicle, setVehicle] = useState({})
  const [selectedImage, setSelectedImage] = useState('')
  const [selectedColorIndex, setSelectedColorIndex] = useState(0)
  const [imageLoading, imageSetLoading] = useState(false)
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  useEffect(() => {
    let allVehicle = [...suvs, ...coupoes, ...electric, ...convertibles, ...sedans]
    let result = allVehicle.filter(item => item.id === id)
    setVehicle(result[0])
    setSelectedImage(result[0]?.colors[0]?.image)
    setLoading(false)
  }, [id])

  useEffect(() => {
    imageSetLoading(true)
  }, [selectedImage])

  return (
    <Box sx={{ minHeight: '400px', p: 2, backgroundColor: '#fff' }}>
      {imageLoading && <SimpleBackdrop />}
      <Box sx={{ minHeight: '400px', p: 1, backgroundColor: '#fff' }}>
        {imageLoading && <SimpleBackdrop />}
        {loading && <SimpleBackdrop />}
        <p className='desc-title'>{vehicle?.title}</p>
        <p className='desc-subtitle'>{vehicle?.subtitle}</p>
        <Divider sx={{ width: '100px' }} />
        <p className='desc-subtitle'>Starting at {vehicle?.price}$</p>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ p: 1 }}
        >
          <Box sx={{ maxWidth: '700px', maxHeight: '400px' }}>
            <img
              className="desc-main-img"
              onLoad={() => imageSetLoading(false)}
              src={selectedImage}
              alt="car" />
          </Box>
        </Box>

        <p className='color-title'>Color</p>
        <p className='selected-color-name'>{!loading && vehicle?.colors[selectedColorIndex]?.name}</p>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={1}
          sx={{ pb: 1 }}
        >
          {vehicle?.colors?.map((item, index) =>
            <Grid key={index} item xs={4} md={1}>
              <img key={index} className={index === selectedColorIndex ? "desc-color-img desc-color-img-active" : "desc-color-img"}
                src={item?.color}
                alt="color"
                onClick={() => {
                  setSelectedImage(vehicle?.colors[index].image)
                  setSelectedColorIndex(index)
                }
                }
              />
            </Grid>
          )}
        </Grid>

        <Box sx={{ mt: 2, pb: 4 }}>
          <Divider sx={{ mb: 1 }} />
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid md={4} xs={12} item>
              <Box sx={{ p: 3, mt: 2, borderRight: { xs: 'none', md: '1px solid #00000040' } }} display={"flex"} direction="row"
                justifyContent="space-between"
                alignItems="center">
                <Box>
                  <Typography>
                    <img className='desc-icon' src="https://cdn-icons-png.flaticon.com/512/3564/3564796.png" alt="acceleration" />
                  </Typography>
                  <Typography>Acceleration</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: '600', opacity: '0.8' }} gutterBottom variant='body1'>{vehicle?.acceleration}</Typography>
                  <Typography sx={{ fontWeight: '600', opacity: '0.8' }} gutterBottom variant='body1'>Sec**</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid md={4} xs={12} item>
              <Box sx={{ p: 3, mt: 2, borderRight: { xs: 'none', md: '1px solid #00000040' } }} display={"flex"} direction="row"
                justifyContent="space-between"
                alignItems="center">
                <Box>
                  <Typography>
                    <img className='desc-icon' src="https://cdn-icons-png.flaticon.com/512/99/99744.png" alt="power" />
                  </Typography>
                  <Typography>Power</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: '600', opacity: '0.8' }} gutterBottom variant='body1'>{vehicle?.power}</Typography>
                  <Typography sx={{ fontWeight: '600', opacity: '0.8' }} gutterBottom variant='body1'>hp</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid md={4} xs={12} item>
              <Box sx={{ p: 3, mt: 2, }} display={"flex"} direction="row"
                justifyContent="space-between"
                alignItems="center">
                <Box>
                  <Typography>
                    <img className='desc-icon' src="http://cdn.onlinewebfonts.com/svg/img_262978.png" alt="torque" />
                  </Typography>
                  <Typography>Torque</Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: '600', opacity: '0.8' }} gutterBottom variant='body1'>{vehicle?.torque}</Typography>
                  <Typography sx={{ fontWeight: '600', opacity: '0.8' }} gutterBottom variant='body1'>lb-ft</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
