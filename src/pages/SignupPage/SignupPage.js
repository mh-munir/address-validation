import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import Title from "../../UI/Title/Title";
import SignupForm from "../../components/SinguForm/SignupForm";
import SignupEasy from "../../components/SinguForm/SignupEasy";
import ClientISlider from "../../components/clientImageSlider/ClientISlider";
import SignupDescription from "../../UI/SignupDescription";
import MainNavbar from "../../components/MainNavbar/MainNavbar";

class SignupPage extends Component {
    render() {
        return (
            <Fragment>
               <MainNavbar/>
                <Container>
                    <Row>
                        <Col>
                            <Title title={'Create a SmartyStreets account today!'}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className="AllFormStyle mY20 pX20 pY20">
                                <SignupForm/>
                            </div>

                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <div className="AllFormStyle mY20 pX20 pY20">
                                        <SignupEasy/>
                                    </div>
                                </Col>
                                <Col lg={12} md={12} sm={12}>
                                    <SignupDescription/>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>
                <ClientISlider/>
            </Fragment>
        );
    }
}

export default SignupPage;