import React from "react";
import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom";
import Product from "./componente/products/Product";
import NewProduct from "./componente/products/NewProduct";


import LandingPage from "./componente/LandingPage";
import ContactUs from "./componente/ContactUs";
import NotFound from "./componente/NotFound";

import Header from "./componente/Header";
import Footer from "./componente/Footer";
import UpdateProduct from "./componente/products/UpdateProduct";
import Login from "./componente/auth/Login";
import Register from "./componente/auth/Register";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from '@material-ui/core/Container';

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




function App() {
  return (
    <Router>
      
    <div>
    <ToastContainer />
     <Header />
     <Container fixed>
     <Paper  elevation={10} style={{background:'white',marginTop:"0px",height:"120px",textAlign:"center",justifyItems:"center",alignItems:"center"}} ><h1 style={{margin:"2rem"}}>Seller</h1>
     <hr/>
     <ul stlye={{textAlign:"center",justifyItems:"center",alignItems:"center",}}>
       <li>T-shirts</li>
       <li>Hoddies</li>
       <li>Pent</li>
     </ul>
     </Paper>
     </Container>
      <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
        <Route path="/products/new" component={NewProduct}/>
        <Route path="/products/update/:id" component={UpdateProduct}/>
        <Route path="/products" component={Product}/>
        <Route path="/ContactUs" component={ContactUs}/>
        <Route path="/not-found" component={NotFound}/>
        <Route path="/" exact component={LandingPage}/>
        <Redirect to="/not-found" />
        
       
      </Switch>
     
     <Footer />
    </div>  
    </Router>);
}

export default App;
