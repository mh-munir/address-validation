import React, {Component, Fragment} from 'react';
import SingleAddressCardTitle from "./SingleAddressCardTitle";
import FeaturesCardText from "./FeaturesCardText";
import CustomButton from "../../UI/Button/Button";

class PopupWindow extends Component {

PopupClose=()=>{
    this.props.PopupHide()
}
    render() {
        console.log(this.props.popupShow)
        return (
            <Fragment>
                <div className={this.props.showPopup ? "AllFormStyle AddressShowPopup p20":"AllFormStyle AddressShowPopup d-none p20"}>
                    <div className="AddressPopupValidTitle text-center">
                        <span className="SingleAddressValidIcon mR10"><i className="fas fa-check"></i></span> <SingleAddressCardTitle single_address_title={'Found 1 valid address'} />
                    </div>
                    <div className="AddressPopupUnknownTitle text-center d-none">
                        <span className="SingleAddressUnknownIcon mR10"><i className="fas fa-times"></i></span> <SingleAddressCardTitle single_address_title={'Unknown address'} />
                    </div>
                    <div className="CheckAddressList mY30">
                        <ul>
                            <li className="pT10 pB5 AddressShowList"> <p><FeaturesCardText featurestext={'FD1 Calle Capella'}/></p> </li>
                            <li className="pT10 pB5 AddressShowList"> <p><FeaturesCardText featurestext={'Bayamon PR 00956-5539'}/></p> </li>
                            <li className="pT10 pB5 AddressShowList"><p><FeaturesCardText featurestext={'18.35384'}/></p></li>
                            <li className="pT10 pB5 AddressShowList"><p><FeaturesCardText featurestext={'-66.14718'}/></p></li>
                            <li className="pT10 pB5 AddressShowList"><p><FeaturesCardText featurestext={'Zip7'}/></p></li>
                        </ul>
                    </div>

                    <div className="AddressResultSugList mT30">
                        <ul>
                            <li className="pT10 pB5 AddressSugShowList"> <span className="AddressSugIcon mR10"><i className="fas fa-check"></i></span> <p><FeaturesCardText featurestext={'FD1 Calle Capella'}/></p> </li>
                            <li className="pT10 pB5 AddressSugShowList"> <span className="AddressSugIcon mR10"><i className="fas fa-check"></i></span>  <p><FeaturesCardText featurestext={'Bayamon PR 00956-5539'}/></p> </li>
                            <li className="pT10 pB5 AddressSugShowList"> <span className="AddressSugIcon mR10"><i className="fas fa-exclamation"></i></span> <p><FeaturesCardText featurestext={'18.35384'}/></p></li>
                        </ul>
                    </div>

                    <div className="PopupCloseButton text-right">
                        <CustomButton onClick={this.PopupClose } className="btn btn-success btn-md btnAll text-right" title="Close" />
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default PopupWindow;