import React, {Component, Fragment} from 'react';
import AllCard from "../../components/ContactForm/AllCard";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import {Container,Row,Col} from "react-bootstrap";
import Title from "../../UI/Title/Title";
import SignupDescription from "../../UI/SignupDescription";


class ContactSupportPage extends Component {
    render() {
        return (
            <Fragment>
                <MainNavbar/>
                <Container>
                    <Row>
                        <Col>
                            <Title title={'Reach out anytime, anywhere'}/>
                        </Col>
                    </Row>
                    <Row className="mT30">
                        <Col lg={8} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <AllCard/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <AllCard/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <AllCard/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <AllCard/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <AllCard/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <AllCard/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <AllCard/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <AllCard/>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={4} md={12} sm={12}>
                            <div className="AllFormStyle p20 mY20">
                                <SignupDescription/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSupportPage;