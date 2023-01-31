import PostCard from "./PostCard";
import Enlarge from "./Enlarge";
import { Box } from "@mui/system";
// import Divider from '@mui/joy/Divider';

const Landing = () => {
    return (
        // Everything box
        <Box sx={{
            display: 'flex',
            alignItems: 'center'
        }}>
            {/* PINK BOX OUTER */}
            <Box>
                
                <Box sx={{
                    bgcolor: '#F8CECC',
                    mx: 'auto',
                    width: '60%',
                    height: 450,
                    // display: 'flex',
                    justifyContent: 'center',
                    py: '25px',
                    maxHeight: 450,
                    overflow: 'auto'
                }}>
                    {/* map recent posts */}
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />

                    {/* <ResponsiveDrawer/> */}
                </Box>
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
                height: '80vh',
                maxHeight: '80vh',
                py: '25px',
                overflow: 'auto',
            }}>
                <Enlarge />
                <Enlarge />
                <Enlarge />
                <Enlarge />
                <Enlarge />
                <Enlarge />
                <Enlarge />
                <Enlarge />
            </Box>
        </Box>
    )
}






export default Landing;