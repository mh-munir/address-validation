import React, {Component, Fragment} from 'react';
import CustomButton from "../../UI/Button/Button";
import {reduxForm,Field,Form} from 'redux-form';
class ContactSalesForm extends Component {
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
                        
                        <Field name="values"component="select" className="form-control formControl mB25" >
                            <option>Select number of lookups</option>                          
                            <option value="num1">10000 - 20000 </option>
                            <option value="num2">30000 - 40000 </option>                           
                            <option value="num3">50000 - 60000</option>                           
                            <option value="num4">70000 - 80000</option> 
                        </Field>
                        <Field
                            divClass="mB25"
                            inputClass="form-control formControl"
                            id="aboutKnow"
                            name="about"
                            type="text"
                            placeholder="How did you hear about us?"
                            component={this.renderField}
                        />
                        <Field
                            divClass="mB25"
                            inputClass="form-control formControl"
                            id="companyName"
                            name="company"
                            type="text"
                            placeholder="Company name"
                            component={this.renderField}
                        />
                        <Field
                            className="form-control formControl additionInputField mB25"
                            name="info"
                            placeholder="Additional info"
                            component="textarea"
                        />
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
    else if(formValue.password1 !== formValue.password){
        error.password1 = 'password not match'
    }
    if(!formValue.values){
        error.values = 'Select options'
    }
    if(!formValue.about){
        error.about = 'Required !'
    }
    if(!formValue.company){
        error.company = 'Required !'
    }
    if(!formValue.info){
        error.info = 'Required !'
    }
    return error;
    
}
export default reduxForm({
    form:'ContactForm',
    validate,
})(ContactSalesForm);

