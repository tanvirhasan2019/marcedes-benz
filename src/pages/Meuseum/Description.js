import React from 'react'
import { Link, Grid } from '@mui/material'
import Button from '@mui/material/Button';

export default function Description() {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
        >
            <Grid item md={5}>
                <p className='desc-headline'>Mercedes-Benz Museum.</p>
            </Grid>
            <Grid item md={4}>
                <p className='desc-headline-sub'>
                    The Mercedes-Benz Museum in Stuttgart celebrates the automobile invented by Carl Benz in 1886: it relates its history and tells its stories, bringing both alive by placing them in the context of technology, day-to-day life, social history and popular culture. More than 160 vehicles of all types are the main protagonists. They range from some of the oldest automobiles ever built to legendary racing cars and futuristic research vehicles.
                </p>
                <p style={{ marginTop: '10px' }} className='desc-headline-sub'>
                    Together with other exhibits, they form the centrepiece of the permanent exhibition covering a total of 16,500 square metres in twelve rooms. This unparalleled world can be discovered on two tours that follow a “Legend” and “Collection” narrative.
                </p>
            </Grid>
            <Grid item md={3}>
                <p className='hours-heading'>Opening hours. </p>
                <p className='desc-headline-sub'>
                    Tuesday to Sunday 9 a.m. to 6 p.m.
                    Closed on Monday.
                    Box office closing time: 5 p.m.
                    Last elevator ride: 5:20 pm
                </p>
                <Link href="https://www.mercedes-benz.com/en/art-and-culture/museum/visitor-information/">
                    Opening hours, prices and arrival
                </Link>

                <p style={{ marginTop: '10px' }} className='hours-heading'>Tickets. </p>

                <p style={{ marginTop: '10px' }} className='desc-headline-sub'>
                    Day ticket regular: 12.00 €, reduced: 6.00 €
                    Free entry for children (up to and including the age of 12).
                    Further information on the prices
                    <Link sx={{ ml: 1 }} href="https://www.mercedes-benz.com/en/art-and-culture/museum/visitor-information/">here.</Link>
                </p>
                <Link underline='none' href="https://museum-ticket.mercedes-benz.com/?_ga=2.158142136.304480428.1659967713-1238369732.1659450475">
                    <Button sx={{ P: 1 }} variant="contained">Buy your tickets</Button>
                </Link>

            </Grid>
        </Grid>
    )
}
