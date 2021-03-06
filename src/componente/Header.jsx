import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from "react-router-dom";
import userService from '../services/UserService';
import { Button } from '@material-ui/core';


const Header=()=>{
    return(
        <div>
            <AppBar style={{background:"black",textAlign:"center",justifyItems:"center",alignItems:"center",marginBottom:"0px"}} position="static">
        <Toolbar>
        <ul>
             <li>
                 <Link className="white" to="/" >Home</Link> 
             </li>
             <li>
                 <Link className="white"  to="/products" >Products</Link> 
                 </li>
             <li  >
                 <Link className="white" to="/contactUs" >Contact Us </Link>
                 </li>
                 { !userService.isLoggedIn()?<>
                 <li  >
                 <Link className="white" to="/login" >Admin Account</Link>
                 </li> 
                 
                 </>:<Button variant="contained" color="secondary" onClick={(e)=>{userService.logout();
                window.location.reload();
                }}>Logout{userService.getLoggedInUser().name}</Button>}
                    
         </ul>
          
        </Toolbar>
      </AppBar>
      
        </div>

    );
}
export default Header;