
import { gapi } from 'gapi-script';
import { useEffect, useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import './App.css';



function App() {
  const [ profile, setProfile ] = useState([]);
  const clientId = '726963337663-d387sq8714ihikidkhtne009et6au6do.apps.googleusercontent.com';

  useEffect(() => {
    const initClient = () => {
          gapi.client.init({
          clientId: clientId,
          scope: ''
        });
     };
     gapi.load('client:auth2', initClient);
 });

 const onSuccess = (res) => {
  setProfile(res.profileObj);
};

const onFailure = (err) => {
  console.log('failed', err);
};

const logOut = () => {
  setProfile(null);
};
  return (
    <div className="App">
      <h2>React Google Login</h2>
            <br />
            <br />
            {profile ? (
                <div>
                    <img src={profile.imageUrl} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                </div>
            ) : (
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            )}
    </div>
  );
}

export default App;
