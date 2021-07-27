
import './App.css';
import React from "react";
import SignupPage from "./pages/SignupPage/SignupPage";
import {Route,BrowserRouter} from 'react-router-dom';
import LoginPage from "./pages/LoginPage/LoginPage";
import ForgetPassPage from "./pages/ForgetpassPage/ForgetPassPage";
import ContactSalesPage from "./pages/ContactPage/ContactSalesPage";
import ContactSupportPage from "./pages/ContactPage/ContactSupportPage";
import SingleAddressPage from "./pages/SingleAddressPage/SingleAddressPage";
import BulkValidationPage from "./pages/BulkValidationPage/BulkValidationPage";
import UsApiPage from "./pages/UsApisPage/UsApiPage";
class App extends React.Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={SignupPage}/>
            <Route path="/login"  component={LoginPage}/>
            <Route path="/forget-pass"  component={ForgetPassPage}/>
            <Route path="/contact-sales"  component={ContactSalesPage}/>
            <Route path="/contact-support"  component={ContactSupportPage}/>
            <Route path="/single-address"  component={SingleAddressPage}/>
            <Route path="/bulk-validation"  component={BulkValidationPage}/>
            <Route path="/us-api"  component={UsApiPage}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
  
};

export default App;
