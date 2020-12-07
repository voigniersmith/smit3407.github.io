import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MyPicture from '../pictures/IMG_1440.jpg'

// Material UI Stuff
import { Box, Card, CardMedia, Divider} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 343,
        margin: 'auto',
        borderRadius: 12,
        padding: 12,
    },
    picture: {
      width: '100%',
      height: '80%',
      borderRadius: 6,
    },
    email: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'grey',
        marginBottom: 4,
        letterSpacing: '1px',
        textAlign: 'center',
    },
  }));

export default function MyCard() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <CardMedia component="img" alt="Andrew Smith" className={classes.picture} image={MyPicture} title="Andrew Smith" />
            <Divider />
            <Box display={'flex'}>
                <Box p={1} flex={'auto'}>
                    <p className={classes.email}>smit3407@purdue.edu</p>
                </Box>
            </Box>
        </Card>
    );
}