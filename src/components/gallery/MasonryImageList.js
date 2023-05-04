import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageLoader from "../../images/loader/loader.gif";
export default function MasonryImageList({ itemData }) {
  const [imageLoading, setImageLoading] = React.useState(true)
  return (
    <Box>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              onLoad={() => setImageLoading(false)}
              src={imageLoading ? ImageLoader : `${item.img}&w=248&fit=crop&auto=format`}
              srcSet={imageLoading ? ImageLoader : `${item.img}&w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

