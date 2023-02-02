import React from 'react'
import { Box } from "@mui/system";
import Typography from '@mui/material/Typography';
import Button from '@mui/joy/Button';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


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

const Enlarge = (props) => {
    const [user, setUser] = useState({});
    const { email } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getById/${props.id}`)
            .then(res => {
                console.log(res)
                setUser(res.data)
            })
            .catch(err => console.error(err));
    }, [props.id]);

    const deleteUser = () => {
        console.log(props.id);

        if (window.confirm("Are you sure you want to ignore this user?")) {

            axios.delete(`http://localhost:8000/api/user/${props.id}`)
            .then(res => {
                console.log(res.data);
                console.log("DB DELETE IS SUCCESSFUL!");
                window.location.reload(false);
            })
            .catch(err => console.log(err))
        }
    }

    return (
        <Box sx={{
            border: 1,
            py: '10px',
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
                pb: '10px',
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
                    src={user.img}
                />
                <Box>
                    <Typography variant="body2" color="text.secondary">{user.name}</Typography>
                    <Typography variant="body2" color="text.secondary">Groupies In Common: 4</Typography>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
            <Button sx={{...buttonSX, bgcolor: '#43A047',}}>Add Groupie</Button>
            <Button sx={{...buttonSX, bgcolor: '#89029C',}}>Send Message</Button>
            <Button onClick={deleteUser} sx={{...buttonSX, bgcolor: '#FF0000',}}>Ignore</Button>
            </Box>
        </Box>
    )
}

export default Enlarge;