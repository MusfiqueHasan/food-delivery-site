import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import CommonPage from '../CommonPage/CommonPage';

const Login = () => {
    const { signInUsingGoogle, setUser, setIsLoading } = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
                setUser(result.user);
            }).finally(() => setIsLoading(false))
    }
    return (
        <CommonPage>
            <div>
                <button onClick={handleGoogleLogin} className=" text-sm no-underline text-black uppercase font-bold   bg-yellow-400 px-10 py-3 tracking-widest">
                    Login
                </button>
            </div>
        </CommonPage>
    );
};

export default Login;