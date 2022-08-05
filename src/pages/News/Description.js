import React from 'react'
import { Grid, Typography } from '@mui/material'
import { GlassMagnifier } from "react-image-magnifiers";

export default function Description({ secondaryImage, subtitle, description, tertiaryImage }) {

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ mt: 2 }}
        >
            <Grid item md={6} xs={12}>
                <Typography sx={{ m: 2, color: 'white', textDecoration: 'underline' }} variant='h4'>{subtitle}</Typography>
                <Typography sx={{ m: 2, color: 'white', textAlign: 'left' }} variant='body1'>{description}</Typography>
            </Grid>

            <Grid sx={{ p: 2 }} item md={6} xs={12}>
                <img className="news-desc-img" src={secondaryImage} alt="description" />
            </Grid>

            <Grid sx={{ mt: 2 }} item md={12} xs={12}>
                <GlassMagnifier
                    imageSrc={tertiaryImage}
                    imageAlt="Example"
                    largeImageSrc={tertiaryImage} // Optional
                />
            </Grid>
        </Grid>
    )
}
