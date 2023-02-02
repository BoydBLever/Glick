import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Box } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import axios from 'axios';
// import { styled } from '@mui/material/styles';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';

const uplick = require('./upArrow.png');
const downlick = require('./downArrow.png');
const PFP = require('./downlick.png');


const PostCard = (props) => {
    const [post, setPost] = useState({});
    const [user, setUser] = useState({});
    const [profileImg, setProfileImg] = useState('');
    const [up, setUp] = useState(0);
    const [down, setDown] = useState(0);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/posts/${props.id}`)
            .then(res => {
                setPost(res.data);
                setUp(res.data.uplicks);
                setDown(res.data.downlicks);
                return axios.get(`http://localhost:8000/api/getByEmail/${res.data.poster}`)
                    .then(res => {
                        console.log(res);
                        setUser(res.data);
                    })
                    .catch(err => console.error(err));
            })
            .catch(err => console.error(err));
    }, []);

    const clickUpLick = () => {
        setUp(up + 1);
        axios.put(`http://localhost:8000/api/${props.id}/updatepost`, {
            uplicks: {up}
        })
            .then(res => {
                setPost(res.data);
            })
            .catch(err => console.error(err));
    }

    const clickDownLick = () => {
        setDown(down + 1);
        axios.put(`http://localhost:8000/api/${props.id}/updatepost`, {
            downlicks: {down}
        })
            .then(res => {
                setPost(res.data);
            })
            .catch(err => console.error(err));
    }

    const getUserInfo = () => {
    }

    return (
        <Card sx={{
            mx: 'auto',
            my: '15px',
            width: '90%',
            // height: '200px',
            py: '10px',
            border: 1,
            borderColor: '#89029C',
            borderRadius: '20px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }}>
            {/* <CardHeader
                title="Shrimp and Chorizo Paella"
                subheader="DATE"
            /> */}
            {/* <CardMedia
                component="img"
                flex='1'
                image={uplick}
                alt="Test"
            /> */}
            <Box
                component="img"
                sx={{
                    height: '150px',
                    width: '30%',
                    minWidth: '200px'
                }}
                alt="Uplick"
                src={post.img}
            />
            <CardContent sx={{
                width: "30%",
                minWidth: '200px'
            }}>
                <Typography variant="body2" color="text.secondary">CONTENT: {post.content}</Typography>
                <Typography variant="body2" color="text.secondary">POSTED BY: {user?.userName}</Typography>
                <Typography variant="body2" color="text.secondary">DATE: {post.createdAt}</Typography>

            </CardContent>
            <Box sx={{
                ml: '-50px',
                display: 'flex',
                width: '30%',
                minWidth: '200px',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <CardActions disableSpacing>
                    <IconButton
                        onClick= {clickUpLick}
                        aria-label="uplick">
                        <Box
                            component="img"
                            sx= {{
                                height: 50,
                                width: 70,
                            }}
                            alt="Uplick"
                            src={uplick}
                        />
                        <Typography>{up}</Typography>
                    </IconButton>

                    <IconButton 
                        onClick={clickDownLick}
                        aria-label="downlick">
                        <Box
                            component="img"
                            sx={{
                                height: 50,
                                width: 70,
                                // maxHeight: { xs: 233, md: 167 },
                                // maxWidth: { xs: 350, md: 250 },
                            }}
                            alt="Downlick"
                            src={downlick}
                        />
                        <Typography>{down}</Typography>
                    </IconButton>
                </CardActions>
                <Box
                    component="img"
                    sx={{
                        height: 50,
                        width: 50,
                        ml: 'auto'
                        // width: 70,
                        // maxHeight: { xs: 233, md: 167 },
                        // maxWidth: { xs: 350, md: 250 },
                    }}
                    alt="PFP"
                    src={user?.img}
                />
            </Box>
            {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}

            {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse> */}
        </Card >
    );
}

export default PostCard;