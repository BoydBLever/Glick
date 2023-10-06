import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import PostCard from "./PostCard";
import Enlarge from "./Enlarge";
import Box from "@mui/material/Box";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React from "react";
import axios from 'axios';
import { Button, Typography } from '@mui/material';
// import Divider from '@mui/joy/Divider';


const Landing = () => {
    const [sort, setSort] = useState('recent');
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const { email } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/posts`)
            .then(res => {
                // console.log(res);
                setPosts(res.data)
                return axios.get(`http://localhost:8000/api/users`)
                    .then (res => {
                        console.log("Look Here!")
                        console.log(res);
                        setUsers(res.data);
                    })
                    .catch(err => console.error(err));
            })
            .catch(err => console.error(err));
    }, []);

    const handleChange = (event) => {
        setSort(event.target.value);
    };

    const newPost = () => {
        navigate(`/${email}/newpost`)
    }



    return (
        // Everything box
        <Box sx={{
            display: 'flex',
            alignItems: 'flex-start'
        }}>
            {/* OUTER BOX LEFT */}
            <Box sx={{
                width: '60%',
                mx: 'auto',
                mt: 4
            }}>
                {/* SELECT */}
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth sx={{
                        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "0",
                            borderRadius: "0"
                        }
                    }}>
                        {/* <Typography variant='h4'>Sort</Typography> */}
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={sort}
                            // label="Age"
                            onChange={handleChange}
                            sx={{
                                border: 1,
                                borderColor: '#f92f60',
                                color: '#CA0B4A',
                                "&:hover": {
                                    "&& fieldset": {
                                        border: "none"
                                    }
                                }
                            }}
                        >
                            <MenuItem value={'recent'}>Most Recent Posts</MenuItem>
                            <MenuItem value={'groupies'}>Groupies Posts</MenuItem>
                            <MenuItem value={'yours'}>Your Posts</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                {/* PINK */}
                <Box sx={{
                    bgcolor: '#F8CECC',
                    mx: 'auto',
                    width: '100%',
                    height: 450,
                    // display: 'flex',
                    justifyContent: 'center',
                    py: '10px',
                    maxHeight: 450,
                    overflow: 'auto'
                }}>
                    {/* map recent posts */}
                    {posts.map((post, i) =>
                        <div key={i}>
                            <PostCard id={post._id} />
                        </div>
                    )}
                    {/* <ResponsiveDrawer/> */}
                </Box>
                <Button onClick={newPost} sx={{
                    mt: '15px',
                    width: '75px',
                    height: '75px',
                    border: 1,
                    borderRadius: '75px',
                    fontSize: '50px',
                    color: '#CA0B4A',
                    borderColor: '#89029C',
                }}>+</Button>
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
                textAlign: 'center',
            }}>
                <Typography variant='h4' sx={{color: '#CA0B4A', mx: 'auto'}}>Enlarge Your Group</Typography>
                {users.map((user, i) =>
                    <div key={i}>
                        <Enlarge id={user._id} />
                    </div>
                )}
            </Box>
        </Box>
    )
}

export default Landing;
