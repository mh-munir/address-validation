import React, {Component, Fragment} from 'react';
import FeaturesCardText from "./FeaturesCardText";
import SingleAddressCardTitle from "./SingleAddressCardTitle";

class SingleAddressFeatures extends Component {
    render() {
        return (
            <Fragment>
                <div className="AllFormStyle SingleAddressFeature p15 mY15">
                    <div className="FeatureTitle mB20 text-center">
                        <SingleAddressCardTitle single_address_title={'Features'} />
                        <FeaturesCardText featurestext={'Check out the demo below!'}/>
                    </div>

                    <ul className="FeatureList">
                        <li className="mB15">
                            <span className="FeatureIcon mR10"><i className="fas fa-map-marked-alt"></i></span>  <p> <FeaturesCardText  featurestext={'Verify that each address is valid and complete'}/></p>
                        </li>
                        <li className="mB15">
                           <span className="FeatureIcon mR10"><i className="fas fa-rocket"></i></span>  <p> <FeaturesCardText  featurestext={'Lightning fast processing speeds'}/></p>
                        </li>
                        <li className="mB15">
                            <span className="FeatureIcon mR10"><i className="fas fa-globe"></i></span> <p><FeaturesCardText  featurestext={'Geocode returned for each valid address'}/></p>
                        </li>
                        <li className="mB15">
                            <span className="FeatureIcon mR10"><i className="fas fa-sync-alt"></i></span> <p><FeaturesCardText  featurestext={'Convert address into proper USPS or international address format'}/></p>
                        </li>
                        <li className="mB15">
                           <span className="FeatureIcon mR10"><i className="fas fa-database"></i></span>  <p><FeaturesCardText  featurestext={'Up to 45 metadata points for each address'}/></p>
                        </li>
                        <li className="mB15">
                           <span className="FeatureIcon mR10"><i className="fas fa-headset"></i></span>  <p><FeaturesCardText  featurestext={'Freakishly helpful customer support'}/></p>
                        </li>

                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default SingleAddressFeatures;