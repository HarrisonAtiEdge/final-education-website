import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import '../Authentication/Auth.css'
import { Link } from "react-router-dom"

function AuthDetails() {

    const [authUser, setAuthUser] = useState(null);
    const userName = localStorage.getItem('NameLogedIN');
    // console.log(userName)

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        }
    }, [])

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Sign Out successful')
        }).catch(error => console.log(error))
    }

    return (

        <>
            {/* <div className='authcontainer'>{authUser ? <><p>{authUser.email}</p><button onClick={userSignOut}>Sign Out </button></> : <p>LOGIN</p>}</div> */}
            <div className='authcontainer'>{authUser ?
                <>
                    <button className='primary-btn' onClick={userSignOut}>
                        LOGOUT?&nbsp;&nbsp;  {userName}
                    </button>
                </> :
                <Link to={'/login'} target='blank'>
                    <button className='primary-btn2'>LOGIN</button>
                </Link>
            }</div>
            {/* <div className='authcontainer'>{authUser ? <><p>{authUser.email}</p></> : <p className='loginalign'>LOGIN</p>}</div> */}
        </>
    )
}

export default AuthDetails