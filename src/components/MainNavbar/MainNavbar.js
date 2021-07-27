import React, {Component, Fragment} from 'react';
import '../../asset/css/bootstrap.min.css'
import '../../asset/css/custom.css'
import NavigationItem from './Navigation/NavigationItem';

class MainNavbar extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar MainNavbar navbar-expand-lg navbar-light bg-success fixed-top">
                    <div className="container">
                       <div className="NavBrand"> <NavigationItem link="/"> Navbar </NavigationItem></div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item ProductMegaMenuItem mR5">
                                    <NavigationItem link="/">Products</NavigationItem>
                                    <div className="ProductMegaMenu">
                                        <ul className="MegaMenuList pY15 pX20">
                                            <li className="MegaMenuItem"><NavigationItem link="single-address">Single Address</NavigationItem></li>
                                            <li className="MegaMenuItem"><NavigationItem link="bulk-validation">Bulk Validation</NavigationItem></li>
                                            <li className="MegaMenuItem"><NavigationItem link="us-api">APIs</NavigationItem></li>
                                            <li className="MegaMenuItem"><NavigationItem link="/">US Rooftop Geocoding</NavigationItem></li>
                                            <li className="MegaMenuItem"><NavigationItem link="/">US Reverse Geocoding API</NavigationItem></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item PriceMegaMenuItem mR5">
                                    <NavigationItem link="/">Pricing </NavigationItem>
                                    <div className="PriceMegaMenu">
                                        <ul className="MegaMenuList pY15 pX20">
                                            <li className="MegaMenuItem"><NavigationItem link="/">United States</NavigationItem></li>
                                            <li className="MegaMenuItem"><NavigationItem link="/">International</NavigationItem></li>
                                            <li className="MegaMenuItem"><NavigationItem link="/">US Autocomplete Pro</NavigationItem></li>
                                            <li className="MegaMenuItem"><NavigationItem link="/">US Rooftop Geocoding</NavigationItem></li>
                                            <li className="MegaMenuItem"><NavigationItem link="/">US Reverse Geocoding</NavigationItem></li>
                                            <li className="MegaMenuItem"><NavigationItem link="/">Enterprise</NavigationItem></li>
                                            <li className="MegaMenuItem"><NavigationItem link="/">Startup</NavigationItem></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item ResourceMegaMenuItem ">
                                    <NavigationItem link="/">Resource </NavigationItem>
                                    <div className="ResourceMegaMenu">
                                        <ul className="MegaMenuList pY15 pX20">
                                            <li className="MegaMenuItem"><NavigationItem link="/" activeStyle={{color:'#111112'}}>Documentation</NavigationItem></li>
                                            <li className="MegaMenuItem"><NavigationItem link="/" activeStyle={{color:'#111112'}}>Cloud API</NavigationItem></li>
                                            <li className="MegaMenuItem"><NavigationItem link="/" activeStyle={{color:'#111112'}}>Local API</NavigationItem></li>
                                            <li className="MegaMenuItem"><NavigationItem link="/" activeStyle={{color:'#111112'}}>SDK</NavigationItem></li>
                                            <li className="MegaMenuItem"><NavigationItem link="/" activeStyle={{color:'#111112'}}>Articles</NavigationItem></li>
                                            <li className="MegaMenuItem"><NavigationItem link="/" activeStyle={{color:'#111112'}}>Legal</NavigationItem></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item ContactMegaMenuItem mR5">
                                    <NavigationItem link="/">Contact </NavigationItem>
                                    <div className="ContactMegaMenu">
                                        <ul className="MegaMenuList pY15 pX20">
                                            <li className="MegaMenuItem"><NavigationItem link="/contact-sales">Contact-Sale</NavigationItem></li>
                                            <li className="MegaMenuItem"><NavigationItem link="/contact-support">Contact-Support</NavigationItem></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item mR5"> <NavigationItem link="login">Login</NavigationItem> </li>
                                <li className="nav-item"> <NavigationItem link="">SignUp</NavigationItem> </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Fragment>
        );
    }
}

export default MainNavbar;