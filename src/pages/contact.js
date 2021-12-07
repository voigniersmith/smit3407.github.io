import { Box, Button, Card, CardContent, CardMedia, Container, Divider, IconButton, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import { makeStyles } from '@material-ui/core/styles';

const classes = makeStyles((theme) => ({
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

export default function Contact() {
    return (
        <Container maxWidth='xs'>
            <h2>Contact</h2>
            <Typography>
                You can email me at smit3407@purdue.edu or click the mail icon below.
                I am available for contact on Facebook, Instagram, and LinkedIn, but I
                honestly only check my email, smit3407@purdue.edu. 
            </Typography>
            <br />
            <Divider variant="fullwidth" horizontal />
            <br />
            <h2>Buttons</h2>
            <Card className={classes.root}>
                <CardContent>
                    <Button disableRipple style={{ maxWidth: '20%', minWidth: '20%' }} href="https://github.com/smit3407"><GitHubIcon /></Button>
                    <Button disableRipple style={{ maxWidth: '20%', minWidth: '20%' }} href="https://www.facebook.com/profile.php?id=100003999054326"><FacebookIcon /></Button>
                    <Button disableRipple style={{ maxWidth: '20%', minWidth: '20%' }} href="https://www.instagram.com/andrewnook4/"><InstagramIcon /></Button>
                    <Button disableRipple style={{ maxWidth: '20%', minWidth: '20%' }} href="https://www.linkedin.com/in/voigniersmith/"><LinkedInIcon /></Button>
                    <Button disableRipple style={{ maxWidth: '20%', minWidth: '20%' }} href="mailto:smit3407@purdue.edu"><MailOutlineIcon /></Button>
                </CardContent>
            </Card>
        </Container>
    );
}