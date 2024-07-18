import { Dialog, Button } from '@mui/material';
import { RxCross2 } from "react-icons/rx";

export const LogoutDialog = ({ open, handleClose, handleLogout }) => {
    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                {/* Dialog content */}
                <div className='flex md:px-10 py-7 p-5 flex-col'>
                    {/* Close button */}
                    <button onClick={handleClose} className='absolute top-3 right-3'><RxCross2 size={20}/></button>
                    {/* Dialog title */}
                    <p className='text-2xl font-semibold'>Confirm Logout</p>
                    {/* Confirmation message */}
                    <div className='mt-4'>
                        <p className='text-xl'>
                            Are you sure you want to logout?
                        </p>
                    </div>
                    {/* Buttons */}
                    <div className='mt-6 flex items-center justify-start gap-7'>
                        {/* Cancel button */}
                        <button className='bg-gray-300 text-black border border-black px-8 text-sm py-2' onClick={handleClose} color="primary">
                            Cancel
                        </button>
                        {/* Logout button */}
                        <button className='bg-black text-white border-black px-8 text-sm py-2' onClick={handleLogout}>
                            Logout 
                        </button>
                    </div>
                </div>
            </Dialog>
        </>
    );
};
