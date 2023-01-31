import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Box } from '@mui/system';
import Link from '@mui/joy/Link';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { styled } from "@mui/system";

// import { bgcolor, color } from '@mui/system';

const logo = require('./uplick.png');

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

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
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
        <Sheet
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
                <Typography sx={{ color: '#CA0B4A' }} variant="h3">Get Licking</Typography>
            </Box>
                {
                    errors.errors && (
                        <Typography sx={{color: 'red', mx: 'auto'}}> {errors.errors} </Typography>
                    )
                }
            <FormControl>
                <FormLabel sx={{ color: '#CA0B4A' }}>Email</FormLabel>
                <Input
                    sx={inputSX}
                    // html input attribute
                    onChange={onChangeHandler}
                    name="email"
                    type="email"
                    placeholder="johndoe@email.com"
                />
            </FormControl>
            <FormControl>
                <FormLabel sx={{ color: '#CA0B4A' }}>Password</FormLabel>
                <Input
                    sx={{
                        border: 1,
                        borderColor: '#f92f60',
                        color: '#CA0B4A'
                    }}
                    onChange={onChangeHandler}
                    name="password"
                    type="password"
                    placeholder="password"
                />
            </FormControl>
            <Button sx={buttonSX} onClick={onSubmitHandler}>
                Log in
            </Button>
            <Typography
                // endDecorator={}
                fontSize="sm"
                sx={{
                    alignSelf: 'center',
                    color: '#CA0B4A'
                }}
            >
                Don't have an account? <Link href="/register">Sign up</Link>
            </Typography>

        </Sheet>
    );
}

export default Login;