import { Container, Typography } from '@material-ui/core'

export default function About() {
    return (
        <Container maxWidth='xs'>
            <h2>About Me</h2>
            <Typography>
                Hi! My name is Andrew and I am learning to code for a living. My current
                full time job is learning how to program and improve myself physically
                and mentally. I enjoy working on projects, personal and professional, 
                where I gain an understanding about a new topic.
            </Typography>
            <h2>What do I do?</h2>
            <Typography>
                Quick Clarifications: <br />
                I study at Purdue! <br />
                I am a full time student in computer science with a focus in software engineering! <br />
                I do research, part-time, with Purdue's industrial engineering and nursing programs. <br />
                I was a resident assistant working in Purdue's residence halls. <br />
            </Typography>
            <h2>Interests</h2>
            <Typography>
                Coffee<br />
                Baking<br />
                Improving<br />
                Goals and why they work<br />
                Figuring out why my succulents don't like me <br />
                Goldfish (yes, the snack that smiles back) <br />
                Whales <br />
            </Typography>
            <h2>Other Stuff</h2>
            <Typography>
                I like programming in C the most. After that is Javascript, then Java.
                I have experience with C++, React, Node.js, HTML/CSS, Unity, SQL, and 
                a bunch of other random languages. My major long term goal is to own a house,
                preferably one that I get to decorate. My short term goal is to graduate college. 
            </Typography>
        </Container>
    );
}