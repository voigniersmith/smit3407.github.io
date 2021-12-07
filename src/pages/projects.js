import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Button, Typography } from '@material-ui/core';
import MyPicture from '../pictures/IMG_1440.jpg';
import Memory from '../pictures/memory.jpg';
import Omega from '../pictures/omega.jpg';
import Bash from '../pictures/bash_logo.jpg';
import Pixels from '../pictures/pixel_pic.jpg';
import Butterfly from '../pictures/butterfly.jpg';

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
    link.download = `ppps_release.zip`;
    link.href = "../../ppps_release.zip";
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
            <CardActionArea href="https://www.cs.purdue.edu/homes/grr/SystemsProgrammingBook/Book/Chapter5-WritingYourOwnShell.pdf">
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
                <Button size="small" color="black" href="https://en.wikipedia.org/wiki/Bash_(Unix_shell)">
                Learn More
                </Button>
            </CardActions>
          </Card>
          <br/>
          <Card maxWidth='inherit'>
            <CardActionArea href="https://docs.google.com/document/d/1sSeSvT-moXmOSITcWFRffmh0Ieaf204r8f43A8PKs-Y/edit?usp=sharing">
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
                <Button size="small" color="black" href="https://www.youtube.com/watch?v=m_u6P5k0vP0">
                Learn More
                </Button>
            </CardActions>
          </Card>
          <br/>
          <Card maxWidth='inherit'>
            <CardActionArea href="https://www.cs.purdue.edu/homes/grr/SystemsProgrammingBook/Book/Chapter2-ReviewofPointersandMemoryAllocation.pdf">
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
                <Button size="small" color="black" href="http://gee.cs.oswego.edu/dl/html/malloc.html">
                Learn More
                </Button>
            </CardActions>
          </Card>
          <br/>
          <Card maxWidth='inherit'>
            <CardActionArea href="https://drive.google.com/file/d/12zxO3UlrUImNdKPHySNK3ypuLqBEqUtI/view?usp=sharing">
                <CardMedia
                className={classes.media}
                image={Butterfly}
                title="Check Unsplash.com for more free-to-use photos"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Creating an Automated Bug Detection Tool
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Learned how likely-invariants from call graphs, reminiscent to the automatic bug detection tool Coverity,
                    are called together. The frequency of function calls led to automatic detection of software bugs.
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="black" href="https://scan.coverity.com/about">
                Learn More
                </Button>
            </CardActions>
          </Card>
          <br/>
          <Card maxWidth='inherit'>
            <CardActionArea href="https://voigniersmith.com/">
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
                <Button size="small" color="black" href="https://github.com/mldangelo/personal-site">
                Learn More from my Inspiration
                </Button>
            </CardActions>
        </Card>
    </Container>
  );
}