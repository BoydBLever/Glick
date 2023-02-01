import React from 'react';
import { Box } from '@mui/system';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Input } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const inputSX = {
    border: 1,
    borderColor: '#f92f60',
    color: '#CA0B4A',
    "&:hover": {
        // borderCcolor: 'green'
    }
}

const buttonSX = {
    mt: '12px',
    bgcolor: '#f92f60',
    color: 'white',
    "&:hover": {
        bgcolor: '#CA0B4A'
    }
}

const NewPost = (props) => {
  
    const [formData, setFormData] = useState({
        content: "",
        flavor: "",
        img: ""
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const onChangeHandler = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new product
        axios.post('http://localhost:8000/api/login', formData)
            .then(res => {
                console.log(res)
                navigate(`/${formData.email}/landing`)
            })
            .catch(err => {
                // console.log("test");
                // navigate('/error');
                setErrors({errors: 'Email or password is incorrect'});
            })
    }
    
  return (
    <Box>
        {/* IMG PREVIEW GOES HERE */}
        <Box>
        <Box
            sx={{
                width: '50%',
                mx: 'auto', // margin left & right
                my: 4, // margin top & botom
                py: 3, // padding top & bottom
                px: 2, // padding left & right
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                border: 1,
                borderColor: '#F92F60',
                borderRadius: '50px',
                boxShadow: 'md'
            }}
        >
            <Box sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
            
            <Typography sx={{ color: '#CA0B4A' }} variant="h3">Cook Up A Post</Typography>
            </Box>
                {
                    errors.errors && (
                        <Typography sx={{color: 'red', mx: 'auto'}}> {errors.errors} </Typography>
                    )
                }
            <FormControl>
                <FormLabel sx={{ color: '#CA0B4A' }}>Content</FormLabel>
                <Input
                    sx={inputSX}
                    // html input attribute
                    onChange={onChangeHandler}
                    name="content"
                    type="content"
                    placeholder="A selfie with my kitten"
                />
            </FormControl>
            <FormControl>
                <FormLabel sx={{ color: '#CA0B4A' }}>Flavors</FormLabel>
                <Input
                    sx={{
                        border: 1,
                        borderColor: '#f92f60',
                        color: '#CA0B4A'
                    }}
                    onChange={onChangeHandler}
                    name="flavor"
                    type="flavor"
                    placeholder="Selfie"
                />
            </FormControl>
            <Button sx={buttonSX} onClick={onSubmitHandler}>
                POST
            </Button>
        </Box>
        </Box>
    </Box>
  )
}

export default NewPost