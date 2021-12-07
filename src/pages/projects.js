import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Button, Typography } from '@material-ui/core';
import MyPicture from '../pictures/IMG_1440.jpg';
import Memory from '../pictures/memory.jpg';
import RaspberryPi from '../pictures/raspberry_pi.jpg';
import Omega from '../pictures/omega.jpg';
import Bash from '../pictures/bash_logo.jpg';
import Pixels from '../pictures/pixel_pic.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const onDownload = () => {
    const link = document.createElement("a");
    link.download = `ppps_release`;
    link.href = "../ppps_release";
    link.click();
  };

export default function Projects() {
  const classes = useStyles();

  return (
    <Container maxWidth='xs'>  
        <Card maxWidth='inherit'>
        <CardActionArea>
                <CardMedia
                className={classes.media}
                image={Pixels}
                title="A basic scenario in the game"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Powder Pixel Physics Simulator
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Final Project for CS 535 - Intro to Computer Graphics. Meant
                    to be a demonstration of a shader and GPU programming.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={onDownload} size="small" color="black">
                    Download
                </Button>
            </CardActions>
          </Card>
          <br/>
          <Card maxWidth='inherit'>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={Bash}
                title="Check BashLogo.com for the picture"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Shell Interpreter
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Assembled a command-line interpreter in C and C++ that
                    combines behavior from common shells, including bash and csh,
                    implementing features such as pipes and wildcards
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="black">
                Learn More
                </Button>
            </CardActions>
          </Card>
          <br/>
          <Card maxWidth='inherit'>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={Omega}
                title="CS 307 - Intro to Software Engineering"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Omilia
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Designed and developed a website that emulates common social sites
                    such as Twitter, Facebook, and Reddit using a React and Firebase framework.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="black">
                Learn More
                </Button>
            </CardActions>
          </Card>
          <br/>
          <Card maxWidth='inherit'>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={Memory}
                title="Check Unsplash.com for more free-to-use photos"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Memory Allocator
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Implemented a version of Doug Lea’s memory allocator in C that
                    requests memory from the OS, deallocates when called, and manages data efficiently.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="black">
                Learn More
                </Button>
            </CardActions>
          </Card>
          <br/>
          <Card maxWidth='inherit'>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={RaspberryPi}
                title="Check Unsplash.com for more free-to-use photos"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Google Home and Raspberry Pi (In Progress)
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    This is a personal project to connect the voice control of the Google Home
                    to a Raspberry Pi - hosted - Node server that will control LED strips in
                    my room.   
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="black">
                Learn More
                </Button>
            </CardActions>
          </Card>
          <br/>
          <Card maxWidth='inherit'>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={MyPicture}
                title="Attractive Andrew Smith"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Personal Portfolio Website
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Designing a single-page React app with Javascript. It represents a
                    short description of me and what I do. It also describes some content
                    I like.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="black">
                Learn More
                </Button>
            </CardActions>
        </Card>
    </Container>
  );
}