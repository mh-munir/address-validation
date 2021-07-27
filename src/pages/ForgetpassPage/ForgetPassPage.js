import React, {Component, Fragment} from 'react';
import {Container, Row, Col}from "react-bootstrap";
import ForgetPassForm from "../../components/forgetpassForm/ForgetPassForm";
import SignupDescription from "../../UI/SignupDescription";
import Title from "../../UI/Title/Title";
import MainNavbar from "../../components/MainNavbar/MainNavbar";

class ForgetPassPage extends Component {
    render() {
        return (
            <Fragment>
                <MainNavbar/>
                <Container>
                    <Row>
                        <Col>
                            <Title title={'Forget Password?'}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className="AllFormStyle mY20 pX20 pY20">
                                <ForgetPassForm/>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                           <SignupDescription/>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ForgetPassPage;