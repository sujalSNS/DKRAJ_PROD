import { HiBars3BottomLeft } from "react-icons/hi2";


export const AddProduct = ({ toggleDrawer }) => {


    return (
        <>
            <div id="drawer-container" className="min-h-screen relative z-0 md:pt-28 pt-20 bg-gray-100">
                <button className='pl-1 pt-3 fixed'>
                    <HiBars3BottomLeft onClick={toggleDrawer(true)} size={35} />
                </button>




                <div className="px-12 pt-5">
                Add Product
                </div>
            </div>
        </>
    );
};
