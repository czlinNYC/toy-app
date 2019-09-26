import React from 'react';
import { renderRoutes } from 'react-router-config';
import {Link} from 'react-router-dom';


// the sub-routes are automatically passed in through as props
// when the component is loaded using renderRoutes
const Landing = props => {
    const { route } = props;
return(
    <div>
        <Link to="/landing/login">Login</Link>
        <Link to="/landing/register">Register</Link>
        {renderRoutes(route.routes)}
        <Link to="/test/one">View container</Link>
        
    </div>
)

}

export default Landing;