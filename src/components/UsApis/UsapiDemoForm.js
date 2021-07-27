import React from 'react';

const UsapiDemoForm=()=>{
        return (
                <div className="ApiFields mB20">
                    <div className="ApiSelectField">
                        <select name="apiInputKey" id="api-input-key" className="custom-select ApiFieldsGroup">
                        <option selected value="selected">candidates</option>
                        <option value="1">auth-id</option>
                        <option value="1">auth-token</option>
                        <option value="1">candidates</option>
                        <option value="1">input_id</option>
                        <option value="1">street</option>
                        <option value="1">street2</option>
                        </select>
                    </div>
                    <div className="ApiInputField">
                        <input className="form-control ApiFieldsGroup" type="text" placeholder="10"/>
                    </div>
                    <div className="ApiFieldRemove">
                        <button className="btn ApiFieldDeleteBtn"><i className="fas fa-times"/></button>
                    </div>

                </div>
        );
    }

export default UsapiDemoForm;


