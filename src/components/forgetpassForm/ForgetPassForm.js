import React, {Component, Fragment} from 'react';
import  {Form} from "react-bootstrap";
import CustomButton from "../../UI/Button/Button";
import {Link} from "react-router-dom";

class ForgetPassForm extends Component {
    render() {
        return (
            <Fragment>
                <div className="ForgetFormText mB30">
                    <h5>Request password reset</h5>
                </div>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control className="formControl mB30" type="email" placeholder="Enter email" />
                    </Form.Group>
                    <CustomButton variant="success" type="submit" className="btn btn-success btnAll btn-block btn-lg mB30" title="Submit"/>

                    <div>
                        <p className="AccountText"> Remember your password? <Link to="#">Back to Login.</Link> </p>
                    </div>
                </Form>
            </Fragment>

        );
    }
}

export default ForgetPassForm;