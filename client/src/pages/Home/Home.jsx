import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from './Carousal';
import { CategoriesList } from './CategoriesList';
import { FeaturedProducts } from './FeaturedProducts';
import { CredibilityBoxes } from './CredibilityBoxes';
import { Testimonials } from './Testimonials';
import { CardSlider } from './CardSlider';



const categoriesList = [
  { label: "Rings", name: "nosePins" },
  { label: "Earring", name: "bangles" },
  { label: "Bracelet", name: "earrings" },
  { label: "Bangles", name: "rings" },
  { label: "Mangalsutra", name: "pendantSets" },
  { label: "Nose pins", name: "nosePins" },
  { label: "Head Jewelry", name: "headJewelry" },
  { label: "Pendants", name: "pendants" },
  { label: "Wedding Sets", name: "weddingSets" },
  { label: "Necklace", name: "necklace" },
  { label: "Anklets", name: "anklets" },
  { label: "Toe Rings", name: "toeRings" },
  { label: "Home Decor", name: "homeDecor" }
]





export const Home = () => {

  return (
    <div className='min-h-screen md:pt-32 pt-14'>

      <div className='py-6 md:flex hidden justify-center items-center gap-9'>
        {

          categoriesList.map((e, i) => (
            <Link to={`/shop/${e.name}`} className='font-medium text-sm animated-underline' key={e.name}>{e.label}</Link>
          ))

        }
      </div>

      <div className="my-4 ">
        <Carousel />

      </div>


      <div className='my-6'>
        <CategoriesList />
      </div>

      <div className='my-6 bg-gray-100  md:px-16 px-8 py-8'>

        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-1 gap-6 md:px-16'>
          <div className='flex justify-center'>
            <img src="/assets/images/newlyLaunchedDkraj.jpg" className='md:h-[24em] h-[16em] rounded-xl' alt="" />
          </div>
          <div className='flex  flex-col items-center text-center md:pt-14 pt-3'>
            <p className='font-bold md:text-3xl text-2xl'>A Stylish Gold Bangle </p>
            <div className='border-t border-gray-800 w-4/5 mt-3'></div>
            <p className='md:font-semibold font-medium md:px-8 text-base text-gray-800 mt-4'>This exquisite gold bangle is the perfect blend of elegance and modern design. Its intricate craftsmanship ensures a timeless appeal, Whether you're dressing up for a special event or adding a touch of sophistication to your everyday look, this gold bangle is an ideal choice.</p>
            <Link to="/shop" className='bg-black  mt-8 text-sm border border-black  text-white hover:text-black hover:bg-white px-20 py-2'>
              Know More
            </Link>
          </div>
        </div>

      </div>

      <div className='my-6 '>

        <FeaturedProducts />

      </div>

      <div className='my-6 '>

        <CredibilityBoxes />

      </div>

      <div className='my-6 '>

        <Testimonials />

      </div>
      {/* <div className='my-6 '>

        <CardSlider />

      </div> */}



      <div className=''>

        <div className='flex items-center flex-col bg-gray-950 pt-12 pb-14'>
          <div>
            <img src="/assets/images/dkrajLogoVariant2White.png" className='md:w-72 w-56' alt="dkrajLogo" />
          </div>
          <div className="border border-yellow-900 mt-2 md:w-3/12 w-10/12"></div>

          <p className='text-center text-gray-200 mt-4 md:text-sm text-xs px-4 md:w-3/5'>
            Crafting timeless elegance with every piece, we blend tradition with modernity to create jewelry that speaks to the soul. Our dedication to quality and artistry shines through in every design, making each piece a true masterpiece.
          </p>

        </div>

      </div>






    </div>
  )
}
