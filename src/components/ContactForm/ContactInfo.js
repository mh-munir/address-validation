import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class ContactInfo extends Component {
    render() {
        return (
            <Fragment>

                <div className="ContactInfo">
                    <div>
                        <h5 className="mB15">Contact Us</h5>
                    </div>
                    <ul className="ContactList">
                        <li className="mB15">
                            <Link to="#"> <span className="ContactInfoIcons mR5"><i className="fas fa-envelope"/></span> addressapi@support.info </Link>
                        </li>
                        <li className="mB15">
                            <Link to="#"> <span className="ContactInfoIcons mR5"><i className="fas fa-envelope"/></span> addressapi@support.info </Link>
                        </li>
                        <li className="mB15">
                            <Link to="#"> <span className="ContactInfoIcons mR5"><i className="fas fa-phone-alt"/></span> (00880) - 1811914794</Link>
                        </li>
                        <li>
                            <Link to="#"><span className="ContactInfoIcons mR5"><i className="fas fa-phone-alt"/></span> (00880) - 1811914794 </Link>
                        </li>
                    </ul>
                </div>

            </Fragment>
        );
    }
}

export default ContactInfo;