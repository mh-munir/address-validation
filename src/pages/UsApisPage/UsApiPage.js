import React, {Component, Fragment} from 'react';
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import  {Container, Row, Col} from "react-bootstrap";
import Title from "../../UI/Title/Title";
import SubTitle from "../../UI/SubTitle/SubTitle";
import UsApisLink from "../../components/UsApis/UsApisLink";
import SingleAddressFeatures from "../../components/SingleAddress/SingleAddressFeatures";
import SingleAddressCardTitle from "../../components/SingleAddress/SingleAddressCardTitle";
import UsapiDemoForm from "../../components/UsApis/UsapiDemoForm";
import RadioButton from "../../components/RadioButton/RadioButton";
import CustomButton from '../../UI/Button/Button';
import TextArea from "../../components/TxetArea/TextArea";
import FeaturesCardText from "../../components/SingleAddress/FeaturesCardText";
import InputField from "../../components/InputField/InputField";

class UsApiPage extends Component {

    render() {
        return (
            <Fragment>
                <MainNavbar/>
                <Container>
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="mB5">
                                <Title title={'Address Validation APIs'}/>
                            </div>
                            <div>
                                <SubTitle subtitle={'Need the power and versatility of an API? We\'ve got you covered.'} />
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col>
                            <UsApisLink/>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col lg={6} md={7} sm={12}>
                            <div className="AllFormStyle mY15 pX20 pY30">
                                <div className="UsApisTitle mB20">
                                    <SingleAddressCardTitle single_address_title={'US Street Address API Demo'} />
                                </div>
                                <div className="SelectBox mB20">
                                    <label className="mB10">Pick your input fields</label>
                                    <select name="simpleInput" id="simple-input-select-box" className="custom-select formControl">
                                        <option selected value="selected">3301 South Greenfield Rd Gilbert AZ 85297</option>
                                        <option value="1">3301 South Greenfield Rd Gilbert AZ 85297</option>
                                        <option value="2">3301 South Greenfield Rd Gilbert AZ 85297</option>
                                    </select>
                                </div>
                                <UsapiDemoForm/>
                                <UsapiDemoForm/>
                                <UsapiDemoForm/>
                                <UsapiDemoForm/>

                                <div className="UsApiButtonGroup">
                                    <CustomButton className="btn ApiFieldAddBtn btnAll mR15" title="Add input field" />
                                    <CustomButton className="btn ApiFieldAddBtn btnAll" title="View API Response" />
                                </div>

                                <div className="UrlResponseTitle mT30">
                                <SingleAddressCardTitle single_address_title={'Sample cURL Request'} />
                                </div>

                                <div className="MyRadioButtonGroup mT10">
                                    <div className="MyRadioButton mR5">
                                        <RadioButton name="radioBtn" id="get" type="radio" className="CustomRadioBtn" title="Get" />
                                    </div>
                                    <div className="MyRadioButton mR5">
                                        <RadioButton name="radioBtn" id="post" type="radio" className="CustomRadioBtn" title="Post" />
                                    </div>
                                    <div className="MyRadioButton">
                                        <RadioButton name="radioBtn" id="row" type="radio" className="CustomRadioBtn" title="Row" />
                                    </div>
                                </div>
                                <div className="TextArea">
                                        <TextArea rows="10" className="form-control UsApiTextArea " cols="65"/>
                                </div>

                               <p className="mT5">
                                   <FeaturesCardText featurestext={'Implement in the language of your dreams with our choice SDK\'s.'}/>
                               </p>

                                <div className="ApiResponseTitle mT30">
                                    <SingleAddressCardTitle single_address_title={'API Response'} />
                                </div>

                                <div className="ApiResponseStatus mT10">
                                    <InputField className="form-control formControl ApiResponseInput" readOnly="readOnly" placeholder="HTTP Status" />
                                </div>
                                <div className="TextArea mT10">
                                    <TextArea rows="10" className="form-control UsApiTextArea " cols="65"/>
                                </div>
                                <div className="UrlCopy mT10">
                                    <InputField className="form-control UrlCopyInput" readOnly="readOnly" />
                                    <div className="LingCopy">
                                      <button>  <i className="fas fa-clipboard"></i></button>
                                    </div>
                                </div>


                            </div>
                        </Col>
                        <Col lg={6} md={5} sm={12}>
                            <SingleAddressFeatures/>
                        </Col>
                    </Row>

                </Container>

            </Fragment>
        );
    }
}

export default UsApiPage;