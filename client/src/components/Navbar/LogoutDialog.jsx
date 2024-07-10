import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';


export const LogoutDialog = ({ open, handleClose, handleLogout }) => {
    return (
        <>
            <Dialog open={open} onClose={handleClose}>
                <div className='flex md:px-10 py-7 p-5 flex-col'>
                <p className='text-2xl font-semibold'>Confirm Logout</p>
                <div className='mt-4'>
                    <p className='text-xl '>
                        Are you sure you want to logout?
                    </p>
                </div>
                <div className='mt-6 flex items-center justify-start gap-7'>
                    <button  className='bg-gray-300 text-black border border-black px-8 text-sm py-2' onClick={handleClose} color="primary">
                        Cancel
                    </button>
                    <button className='bg-black text-white border-black px-8 text-sm py-2'  onClick={handleLogout} >
                        Logout 
                    </button>
                </div>
                </div>
            </Dialog>

        </>
    )
}
