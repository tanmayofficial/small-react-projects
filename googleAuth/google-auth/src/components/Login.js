import React from "react";
import { GoogleLogin } from "react-google-login";



const Login = () => {

  const clientId ='726963337663-d387sq8714ihikidkhtne009et6au6do.apps.googleusercontent.com'

  const onSuccess = (response) => {
    console.log("Login Success! USER: ", response.profileObj
    );
  }

  const onFailure = (err) => {
    console.log("Login Failed! USER: ", err);
  }

  return (
    <div id="signInButton">
        <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSigned={true}
        />    
    </div>
  );
};

export default Login;
