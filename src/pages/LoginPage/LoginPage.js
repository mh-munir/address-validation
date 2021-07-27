import React, {Component, Fragment} from 'react';
import LoginForm from "../../components/LoginForm/LoginForm";
import {Container, Col, Row} from "react-bootstrap";
import Title from "../../UI/Title/Title";
import SignupDescription from "../../UI/SignupDescription";
import MainNavbar from "../../components/MainNavbar/MainNavbar";

class LoginPage extends Component {
    render() {
        return (
            <Fragment>
                <MainNavbar/>
                <Container>
                    <Row>
                        <Col>
                            <Title title="Welcome Back"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className="AllFormStyle mY20 pX20 pY20">
                                <LoginForm/>
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

export default LoginPage;