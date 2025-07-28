import React, { useState } from 'react';
import * as Components from './Components';
import { auth } from '../../firebase';
import '../loginpage/style.css'
import { sendPasswordResetEmail } from 'firebase/auth';
import Back from '../common/back/Back';

const Forgetpassword = () => {
    const [signIn, toggle] = React.useState(true);
    const [email, setEmail] = useState('');
    const handleReset = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Email Sent Successful');
                console.log('Email Sent Successful')
                window.location.reload(false);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <>
        <Back title='Reset Password' />
        <div className='logincontainer'>
            <Components.Container>

                <div className='leftforget' >
                    <Components.Form onSubmit={handleReset}>
                        <h2 className='forget-align'>Forget Password</h2>


                        <Components.Input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />


                        <Components.Button>Submit</Components.Button>
                        <Components.Anchor href='/login'>Try Login?</Components.Anchor>
                    </Components.Form>
                </div>

            </Components.Container>
        </div>
        </>
    )
}

export default Forgetpassword
