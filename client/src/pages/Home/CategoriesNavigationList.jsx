import React from 'react'
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';



const categoriesList = [
    { label: "Rings", name: "rings" },
    { label: "Earrings", name: "earrings" },
    { label: "Bracelets", name: "bracelets" },
    { label: "Bangles", name: "bangles" },
    { label: "Mangalsutras", name: "mangalsutras" },
    { label: "Nose Pins", name: "nosePins" },
    { label: "Head Jewelries", name: "headJewelries" },
    { label: "Pendants Sets", name: "pendantSets" },
    { label: "Wedding Sets", name: "weddingSets" },
    { label: "Pendants", name: "pendants" },
    { label: "Anklets", name: "anklets" },
    { label: "Toe Rings", name: "toeRings" },
    { label: "Home Decors", name: "homeDecor" },
];


export const CategoriesNavigationList = () => {
    return (
        <>
           
                <Marquee pauseOnHover={true} autoFill speed={30} >
                    {
                        categoriesList.map((e, i) => (
                            <Link to={`/shop/${e.name}`} className='font-medium text-sm mx-4 animated-underline' key={e.name}>{e.label}</Link>
                        ))
                    }
                </Marquee>
           


        </>
    )
}
