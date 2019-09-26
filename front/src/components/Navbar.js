import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    
return(
    <div>
    <Link to="/">Home </Link>
    <Link to="/test/one">test1 </Link>
    <Link to="/test/two">test2 </Link>
    </div>
)

}

export default Navbar;
