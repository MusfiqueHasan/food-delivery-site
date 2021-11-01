import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import CommonPage from '../CommonPage/CommonPage';
import AddCatagories from './AddCatagories/AddCatagories';
import AddItems from './AddItems/AddItems';
import AddRestaurant from './AddRestaurant/AddRestaurant';
import ManageOrders from './ManageOrders/ManageOrders';
import useAuth from '../../hooks/useAuth';
const Admin = () => {
    const { isLoading } = useAuth()
    const [control, setControl] = useState("manageOrders");
    return (
        <>
            {
                isLoading ? <div className="text-center">
                    <Spinner animation="border" variant="success" className=""
                    />
                </div>

                    : <CommonPage>
                        <div>
                            <div className=" grid md:grid-cols-4">
                                <div className=" bg-gray-700 md:h-screen pt-20 flex md:justify-center">
                                    <div className="flex flex-col  ">
                                        <button className=" text-yellow-500 uppercase font-bold mb-2" onClick={() => setControl("manageOrders")}>Manage All Orders</button>
                                        <button className=" text-yellow-500  uppercase font-bold mb-2" onClick={() => setControl("addItems")}>Add A New Item</button>
                                        <button className=" text-yellow-500  uppercase font-bold mb-2" onClick={() => setControl("addCatagories")}>Add A New Catagories</button>
                                        <button className=" text-yellow-500  uppercase font-bold mb-2" onClick={() => setControl("addRestaurant")}>Add A New Restaurant</button>
                                    </div>
                                </div>
                                <div className=" md:col-span-3">
                                    {control === "manageOrders" && <ManageOrders />}
                                    {control === "addItems" && <AddItems />}
                                    {control === "addCatagories" && <AddCatagories />}
                                    {control === "addRestaurant" && <AddRestaurant />}

                                </div>
                            </div>
                        </div>
                    </CommonPage>
            }
        </>
    );
};

export default Admin;