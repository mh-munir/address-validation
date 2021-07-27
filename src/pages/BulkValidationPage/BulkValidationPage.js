import React, {Component, Fragment} from 'react';
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import  {Container,Row, Col} from "react-bootstrap";
import SingleAddressFeatures from "../../components/SingleAddress/SingleAddressFeatures";
import Title from "../../UI/Title/Title";
import SubTitle from "../../UI/SubTitle/SubTitle";
import BulkValidationForm from "../../components/BulkValidation/BulkValidationForm";

class BulkValidationPage extends Component {
    render() {
        return (
            <Fragment>
                <MainNavbar/>
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                           <div className="mB5">
                               <Title title={'Address Validation for Lists'}/>
                           </div>
                          <div>
                              <SubTitle subtitle={'Easy-to-use tool for single address verification - USPS or International.'} />
                          </div>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col lg={6} md={12} sm={12}>
                           <BulkValidationForm/>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <SingleAddressFeatures/>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default BulkValidationPage;