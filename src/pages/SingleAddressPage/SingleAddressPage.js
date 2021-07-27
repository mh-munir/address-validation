import React, {Component, Fragment} from 'react';
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import {Col, Container, Row} from "react-bootstrap";
import Title from "../../UI/Title/Title";
import SingleAddressFeatures from "../../components/SingleAddress/SingleAddressFeatures";
import SubTitle from "../../UI/SubTitle/SubTitle";
import PopupWindow from "../../components/SingleAddress/PopupWindow";
import SingleAddressCardTitle from "../../components/SingleAddress/SingleAddressCardTitle";
import CustomButton from "../../UI/Button/Button";

class SingleAddressPage extends Component {
    state={
        popupShow:false
    }
    PopupWindowHandler=(e)=>{
        e.preventDefault()
        this.setState({popupShow:true})
    }

    PopupHide=()=>{
        this.setState({popupShow:false})
    }
    render() {
        return (
            <Fragment>
                <MainNavbar/>
                    <Container>
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                               <div className="mB5">
                                   <Title title={'Single Address Verification'}/>
                               </div>
                              <div>
                                  <SubTitle subtitle={'Easy-to-use tool for single address verification - USPS or International.'} />
                              </div>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col lg={6}>

                                <div className="AllFormStyle SingleAddressValidateForm mY15 p15">
                                    <div className="FeatureTitle mB30">
                                        <SingleAddressCardTitle single_address_title={'Single Address Validation For Us'} />
                                    </div>
                                    <form className="">
                                        <div className="mB20">
                                            <select className="custom-select formControl">
                                                <option selected disabled value="selected"> Lookup type address components </option>
                                                <option value="1"> FreeForm address </option>
                                                <option value="2"> City State Or Zip Code </option>
                                            </select>
                                        </div>
                                        <div className="mB20">
                                            <input type="text" className="form-control formControl" placeholder="Address line 1: (e.g 3214 N University Ave) " />
                                        </div>
                                        <div className="mB20">
                                            <input type="text" className="form-control formControl" placeholder="Address line 2: (e.g )" />
                                        </div>
                                        <div className="mB20">
                                            <input type="text" className="form-control formControl" placeholder="City (e.g Provo)" />
                                        </div>
                                        <div className="mB20">
                                            <input type="text" className="form-control formControl" placeholder="State (e.g Utah)" />
                                        </div>
                                        <div className="mB20">
                                            <input type="text" className="form-control formControl" placeholder="Zip code (e.g 84604)" />
                                        </div>

                                        <div className="singleAddressFormBtn">
                                            <CustomButton onClick={this.PopupWindowHandler} className="btn btn-success btnAll mR10" type="submit" title="View Result" />
                                            <CustomButton className="btn btn-success btnAll" type="submit" title="Try a sample" />
                                        </div>
                                    </form>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="SingleAddressDes">
                                    <SingleAddressFeatures/>
                                    <PopupWindow
                                        PopupHide={this.PopupHide}
                                        showPopup={this.state.popupShow} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
            </Fragment>
        );
    }
}

export default SingleAddressPage;