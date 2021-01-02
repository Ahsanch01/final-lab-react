import React from 'react'
import Grid from '@material-ui/core/grid';
import { Button, Container } from '@material-ui/core';
import productService from '../../services/ProductService';
import {withRouter} from "react-router";
import userService from '../../services/UserService';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    pic1:{
        minHeight:'20vh',
        backgroundImage:`url(${process.env.PUBLIC_URL+ '/images/2.jpg'})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:'cover'
      },



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





const SingleProduct=(props)=>{
    const classes=useStyles();
    const {product,onDelete}=props;
    console.log(props);

    return (
        
    
    <Grid item  xs={3}>
        <Paper elevation={10} style={{margin:"20px"}}>
        <h1 className={classes.pic1}></h1>
            <h2  style={{textAlign:"center"}} >{product.name}
            {userService.isAdmin() &&(
            <> 
            <Button variant="contained"  color="secondary" onClick={e=>{
                productService.deleteProduct(product._id).then((data)=>{console.log(data);
                onDelete();}).catch((err)=>{console.log(err);}); 
            }}>Delete</Button>
            <Button variant="contained" color="primary" onClick={(e)=>{
            console.log("navigate to update");
            props.history.push("/products/update/"+product._id);
            }}>Edit</Button>
            </>
            )}
            </h2>
           
            <p><b>Price   :</b>{product.price}</p>
            <p><b>Address :</b>{product.address}   </p>
            <p><b>Id      :</b>{product.number}</p>
            <hr/>
            <Button variant="contained" style={{background:"black",color:"white"}} >Add to Cart</Button>
            </Paper>
    </Grid>
    
    );
  
}
export default withRouter (SingleProduct);