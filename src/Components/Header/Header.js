import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from '../../images/food.png'
// import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const [navbar, setNavbar] = useState(false)
    const { user, logOut } = useAuth()
    // const { itemsId } = useParams()
    // console.log(itemsId);



    const changBackground = () => {
        window.scrollY >= 100 ? setNavbar(false) : setNavbar(true)
    }
    window.addEventListener('scroll', changBackground)
    return (
        <div>
            <nav className={navbar ? "md:fixed md:w-screen md:flex justify-around items-center w-full py-6 " : "md:fixed md:w-screen md:flex justify-around items-center w-full py-6 bg-white shadow-lg z-10 "}>
                <div className=" mr-20 ">
                    <NavLink to="/home" className=" text-2xl font-bold no-underline flex items-center" >
                        <img src={img} alt="" className="w-10" />
                        <span className={navbar ? " md:text-white font-mono mt-2" : " md:text-black font-mono mt-2"}>foodHut</span>
                    </NavLink>
                </div>
                <Navbar collapseOnSelect expand="lg" className=" ">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav  >
                                <NavLink to="/home" ><span className={navbar ? "font-bold uppercase md:mr-6 mr-0 no-underline group md:text-white" : "font-bold uppercase md:mr-6 mr-0 no-underline group md:text-black"}>Home</span></NavLink>
                                <NavLink to="/restaurant"><span className={navbar ? "font-bold uppercase md:mx-6  no-underline md:text-white " : "font-bold uppercase md:mx-6  no-underline md:text-black "}>Restaurants</span></NavLink>
                                <NavLink to="/foods" ><span className={navbar ? "font-bold uppercase md:mx-6 no-underline md:text-white " : "font-bold uppercase md:mx-6 no-underline md:text-black "}>All foods</span></NavLink>
                                {user.email &&
                                    <span>
                                        <NavLink to="/myOrders" ><span className={navbar ? "font-bold uppercase md:mx-6 no-underline md:text-white " : "font-bold uppercase md:mx-6 no-underline md:text-black "}>My orders</span></NavLink>
                                        <NavLink to="/admin" ><span className={navbar ? "font-bold uppercase md:mx-6 no-underline md:text-white  " : "font-bold uppercase md:mx-6 no-underline md:text-black  "}>Admin</span></NavLink>
                                    </span>
                                }


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

                            <NavLink to="/login" className=" text-sm no-underline text-black uppercase font-bold   bg-yellow-400 px-10 py-3 tracking-widest">
                                Login
                            </NavLink>

                        </div>}

                    {user.email && <div>

                        <NavLink to="/profile" className=" text-2xl text-black">
                            <div className="flex items-center">
                                <img src={user.photoURL} alt="" className="rounded-full border-2 border-yellow-400 w-12 h-12 mr-1" />
                                <span className={navbar ? "font-semibold text-xs md:text-white" : "font-semibold text-xs text-black"}>{user.displayName}</span>
                            </div>
                        </NavLink>
                    </div>
                    }
                </section>
            </nav>
        </div>
    );
};

export default Header;