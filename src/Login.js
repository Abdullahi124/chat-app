import React from 'react';
import './login.style.css'
import {auth, provider} from './firebase'
import {useStateValue} from './StateProvider'

function Login() {
    const [{}, dispatch]=useStateValue();

    const signIn=()=>{
        auth.signInWithPopup(provider).then((result)=>{
           dispatch({
               type:"SET_USER",
               user:result.user
           })
        }
        
        ).catch(error=>alert(error.message))
    }
 
    return (
        <div className='login'>
            <img src='https://www.logolynx.com/images/logolynx/cd/cdd59a3d7288df84335a3c5a61b1652d.png' alt=''/>
            <h3>Sign in with Google</h3>
            <button type='submit' onClick={signIn}>
                Sign In

            </button>
            
        </div>
    )
}

export default Login
