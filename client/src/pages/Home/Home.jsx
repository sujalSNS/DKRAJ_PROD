import React from 'react'
import { Link } from 'react-router-dom'



const categoriesList = [
  { label: "Rings", name: "rings" },
  { label: "Earrings", name: "earrings" },
  { label: "Bracelets", name: "bracelets" },
  { label: "Bangles", name: "bangles" },
  { label: "Mangalsutra", name: "mangalsutra" },
  { label: "Nose Pins", name: "nosePins" },
  { label: "Pendant Sets", name: "pendantSets" },
  { label: "Wedding Sets", name: "weddingSets" },
  { label: "Pendants", name: "pendants" },
  { label: "Anklets", name: "anklets" },
  { label: "Toe Rings", name: "toeRings" },
  { label: "Home Decor", name: "homeDecor" },
]






const categories = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1513122991877-4a5678e6d72f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVuZGFudHN8ZW58MHx8MHx8fDA%3D",
    title: "Pendants & Sets",
    category: "Necklace",
  },
  {
    id: 2,
    img: "https://plus.unsplash.com/premium_photo-1671641737535-d717a70d6d51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmluZ3MlMjBicmFjZWxldHN8ZW58MHx8MHx8fDA%3D",
    title: "Rings & Bracelets",
    category: "Rings",
  },
  {
    id: 3,
    img: "https://plus.unsplash.com/premium_photo-1670266032676-61979dfff60b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWFycmluZ3MlMjBub3NlcGluc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Earrings & Nose Pins",
    category: "Earrings",
  },
];


export const blog = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1584811644165-33db3b146db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: "Read more",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1600427150683-348f588e815c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
    title: "Sed ut perspiciatis unde omnis iste natus",
    description:
      "Error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    button: "Read more",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "At vero eos et accusamus",
    description:
      "Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
    button: "Read more",
  },
];


export const Home = () => {

  return (
    <div className='min-h-screen pt-24'>

      <div className='py-6 md:flex hidden justify-center items-center gap-12'>
        {

          categoriesList.map((e, i) => (
            <Link to={`/shop/${e.name}`} className='font-medium text-sm animated-underline' key={e.name}>{e.label}</Link>
          ))

        }
      </div>

      <div className='bg-black md:flex hidden text-base font-light text-white  py-2'>
        <p className='text-center w-full'>GET RS.1000 CASHBACK ON PURCHASE OF RS.6000 | GET RS.2000 CASHBACK ON PURCHASE OF RS.10000</p>
      </div>

      <div className='mt-8 mb-4 '>

        <div className='flex md:flex-row flex-col gap-4'>
          {
            categories.map((e, i) => (

              <div key={e.id} className="bg-cover md:w-1/3 w-full h-64 bg-center flex justify-center items-center flex-col gap-4" style={{ backgroundImage: `url(${e.img})` }}>
                <p className='text-white font-bold md:text-3xl text-2xl uppercase'>{e.title}</p>
                <button className='flex px-3 py-2  bg-none border border-white hover:border-black text-white hover:text-white  hover:bg-black text-sm'>SHOP NOW</button>
              </div>

            ))
          }
        </div>

      </div>

      <div className='mt-8 mb-4 '>
        <p className='text-4xl font-semibold my-5 text-center '>Stories</p>

        <div className='flex md:flex-row justify-center  flex-col md:gap-4 gap-6'>
          {
            blog.map((e, i) => (

              <div key={e.id} className='flex flex-col pb-3  md:w-1/4 items-center'>

                <div>
                  <img src={e.img} alt={e.id} className='w-60' />
                </div>
                <div className='px-12 mt-4'>
                  <p className='font-bold text-xl'>{e.title}</p>
                  <p className='my-6'>{e.description}</p>
                </div>
                <div className='px-12  flex w-full'>
                  <button className='bg-black text-sm border border-black  text-white hover:text-black hover:bg-white px-3 py-2'> READ MORE</button>
                </div>

              </div>


            ))
          }
        </div>

      </div>

    </div>
  )
}
