import React, { useState } from 'react';
import * as Components from './Components';
import '../loginpage/style.css'
import Back from '../common/back/Back';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
// import AuthDetails from '../Authentication/AuthDetails';
import { useHistory } from "react-router-dom";

const Login = () => {
    const [signIn, toggle] = React.useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("https://react-auth-50dea-default-rtdb.firebaseio.com/reactForm.json",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    fullName: fullName,

                })
            })
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert('You are Account hasbeen Created!');
                // console.log(userCredential);
                // console.log('Email: ', email, " Password:  ", password, "FullName", fullName)
                // localStorage.setItem('name', fullName);
                localStorage.setItem('NameLogedIN', fullName);
                window.location.reload(false);
            }).catch((error) => {
                console.log(error);
            });

    };

    const handleSignin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert('You are Signed In')
                console.log(userCredential);
                history.push('/databutton')
                window.location.reload(false);
            }).catch((error) => {
                console.log(error);
            })
        console.log('Email: ', email, " Password:  ", password)
    }


    return (
        <>
            <Back title='For Organizers' />
            <div className='logincontainer'>
                <Components.Container>

                    <Components.SignUpContainer signinIn={signIn}>
                        <Components.Form onSubmit={handleSubmit}>
                            <Components.Title>Create Account</Components.Title>

                            <Components.Input
                                type='text'
                                placeholder='Name'
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />

                            <Components.Input
                                type='email'
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />

                            <Components.Input
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <Components.Button>Sign Up</Components.Button>
                        </Components.Form>
                    </Components.SignUpContainer>

                    <Components.SignInContainer signinIn={signIn}>
                        <Components.Form onSubmit={handleSignin}>
                            <Components.Title>Sign in</Components.Title>
                            <Components.Input
                                type='email'
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Components.Input
                                type='password'
                                placeholder='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Components.Anchor href='/forgetpassword'>Forgot your password?</Components.Anchor>
                            <Components.Button>Sigin In</Components.Button>
                        </Components.Form>
                    </Components.SignInContainer>

                    <Components.OverlayContainer signinIn={signIn}>
                        <Components.Overlay signinIn={signIn}>

                            <Components.LeftOverlayPanel signinIn={signIn}>
                                <Components.Title>Welcome Back!</Components.Title>
                                <Components.Paragraph>
                                    To keep connected with us please login with your personal info
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(true)}>
                                    Sign In
                                </Components.GhostButton>
                            </Components.LeftOverlayPanel>

                            <Components.RightOverlayPanel signinIn={signIn}>
                                <Components.Title>Hello, Friend!</Components.Title>
                                <Components.Paragraph>
                                    Enter Your personal details and start journey with us
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(false)}>
                                    Sigin Up
                                </Components.GhostButton>
                            </Components.RightOverlayPanel>

                        </Components.Overlay>
                    </Components.OverlayContainer>

                </Components.Container>
                {/* <AuthDetails/> */}
            </div>
        </>
    )
}

export default Login
