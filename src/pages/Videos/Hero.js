import React from 'react'
import { Box } from '@mui/material'
import ReactPlayer from 'react-player/youtube'

export default function Hero({ url }) {
    return (
        <Box>
            <div className='player-wrapper'>
                <ReactPlayer
                    playing={true}
                    className='react-player'
                    width='100%'
                    height='100%'
                    url={url}
                    config={{
                        youtube: {
                            playerVars: { showinfo: 0 }
                        }
                    }}
                />
            </div>
        </Box>
    )
}
