import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Box } from '@mui/system';
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
                        name="name"
                        type="text"
                        placeholder="Alexis DeCicco"
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
                        name="userName"
                        type="text"
                        placeholder="AlexisDeCoy"
                    />
                </FormControl>
            </Box>

            <FormControl sx={{ width: '40%', mx: 'auto' }}>
                <FormLabel sx={{ color: '#CA0B4A' }}>Email or Phone</FormLabel>
                <Input
                    sx={{
                        border: 1,
                        borderColor: '#f92f60',
                        color: '#CA0B4A'
                    }}
                    // html input attribute
                    name="emailPhone"
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
                        name="confirmPassword"
                        type="password"
                        placeholder="password"
                    />
                </FormControl>
            </Box>
            <Button sx={buttonSX}>
                Sign Up
            </Button>
        </Sheet>
    );
}

export default Register;