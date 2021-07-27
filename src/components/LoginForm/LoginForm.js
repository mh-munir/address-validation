import React, {Component} from 'react';
import {Form} from "react-bootstrap";
import {reduxForm,Field} from 'redux-form';
import CustomButton from '../../UI/Button/Button';
import {Link} from "react-router-dom";

class LoginForm extends Component {
    renderError=({error,touched})=>{
        if(error && touched){
            return(
            <div className="alert alert-warning">{error}</div>
            );
        }
    }

    renderField = ({divClass,inputClass,id,input,type,placeholder,meta})=>{
        return(
            <div className={divClass}>
                <input autoComplete="off" type={type} className={inputClass} {...input} id={id} placeholder={placeholder}  />
                {this.renderError(meta)}
            </div>
        );
    }
    onSubmit=(formValues)=>{
        console.log(formValues)
    }
    render() {
        return (
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field
                    divClass="mB25"
                    inputClass="form-control formControl"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    component={this.renderField}
                    id="formBasicEmail"
                />
                <Field
                    divClass="mB25"
                    inputClass="form-control formControl"
                    name="password"
                    type="password"
                    placeholder="Password"
                    component={this.renderField}
                    id="formBasicPassword"
                />
                <div className="mY15">
                    <p className="AccountText"><Link  to="/forget-pass" >Forget Password ?</Link></p>
                </div>
                <CustomButton disabled={!this.props.valid} variant="success" type="submit" className="btn btn-success btnAll btn-block btn-lg mB30" title="Submit"/>
                <div className="">
                    <p className="AccountText">Don't have an account?<Link  to="/" > Sign up.</Link></p>
                </div>
            </Form>
        );
    }
}
const validate = (formValue)=>{
    const error={}
    if(!formValue.email){
        error.email = 'You must enter a E-mail'
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValue.email)) {
        error.email = 'Invalid email address'
      }
    if(!formValue.password){
        error.password = 'You must enter a password'
    }
   
    return error;
    
}
export default reduxForm({
    form:'simpleLoginForm',
    validate,
})(LoginForm);

