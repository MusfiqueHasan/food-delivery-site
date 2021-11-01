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
            <section className="flex justify-center my-10">
                <div className=" md:w-4/12  flex flex-col items-center md:p-20 py-10 px-3 border-black border shadow-md">
                    <h1 className="md:text-3xl text-xl font-extrabold mb-6">Create an account</h1>
                    <button onClick={handleGoogleLogin} className=" md:text-sm text-xs no-underline uppercase font-bold  rounded-full border-2 border-yellow-600  text-yellow-600   md:px-10 px-2 py-2 tracking-widest">
                        <i className="fab fa-google mr-3 md:text-xl"></i>
                        sign in with google
                    </button>
                </div>
            </section>
        </CommonPage>
    );
};

export default Login;