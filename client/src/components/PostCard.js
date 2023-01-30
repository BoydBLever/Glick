import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Box } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
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

// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//     }),
// }));

export default function PostCard() {
    // const [expanded, setExpanded] = React.useState(false);

    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };

    return (
        <Card sx={{
            width: '80%',
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
                    // width: 70,
                    // maxHeight: { xs: 233, md: 167 },
                    // maxWidth: { xs: 350, md: 250 },
                }}
                alt="Uplick"
                src={uplick}
            />
            <CardContent sx={{
                // flex: '1',
            }}>
                <Typography variant="body2" color="text.secondary">NAME</Typography>
                <Typography variant="body2" color="text.secondary">DATE</Typography>
                <Typography variant="body2" color="text.secondary">CONTENT</Typography>

            </CardContent>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
            }}>
                <CardActions disableSpacing>
                    <IconButton aria-label="uplick">
                        <Box
                            component="img"
                            sx={{
                                height: 50,
                                width: 70,
                                // maxHeight: { xs: 233, md: 167 },
                                // maxWidth: { xs: 350, md: 250 },
                            }}
                            alt="Uplick"
                            src={uplick}
                        />
                        <Typography>54</Typography>
                    </IconButton>

                    <IconButton aria-label="downlick">
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
                        <Typography>12</Typography>
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
                src={PFP}
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