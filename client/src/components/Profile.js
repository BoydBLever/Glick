import { Box } from '@mui/system';
import FileBase64 from 'react-file-base64';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from '@mui/material';
import PostCard from "./PostCard";

const buttonSX = {
    mt: '12px',
    bgcolor: '#f92f60',
    color: 'white',
    "&:hover": {
        bgcolor: '#CA0B4A'
    }
}

const Profile = () => {
    const [user, setUser] = useState({})
    const [img, setImg] = useState({ img: '' });
    const [posts, setPosts] = useState([]);
    const { email } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getByEmail/${email}`)
            .then(res => {
                console.log(res);
                setUser(res.data)
            }
            )
            .catch(err => console.error(err));
        axios.get(`http://localhost:8000/api/${email}/posts`)
            .then(res => {
                console.log(res);
                setPosts(res.data)
            }
            )
            .catch(err => console.error(err));
    }, [email]);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log("works");
        axios.put('http://localhost:8000/api/updateUser/' + email, img)
            .then(res => {
                console.log(res)
                // navigate("/")
            })
            .catch(err => {
                console.log(err);
                // setErrors(err.response.data.errors);
            })
    }


    const image = JSON.stringify(img)


    return (
        <>
            <Box sx={{
                display: 'flex',
                mt: '10px',
            }}>
                <Box className sx={{
                    width: '40%',
                    textAlign: 'center',
                    mx: 'auto',
                    mb: '10px',
                    // border: 1,
                    // borderRadius: '10px',
                    py: '10px',
                    px: '20px',
                    // bgcolor: ,
                }}>
                    {img.img === '' ?
                        <img className="activator" style={{ width: '50%' }} src={user.img} />
                        :
                        <img className="activator" style={{ width: '50%' }} src={img.img} />
                    }

                    <form style={{ textAlign: 'center' }} onSubmit={onSubmitHandler}>
                        <FileBase64
                            type='file'
                            multiple={false}
                            onDone={({ base64 }) => setImg({ img: base64 })} /><br />
                        <Button type='submit' sx={buttonSX}>Set Profile Photo</Button>
                    </form>
                </Box>

                <Box sx={{
                    width: '40%',
                    textAlign: 'center',
                    mx: 'auto',
                    mb: '10px',
                    // border: 1,
                    // borderRadius: '10px',
                    py: '10px',
                    px: '20px',
                }}>
                    <Typography variant='h2'>{user.name}</Typography>
                    <Typography variant='h3'>{user.userName}</Typography>
                    <Typography variant='h3'>{user.email}</Typography>
                    <Typography variant='h3'>Groupies: 12</Typography>

                </Box>
            </Box>
            <Box sx={{
                bgcolor: '#F8CECC',
                mx: 'auto',
                width: '60%',
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
            </Box>
        </>
    )

    //  more code....
}

export default Profile;