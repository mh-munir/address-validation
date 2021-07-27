import React, {Component, Fragment} from 'react';
import  {Container,Row,Col} from "react-bootstrap";
import ContactSalesForm from "../../components/ContactForm/ContactSalesForm";
import Title from "../../UI/Title/Title";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import ContactInfo from "../../components/ContactForm/ContactInfo";
import CustomerAsk from "../../components/ContactForm/CustomerAsk";

class ContactSalesPage extends Component {
    render() {
        return (
            <Fragment>
                <MainNavbar/>
                    <Container>
                        <Row>
                            <Col>
                                <Title title={'Talk to our Sales Team'}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <div className="AllFormStyle mY20 pX20 pY20">
                                    <ContactSalesForm/>
                                </div>

                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <div className="AllFormStyle mY20 pX20 pY20">
                                    <ContactInfo/>
                                </div>

                                <Row>
                                    <Col lg={12} md={12} sm={12}>
                                        <div className="CustomerAsk pY20">
                                            <CustomerAsk/>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
            </Fragment>
        );
    }
}

export default ContactSalesPage;