import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      margin:'5rem',
      
      '& > *': {
        margin: theme.spacing(16),
        width:theme.spacing(10),
        height: theme.spacing(10),
      },
    },
    root1: {
        display: 'flex',
        '& > *': {
          margin: theme.spacing(1),
        },
      },
  }));
const ContactUs=()=>{
    const classes = useStyles();

return(
    <div >
        <br/>
        <br/>
        <Paper  elevation={10} style={{margin:'5rem',background:'yellow'}} ><h2 style={{margin:"2rem"}}>Contact Us page</h2></Paper>
        <Paper style={{background:'yellow'}} elevation={10} className={classes.root} >
        <Avatar alt="Ahsan" src="/images/mypic.jpeg" />
            <h2>Muhammad Ahsan</h2>
            <p>SP18-Bse-180</p>
            <p><b>Section:</b>A</p>
            <h3>ahsanjavedch01@gmail.com</h3>
        </Paper>
        <br/>
        <br/>
    </div>
);

}
export default ContactUs;