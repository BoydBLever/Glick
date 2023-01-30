import PostCard from "./PostCard";
import Enlarge from "./Enlarge";
import { Box } from "@mui/system";
// import Divider from '@mui/joy/Divider';

const Landing = () => {
    return (
        // Everything box
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
        }}>
            {/* PINK BOX */}
            <Box sx={{
                bgcolor: '#F8CECC',
                mx: 'auto',
                width: '60%',
                height: '300',
                display: 'flex',
                justifyContent: 'center',
                py: '25px'
            }}>
                {/* map recent posts */}
                <PostCard />

                {/* <ResponsiveDrawer/> */}
            </Box>
            {/* DIVIDER */}
            <Box sx={{
                width: '1px',
                height: '80vh',
                bgcolor: 'black',

            }} />
            <Box sx={{
                // bgcolor: '#F8CECC',
                mx: 'auto',
                width: '30%',
                height: '300',
                display: 'flex',
                justifyContent: 'center',
                py: '25px'
            }}>
                <Enlarge/>
            </Box>
        </Box>
    )
}






export default Landing;