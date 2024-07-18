import React from 'react'
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';



const categoriesList = [
    { label: "Rings", name: "rings" },
    { label: "Earrings", name: "earrings" },
    { label: "Bracelets", name: "bracelets" },
    { label: "Bangles", name: "bangles" },
];


export const CategoriesNavigationList = () => {
    return (
        <>
           
                <div className='mx-auto' >
                    {
                        categoriesList.map((e, i) => (
                            <Link to={`/shop/${e.name}`} className='font-medium text-sm mx-5 animated-underline' key={e.name}>{e.label}</Link>
                        ))
                    }
                </div>
           


        </>
    )
}
