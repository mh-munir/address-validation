import React, {Component} from 'react';
import NavigationItem from "../MainNavbar/Navigation/NavigationItem";

class UsApisLink extends Component {
    render() {
        return (
            <div className="UsApisLinkGroup">
                <ul>
                    <li className="UsApisItem mR5"><NavigationItem exact link="/us-api">US Street Address API</NavigationItem></li>
                    <li className="UsApisItem mR5"><NavigationItem exact link="#">US ZIP Code API</NavigationItem></li>
                    <li className="UsApisItem mR5"><NavigationItem exact link="#">US Autocomplete Pro API</NavigationItem></li>
                </ul>
            </div>
        );
    }
}

export default UsApisLink;