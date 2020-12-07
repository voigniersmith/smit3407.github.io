import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyPicture from '../pictures/IMG_1440.jpg'

// Material UI Stuff
import { Box, Button, Card, CardContent, CardMedia, Divider, IconButton, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline'

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
    icon: {
        minWidth: 8,
    },
  }));

export default function MyCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia component="img" alt="Andrew Smith" className={classes.picture} image={MyPicture} title="Andrew Smith" />
            <CardContent>
                <Typography gutterBottom variant="h5">
                    Andrew Smith
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    smit3407@purdue.edu
                </Typography>
                <br />
                <Divider variant="fullwidth" horizontal />
                <br />
                <Typography variant="body1" color="textPrimary" component="p" paragraph>
                    Hello Internet
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" letterSpacing={2}>
                    My name is Andrew. I currently go to school at Purdue University as a 
                    Computer Science major. I am pursuing an internship while working as a Resident
                    Assistant on campus.
                </Typography>
                <br />
                <Divider variant="fullwidth" horizontal />
                <br />
                <Button disableRipple style={{ maxWidth: '20%', minWidth: '20%' }} href="https://github.com/smit3407"><GitHubIcon /></Button>
                <Button disableRipple style={{ maxWidth: '20%', minWidth: '20%' }} href="https://www.facebook.com/profile.php?id=100003999054326"><FacebookIcon /></Button>
                <Button disableRipple style={{ maxWidth: '20%', minWidth: '20%' }} href="https://www.instagram.com/andrewnook4/"><InstagramIcon /></Button>
                <Button disableRipple style={{ maxWidth: '20%', minWidth: '20%' }} href="https://www.linkedin.com/in/andrew-smith-21892b1a1/"><LinkedInIcon /></Button>
                <Button disableRipple style={{ maxWidth: '20%', minWidth: '20%' }} href="mailto:smit3407@purdue.edu"><MailOutlineIcon /></Button>
            </CardContent>
        </Card>
    );
}