import React from 'react'
import { Drawer } from '@mui/material'
import { RxCross2 } from "react-icons/rx";


export const DrawerNavigation = ({drawerOpen, toggleDrawer}) => {





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
                    className="pt-32 w-64 text-black"
                >
                  <div>
                    <button>
                        <RxCross2 size={25} />
                    </button>
                  </div>
                </div>
            </Drawer>


        </>
    )
}
