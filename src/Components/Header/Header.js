import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from '../../images/food.png'

import useAuth from '../../hooks/useAuth';
const Header = () => {

    const { user, logOut, signInUsingGoogle, setUser, setIsLoading } = useAuth()


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
        <div>
            <nav className=" md:fixed">

                <div className=" md:w-screen md:flex justify-around items-center w-full md:absolute relative ">
                    <div className=" mr-20 mt-4">
                        <NavLink to="/home" className=" text-2xl font-bold no-underline flex items-center" >
                            <img src={img} alt="" className="w-10" />
                            <span className=" md:text-white font-mono mt-2">foodHut</span>
                        </NavLink>
                    </div>
                    <Navbar collapseOnSelect expand="lg" className=" ">
                        <Container>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav" >
                                <Nav  >
                                    <NavLink to="/home" className="font-semibold uppercase md:mr-6 mr-0 no-underline group md:text-white   ">Home</NavLink>
                                    <NavLink to="/restaurant" className="font-semibold uppercase md:mx-6  no-underline md:text-white ">Restaurants</NavLink>
                                    <NavLink to="/foods" className="font-semibold uppercase md:mx-6 no-underline md:text-white ">All foods</NavLink>
                                    <NavLink to="/orders" className="font-bold uppercase md:mx-6 no-underline md:text-white ">My orders</NavLink>
                                    <NavLink to="/orders" className="font-bold uppercase md:mx-6 no-underline md:text-white  ">Admin</NavLink>


                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <section className="flex items-center justify-center mt-0 sm:mt-5 ">
                        {user.email ? <div >
                            <button onClick={logOut} className=" text-sm no-underline text-black uppercase font-bold   bg-yellow-400 px-10 py-3 mr-5 tracking-widest">

                                <span className="text-xs">Logout</span>
                            </button>
                        </div>
                            :
                            <div className="flex items-center">
                                <button onClick={handleGoogleLogin} className=" text-sm no-underline text-black uppercase font-bold   bg-yellow-400 px-10 py-3 tracking-widest">
                                    Login
                                </button>
                                {/* <NavLink to="/login" className=" text-sm no-underline text-black uppercase font-bold   bg-yellow-400 px-10 py-3 tracking-widest">                                    
                                    Login
                                </NavLink> */}

                            </div>}

                        {user.displayName && <div>

                            <NavLink to="/profile" className=" text-2xl text-black">
                                <div className="flex items-center">
                                    <img src={user.photoURL} alt="" className="rounded-full border-2 border-yellow-400 w-12 h-12 mr-1" />
                                    <span className="font-semibold text-xs text-white">{user.displayName}</span>
                                </div>
                            </NavLink>
                        </div>
                        }
                    </section>
                   
                </div>
            </nav>

        </div>
    );
};

export default Header;