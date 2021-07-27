import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItem =({style,link,children,exact,activeStyle})=>(
        <NavLink style={style}to={link} exact={exact} activeStyle={activeStyle}>
            {children}
        </NavLink>
);
export default NavigationItem;