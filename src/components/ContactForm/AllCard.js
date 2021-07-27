import React, {Component, Fragment} from 'react';
import Icon from'../../asset/image/phone.png'
import {Link} from "react-router-dom";
class AllCard extends Component {
    render() {
        return (
            <Fragment>
                <div className="AllCard AllCardStyle mY15 pX20 pY20">
                    <div className="CardIcon mR30">
                        <img src={Icon} alt={"Icon"} />
                    </div>
                    <div className="CardDetails">
                        <ul>
                            <li className="mB5"> <h6 className="CardTitle">Toll Free</h6></li>
                            <li className="mB15"> <p className="CardDes">Call us for your help</p></li>
                            <li><h6><Link to="#">+880- 1811914794 </Link></h6></li>
                        </ul>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default AllCard;