import React, {Component, Fragment} from 'react';
import SingleAddressCardTitle from "../SingleAddress/SingleAddressCardTitle";
import FeaturesCardText from "../SingleAddress/FeaturesCardText";
import {Button} from "react-bootstrap";

class BulkValidationForm extends Component {
    render() {
        return (
            <Fragment>
                <div className="AllFormStyle SingleAddressValidateForm mY15 p15">
                    <div className="FeatureTitle mB30">
                        <SingleAddressCardTitle single_address_title={'Bulk Address Validation Tool Web Interface'} />
                    </div>
                    <form className="BulkValidationForm">
                        <div className="mB20">
                            <label className="mB10"><b className="mR5">Step 1:</b> <FeaturesCardText featurestext={'I want'}/></label>
                            <select className="form-control formControl">
                                <option selected value="2">  Validate US address </option>
                                <option value="3">  match ZIP Codes to US cities and states </option>
                                <option value="4">   validate international addresses </option>
                            </select>
                        </div>
                        <div className="mB20">
                            <label className="mB10"> <b className="mR5">Step 2:</b> <FeaturesCardText featurestext={'Paste your list below. Make sure it is formatted correctly. (Here\'s an example file.)'}/></label>
                            <textarea className="form-control formControlTextarea" rows="8" placeholder="Copy and paste your list here (demo is to 10 second)"/>
                        </div>

                        <div className="mB20">
                            <label className="mB10"> <b className="mR5">Step 3:</b> <FeaturesCardText featurestext={'License (optional) Read more about licenses here.'}/></label>
                            <input type="text" className="form-control formControl" placeholder="Insert license parameter"/>
                        </div>
                        <div className="mB20">
                            <label className="mB10"> <b className="mR5">Step 4:</b> <FeaturesCardText featurestext={'(The demo is limited to 10 records at a time.)'}/></label>
                            <Button className="btnAll ProcessListBtn">Process My List of 0 Records</Button>
                        </div>

                        <div className="mB20">
                            <label className="mB10"> <b className="mR5">Step 5:</b> <FeaturesCardText featurestext={'After the output appears, click here to copy it, then paste back into your spreadsheet. The output fields don\'t line up here, but they will in Excel.'}/></label>
                            <textarea className="form-control formControlTextarea" rows="8" placeholder="The output will appear hear after processing is complete "/>
                        </div>
                    </form>
                    <FeaturesCardText featurestext={'* For complete instructions for using this tool, please see the documentation.'}/>

                </div>
            </Fragment>
        );
    }
}

export default BulkValidationForm;