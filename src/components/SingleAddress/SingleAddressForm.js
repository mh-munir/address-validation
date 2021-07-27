import React, {Component, Fragment} from 'react';
import CustomButton from "../../UI/Button/Button";
import SingleAddressCardTitle from "./SingleAddressCardTitle";
class SingleAddressForm extends Component {
    state={
        popup:false
    }
    popUpHandler=(e)=>{
        e.preventDefault()
        this.setState({popup:true})
    }

    render() {
        return (
            <Fragment>

                <div className="AllFormStyle SingleAddressValidateForm mY15 p15">
                    <div className="FeatureTitle mB30">
                        <SingleAddressCardTitle single_address_title={'Single Address Validation For Us'} />
                    </div>
                        <form className="">
                            <div className="mB20">
                                <select className="form-control formControl">
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
                              <CustomButton 
                                onClick={this.popUpHandler} 
                                className="btn btn-success btnAll mR10" 
                                type="submit" 
                                title="View Result" />
                              <CustomButton className="btn btn-success btnAll" type="submit" title="Try a sample" />
                          </div>
                        </form>
                </div>

            </Fragment>
        );
    }
}

export default SingleAddressForm;