import { Container, Typography } from '@material-ui/core'

export default function About() {
    return (
        <Container maxWidth='xs'>
            <h2>About Me</h2>
            <Typography>
                Uhhhhhh, I can update this later, but shortly, I am a nerdy dork.
            </Typography>
            <h2>What do I do?</h2>
            <Typography>
                I study at Purdue! I am a full time student in computer science with
                a focus in software engineering. I do research, part-time, with Purdue's
                industrial engineering and nursing programs
            </Typography>
            <h2>Likes</h2>
            <Typography>
                Coffee<br />
                Baking<br />
                Running<br />
                Music Theory<br />
            </Typography>
            <h2>Other Stuff</h2>
            <Typography>
                Other information about me will go here.
            </Typography>
        </Container>
    );
}