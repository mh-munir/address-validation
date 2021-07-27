import React, {Component, Fragment} from 'react';
import  {Form} from "react-bootstrap";
import {reduxForm,Field} from 'redux-form';
import {Link} from 'react-router-dom'
import CustomButton from '../../UI/Button/Button';

class SignupForm extends Component {
    renderError=({error,touched})=>{
        if(error && touched){
            return(
            <div className="alert alert-warning">{error}</div>
            );
        }
    }

    renderField = ({text,divClass,inputClass,id,input,type,placeholder,meta})=>{
        return(
            <div className={divClass}>
                <input autoComplete="off" type={type} className={inputClass} {...input} id={id} placeholder={placeholder}  />
                <p>{text}</p> 
                {this.renderError(meta)}
            </div>
        );
    }
    onSubmit=(formValues)=>{
        console.log(formValues)
    }
    render() {
        return (
            <Fragment>
                    <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <Field
                            divClass="mB25"
                            inputClass="form-control formControl"
                            name="firstname"
                            type="text"
                            placeholder="First name"
                            component={this.renderField}
                            id="formGroupLName"
                        />
                        <Field
                            divClass="mB25"
                            inputClass="form-control formControl"
                            name="lastname"
                            type="text"
                            placeholder="Last Name"
                            component={this.renderField}
                            id="formGroupFName"
                        />
                        <Field
                            divClass="mB25"
                            inputClass="form-control formControl"
                            id="exampleInputEmail1"
                            name="email"
                            type="email"
                            placeholder="Enter email"
                            component={this.renderField}
                        />
                        <Field
                            divClass="mB25"
                            inputClass="form-control formControl"
                            id="formGroupPhoneNumber"
                            name="number"
                            type="text"
                            placeholder="Phone number"
                            component={this.renderField}
                        />
                        <Field
                            divClass="mB25"
                            inputClass="form-control formControl"
                            id="formGroupPassword"
                            name="password"
                            type="password"
                            placeholder="Password"
                            component={this.renderField}
                        />
                        <Field
                            divClass="mB25"
                            inputClass="form-control formControl"
                            id="formGridPassword"
                            name="password1"
                            type="password"
                            placeholder="Confirm password"
                            component={this.renderField}
                        />
                        <Field

                            divClass="MyStyleCheckbox mY15"
                            id="formBasicCheckbox"
                            name="checkbox"
                            type="checkbox"
                            inputClass="CheckboxDescription"
                            component={this.renderField}
                            text="I have read and agree to the SmartyStreets Terms of Service, Privacy Policy, and to receive communications from SmartyStreets. *"
                        />
                        
                        
                        <div className="mB30">
                            <p>This site is protected by reCAPTCHA and the Google <Link to="#">Privacy Policy</Link> and Terms of Service apply.</p>
                        </div>

                        <CustomButton disabled={!this.props.valid} type="submit" className="btn btn-success btnAll btn-block btn-lg" title="Submit"/>
                    </Form>
            </Fragment>
        );
    }
}
const validate = (formValue)=>{
    const error={}
    if(!formValue.firstname){
        error.firstname = 'You must enter a first name'
    }
    if(!formValue.lastname){
        error.lastname = 'You must enter a last name'
    }
    if(!formValue.email){
        error.email = 'You must enter a E-mail'
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValue.email)) {
        error.email = 'Invalid email address'
      }
    if(!formValue.number){
        error.number = 'You must enter a number'
    }else if(isNaN(Number(formValue.number))){
        error.number = 'Must be a number'
    }else if (formValue.number.length < 11){
        error.number = 'Sorry! Invalid number'
    }
    if(!formValue.password){
        error.password = 'You must enter a password'
    }if(!formValue.password1){
        error.password1 = 'You must enter a confirm password'
    }
    else if(formValue.password1 !== formValue.password){
        error.password1 = 'password not match'
    }
    if(!formValue.checkbox){
        error.checkbox = 'Are you agree our term of service ?'
    }
    return error;
    
}
export default reduxForm({
    form:'simple',
    validate,
})(SignupForm);