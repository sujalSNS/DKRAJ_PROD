import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from './Carousal';
import { CategoriesList } from './CategoriesList';
import { PopularProducts } from './PopularProducts';
import { CredibilityBoxes } from './CredibilityBoxes';
import { Testimonials } from './Testimonials';
import { CardSlider } from './CardSlider';
import { CategoriesNavigationList } from './CategoriesNavigationList';
import { BestOfBest } from './BestOfBest';
import { Trending } from './Trending';
import { NewCollectionJewelry } from './NewCollectionJewelry';
import { OurStory } from './OurStory';
import { ShopByGender } from './ShopByGender';
import { FeaturedProductsSlideshow } from './FeaturedProductsSlideshow';



const categoriesList = [
  { label: "Rings", name: "nosePins" },
  { label: "Earrings", name: "bangles" },
  { label: "Bracelets", name: "earrings" },
  { label: "Bangles", name: "rings" },
  { label: "Mangalsutras", name: "pendantSets" },
  { label: "Nose\u00A0Pins", name: "nosePins" },
  { label: "Head\u00A0Jewelleries", name: "headJewelries" },
  { label: "Pendants\u00A0Sets", name: "pendants" },
  { label: "Wedding\u00A0Sets", name: "weddingSets" },
  { label: "Pendants", name: "necklace" },
  { label: "Anklets", name: "anklets" },
  { label: "Toe\u00A0Rings", name: "toeRings" },
  { label: "Home\u00A0Decors", name: "homeDecor" }
]





export const Home = () => {

  return (
    <div className='min-h-screen md:pt-28 pt-14'>

      {/* <div className='py-4 md:flex hidden justify-center items-center gap-9'>
        {

          categoriesList.map((e, i) => (
            <Link to={`/shop/${e.name}`} className='font-medium text-sm animated-underline' key={e.name}>{e.label}</Link>
          ))

        }
      </div> */}


      <div className=' py-4 md:hidden flex'>
        <CategoriesNavigationList />
      </div>




      <div className="mt-2 mb-4 ">
        <Carousel />

      </div>


      <div className='my-6'>
        <CategoriesList />
      </div>

      <div className='my-6'>
        <BestOfBest />
      </div>

      <div className='my-6'>
        <Trending />
      </div>

      <div className='my-6'>
        <NewCollectionJewelry />
      </div>

      <div className='my-6'>
        <OurStory />
      </div>

      <div className='my-6'>
        <ShopByGender />
      </div>

      <div className='my-6'>
        <FeaturedProductsSlideshow />
      </div>

      <div className='my-6 bg-gray-100  md:px-16 px-8 py-8 border-t border-b border-black'>

        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-1 gap-6 md:px-16'>
          <div className='flex justify-center'>
            <img src="/assets/images/newlyLaunchedDkraj.jpg" className='md:h-[24em] h-[16em] rounded-sm' alt="" />
          </div>
          <div className='flex  flex-col items-center  md:pt-14 pt-3'>
            <p className='font-bold text-left  md:w-10/12 md:text-3xl text-2xl'>A Stylish Ring </p>
            <div className='border-t border-gray-800 w-10/12 mt-3'></div>
            <p className='md:font-semibold font-medium md:px-12 text-base text-gray-800 mt-4 '>This exquisite earring is the perfect blend of elegance and modern design. Its intricate craftsmanship ensures a timeless appeal. Whether you're dressing up for a special event or adding a touch of sophistication to your everyday look, this earring is an ideal choice.</p>
            <div className='flex items-center justify-start w-full md:px-12'>
              <Link to="/shop" className='bg-black  mt-8 text-sm border border-black  text-white hover:text-black hover:bg-white px-20 py-3'>
                Know More
              </Link>
            </div>
          </div>
        </div>

      </div>

      <div className='my-6 '>

        <PopularProducts />

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
