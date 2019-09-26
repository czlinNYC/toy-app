import React from 'react';
import { renderRoutes } from 'react-router-config';
// the sub-routes are automatically passed in through as props
// when the component is loaded using renderRoutes
const ViewContainer = props => {
    const { route } = props;
return(
    <div>
        {renderRoutes(route.routes)}
    </div>
)

}

export default ViewContainer;
