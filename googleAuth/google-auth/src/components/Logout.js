import React from "react";
import { GoogleLogout } from "react-google-login";



const Logout = () => {

  const clientId ='726963337663-d387sq8714ihikidkhtne009et6au6do.apps.googleusercontent.com'

    const onFailure = (err) => {
        console.log("Successfully Logout", err);
    }

  return (
  <div>
    <GoogleLogout 
        clientId={clientId}
        buttonText="Logout"
        onFailure={onFailure}
    />
  </div>
  );
};

export default Logout;
