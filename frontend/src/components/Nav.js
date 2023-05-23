import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <> 
            <nav> 
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/createAccount">Create Account</Link>
            <Link to="/Account">Account</Link>
            <Link to="/linkAccount">Link New Account</Link>
            </nav>
        </>
    );
  }
  
  export default Nav;