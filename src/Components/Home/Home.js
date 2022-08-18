import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Fade from 'react-reveal/Fade';
// import { connect } from 'react-redux';
import { Grid } from '@mui/material';


function Home() {
 
  return (
    <div>
      <Grid 
        container
        justifyContent="center" 
        // alignItems="center"
        className="background"
      >
        <Fade top>
          <Link to="/aboutPage" className='linkText'>
            <div className='backgroundText'>Hi, this is <br/> Gabriel's webpage !!! </div>
          </Link>
        </Fade>
      </Grid>
    </div>
  )
}

export default Home