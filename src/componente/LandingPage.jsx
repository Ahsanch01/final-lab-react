import React from 'react'
import { makeStyles } from '@material-ui/core/styles';





const useStyles = makeStyles((theme) => ({
    pic:{
      minHeight:'100vh',
      backgroundImage:`url(${process.env.PUBLIC_URL+ '/images/nd.jpg'})`,
      backgroundRepeat:"no-repeat",
      backgroundSize:'cover'
    }
  }));




const LandingPage=()=>{
    const classes=useStyles();
    return(
        <div >
        <h1></h1>
        

        </div>
    );

}
export default LandingPage;