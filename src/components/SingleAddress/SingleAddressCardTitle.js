import React, {Component, Fragment} from 'react';

class SingleAddressCardTitle extends Component {
    render() {
        return (
            <Fragment>
                <h5>{this.props.single_address_title}</h5>
            </Fragment>
        );
    }
}

export default SingleAddressCardTitle;