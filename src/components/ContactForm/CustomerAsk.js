import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

class CustomerAsk extends Component {
    render() {
        return (
            <Fragment>
                <div className="CustomerItem">
                    <h6 className="mB5">Already a customer?</h6>
                    <Link to="#">Visit with our Support Team <span className="TeamIcon mL5"><i className="fas fa-users"></i></span> </Link>
                </div>
            </Fragment>
        );
    }
}

export default CustomerAsk;