import React from 'react'
import { Box } from "@mui/system";
import Typography from '@mui/material/Typography';
import Button from '@mui/joy/Button';

const uplick = require('./upArrow.png');

const Enlarge = () => {
    return (
        <Box sx={{
            border: 1,
            borderColor: 'red',
            width: '100%'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}>
                <Box
                    component="img"
                    sx={{
                        height: '100px',
                        // width: 70,
                        // maxHeight: { xs: 233, md: 167 },
                        // maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="Uplick"
                    src={uplick}
                />
                <Box>
                    <Typography variant="body2" color="text.secondary">NAME</Typography>
                    <Typography variant="body2" color="text.secondary">GROUPIES IN COMMON</Typography>
                </Box>
            </Box>
            <Box>
            <Button>Sign Up</Button>
            </Box>
        </Box>
    )
}

export default Enlarge;