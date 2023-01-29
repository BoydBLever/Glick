import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Box } from '@mui/system';
import Link from '@mui/joy/Link';
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
    mt: '1',
    bgcolor: '#f92f60',
    "&:hover": {
        bgcolor: '#CA0B4A'
    }
}

const Login = () => {
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
                <Typography sx={{ color: '#CA0B4A' }} level="h4">Sign In</Typography>
            </Box>
            <FormControl>
                <FormLabel sx={{ color: '#CA0B4A' }}>Email</FormLabel>
                <Input
                    sx={inputSX}
                    // html input attribute
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
                    name="password"
                    type="password"
                    placeholder="password"
                />
            </FormControl>
            <Button sx={buttonSX}>
                Log in
            </Button>
            <Typography
                endDecorator={<Link href="/sign-up">Sign up</Link>}
                fontSize="sm"
                sx={{
                    alignSelf: 'center',
                    color: '#CA0B4A'
                }}
            >
                Don't have an account?
            </Typography>

        </Sheet>
    );
}

export default Login;