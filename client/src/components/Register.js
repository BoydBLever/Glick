import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import Link from '@mui/joy/Link';
// import { bgcolor, color } from '@mui/system';
// import Box from '@mui/joy/Box';

const logo = require('./uplick.png');

const buttonSX = {
    mt: '12px',
    width: '40%',
    mx: 'auto',
    bgcolor: '#f92f60',
    color: 'white',
    "&:hover": {
        bgcolor: '#CA0B4A'
    }
}

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const onChangeHandler = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new product
        axios.post('http://localhost:8000/api/register', formData)
            .then(res => {
                console.log(res)
                navigate(`/${formData.email}/landing`)
            })
            .catch(err => {
                // console.log("test");
                // navigate('/error');
                setErrors(err.response.data.errors);
            })
    }

    return (
        <Sheet
            sx={{
                width: '75%',
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
                <Box
                    component="img"
                    sx={{
                        height: 100,
                        width: 100,
                        // maxHeight: { xs: 233, md: 167 },
                        // maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="Uplick Logo"
                    src={logo}
                />
                <Typography sx={{ color: '#CA0B4A' }} variant='h3'>Cook Up An Account</Typography>
            </Box>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap'
            }}>
                <FormControl sx={{ width: '40%', minWidth: '100px', mx: 'auto' }}>
                    <FormLabel sx={{ color: '#CA0B4A' }}>Name</FormLabel>
                    <Input
                        sx={{
                            border: 1,
                            borderColor: '#f92f60',
                            color: '#CA0B4A'
                        }}
                        // html input attribute
                        onChange={onChangeHandler}
                        name="name"
                        type="text"
                        placeholder="Boyd Lever"
                    />
                </FormControl>
                <FormControl sx={{ width: '40%', minWidth: '100px', mx: 'auto' }}>
                    <FormLabel sx={{ color: '#CA0B4A' }}>Username</FormLabel>
                    <Input
                        sx={{
                            border: 1,
                            borderColor: '#f92f60',
                            color: '#CA0B4A'
                        }}
                        onChange={onChangeHandler}
                        name="userName"
                        type="text"
                        placeholder="BoydLever"
                    />
                </FormControl>
            </Box>

            <FormControl sx={{ width: '40%', mx: 'auto' }}>
                <FormLabel sx={{ color: '#CA0B4A' }}>Email</FormLabel>
                <Input
                    sx={{
                        border: 1,
                        borderColor: '#f92f60',
                        color: '#CA0B4A'
                    }}
                    // html input attribute
                    onChange={onChangeHandler}
                    name="email"
                    type="text"
                    placeholder="johndoe@email.com"
                />
            </FormControl>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap'
            }}>
                <FormControl sx={{ width: '40%', minWidth: '100px', mx: 'auto' }}>
                    <FormLabel sx={{ color: '#CA0B4A' }}>Password</FormLabel>
                    <Input
                        sx={{
                            border: 1,
                            borderColor: '#f92f60',
                            color: '#CA0B4A'
                        }}
                        // html input attribute
                        onChange={onChangeHandler}
                        name="password"
                        type="password"
                        placeholder="password"
                    />
                </FormControl>
                <FormControl sx={{ width: '40%', minWidth: '100px', mx: 'auto' }}>
                    <FormLabel sx={{ color: '#CA0B4A' }}>Confirm Password</FormLabel>
                    <Input
                        sx={{
                            border: 1,
                            borderColor: '#f92f60',
                            color: '#CA0B4A'
                        }}
                        onChange={onChangeHandler}
                        name="confirmPassword"
                        type="password"
                        placeholder="password"
                    />
                </FormControl>
            </Box>
            <Button sx={buttonSX} onClick={onSubmitHandler}>
                Sign Up
            </Button>
        </Sheet>
    );
}

export default Register;