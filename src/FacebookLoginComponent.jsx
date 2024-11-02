import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

const FacebookLoginComponent = () => {
    const [user, setUser] = useState(null); // State to store user info

    const responseFacebook = (response) => {
        console.log(response); // Handle the response data
        if (response.status !== 'unknown') {
            // Successful login, store user info
            setUser({
                name: response.name,
                email: response.email,
                picture: response.picture.data.url,
            });
            console.log(`Logged in as: ${response.name}`);
        } else {
            // Handle login failure
            console.error('Login failed');
        }
    };

    return user ? (
        <>
            <h2 style={{color:'black', textAlign:'center'}}>Welcome, {user.name}!</h2>
            <img 
                src={user.picture} 
                alt={user.name} 
                style={{ display: 'block', margin: '0 auto' }} // Centering the image
            />
        </>
    ) : (
        <FacebookLogin
            appId="2264696153893004" // Replace with your Facebook App ID
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            icon="fa-facebook" // Optional, if you want to use an icon
        />
    );
};

export default FacebookLoginComponent;
