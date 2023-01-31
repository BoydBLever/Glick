import React from 'react'
import { Box } from "@mui/system";
import Typography from '@mui/material/Typography';
import Button from '@mui/joy/Button';

const uplick = require('./uplick.png');

const buttonSX = {
    mb: '12px',
    width: '30%',
    mx: 'auto',
    
    color: 'white',
    "&:hover": {
        bgcolor: '#CA0B4A'
    }
}

const Enlarge = () => {
    return (
        <Box sx={{
            border: 1,
            borderRadius: '10px',
            mx: 'auto',
            my: '15px',
            bgcolor: '#E1D5E7',
            borderColor: '#F92F60',
            width: '90%'
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mx: '25px',
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
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
            <Button sx={{...buttonSX, bgcolor: '#43A047',}}>Add Groupie</Button>
            <Button sx={{...buttonSX, bgcolor: '#89029C',}}>Send Message</Button>
            <Button sx={{...buttonSX, bgcolor: '#FF0000',}}>Ignore</Button>
            </Box>
        </Box>
    )
}

export default Enlarge;