import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import { Stack, Paper } from '@mui/material'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import MovieCreationIcon from '@mui/icons-material/MovieCreation'
import TitlebarImageList from "./TitlebarImageList"
import {newCategory, popularCategory, videoCategory} from "../../constants/categories"
import ImageListSkeleton from "../skeleton/ImageListSkeleton"

export default function MainMenus() {

  const [value, setValue] = React.useState(0);
  const [loading, setLoading] = React.useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setLoading(true)
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [loading, value])

  return (
    <Stack sx={{width : '100%', p :  4}}>
      <Box sx={{display : 'flex', justifyContent : 'center'}}>
      <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
          <Tab icon={<NewspaperIcon />} label="New" />
          <Tab icon={<StarHalfIcon />} label="Popular" />
          <Tab icon={<MovieCreationIcon />} label="Video" />
      </Tabs>
      </Box>

      <Box component={Paper} variant="outlined" sx={{ minHeight: '400px', backgroundColor: '#cccccca6', p: 2, border: '2px solid rgb(0 0 0 / 12%)' }}>
        {value === 0 && !loading && <TitlebarImageList data={newCategory} title={"New"} />}
        {value === 1 && !loading && <TitlebarImageList data={popularCategory} title={"Popular"} />}
        {value === 2 && !loading && <TitlebarImageList data={videoCategory} title={"Video"} />}
        {loading && <ImageListSkeleton />}
      </Box>

    </Stack>
  );
}
