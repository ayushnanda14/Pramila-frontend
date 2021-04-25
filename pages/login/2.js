// import React, { Component } from "react";
// import styles from '../../styles/login.module.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import { GoogleLogin } from 'react-google-login';


export default function Login(){
  
    return(
      <div id="loginform">
        <FormHeader title="Login" />
        <Form />
        <OtherMethods />
      </div>
    )
  }


const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);


const Form = props => (
   <div>
     <FormInput description="Username" placeholder="Enter your username" type="text" />
     <FormInput description="Password" placeholder="Enter your password" type="password"/>
     <FormButton title="Log in"/>
   </div>
);

const FormButton = props => (
  <div id="button" class={styles.row}>
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);

const OtherMethods = props => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      {/*   <Google /> */}
    </div>
  </div>
);



// const responseGoogle = (response) => {
//     console.log(response);
// }

// const Google = props => (
//     <GoogleLogin
//         clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//         render={renderProps => (
//             <a onClick={renderProps.onClick} disabled={renderProps.disabled} href="#" id="googleIcon"></a>
//         )}
//         onSuccess={responseGoogle}
//         onFailure={responseGoogle}
//         cookiePolicy={'single_host_origin'}
//     />
// );


