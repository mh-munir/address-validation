import React, {Component, Fragment} from 'react';

class SignupTitle extends Component {
    render() {
        return (
            <Fragment>
                <div className="signUpTitle mT80">
                    <h1>{this.props.title}</h1>
                </div>
            </Fragment>
        );
    }
}

export default SignupTitle;