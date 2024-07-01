import React from 'react'
import { Drawer } from '@mui/material'
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom'


export const DrawerNavigation = ({ drawerOpen, toggleDrawer }) => {

    return (
        <>


            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                ModalProps={{
                    container: document.getElementById('drawer-container'),
                    style: { position: 'absolute' }
                }}
            >
                <div
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                    className="pt-28 w-64 text-black "
                >
                    <div>
                        <button className='pl-2 mt-4  flex justify-center items-center '>
                            <RxCross2 size={25} />
                        </button>
                        <div className='flex justify-center'>
                            <img src="/assets/images/dkrajLogoVariant1Black.png" alt="dkrajLogo" className='w-36' />
                        </div>

                        <div className='flex flex-col pl-8 gap-6 pt-10'>
                            <Link to="/admin/dashboard">Dashboard</Link>
                            <Link to="/admin/orders" >Orders</Link>
                            <Link to="/admin/products" >Products</Link>
                            <Link to="/admin/add-product" >Add Product</Link>
                        </div>
                    </div>

                </div>
            </Drawer>


        </>
    )
}
