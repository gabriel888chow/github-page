import React from 'react'
import './Card.css';
// import {Link} from 'react-router-dom';
import { Fade } from 'react-reveal';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Card({title, text, skill, url1, url2}) {
  return (
 

    <Container maxWidth="xl">
      <Fade bottom>
        <div className='cardList container'>
          <div className='card'>
            <div className='card-contents card-front front-face'>
              <div className='card-3d'>
                  <h6>Project Name:</h6>
                    <h2>{title}</h2>
                  <hr/>
                  <p>{text}</p>
                  <br/>
                  <p>Skill: {skill}</p>
              </div>
            </div>
            {/* card back  */}
            <div className='card-contents card-back back-face'>
              <div className='card-3d'>
                <h2>Check my link</h2>
                <div>
                  <a href={url1} className="btn btn-outline m-2"> Github </a>
                  <a href={url2} className="btn btn-outline m-2"> Link Page </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      
      {/* <React.Fragment>
        <CardContent className='cardList container'>
          <Typography component="div" className='card'>
            <Typography component="div" className='card-contents card-front front-face'>
              <Typography component="div" className='card-3d'>
                  <Typography variant="h6">Project Name:</Typography>
                    <Typography variant="h4">{title}</Typography>
                  <br/>
                  <Typography variant="body2" gutterBottom>{text}</Typography>
                  <br/>
                  <Typography variant="body2" gutterBottom>Skill: {skill}</Typography>

                  <Typography component="div" className='card-contents card-back back-face'>
                    <Typography component="div" className='card-3d'>
                      <Typography variant="h4">Check my link</Typography>
                      <Typography>
                        <Button variant="outlined" href={url1} className="btn btn-outline m-2"> Github </Button>
                        <Button variant="outlined" href={url2} className="btn btn-outline m-2"> Link Page </Button>
                      </Typography>
                    </Typography>
                  </Typography>

              </Typography>
            </Typography>
          </Typography>
        </CardContent>
      </React.Fragment> */}

    </Container>
  )
}
