import React, {Component, Fragment} from 'react';

class SubTitle extends Component {
    render() {
        return (
            <Fragment>
               <div className="SubTitle">
                   <h6>{this.props.subtitle}</h6>
               </div>
            </Fragment>
        );
    }
}

export default SubTitle;