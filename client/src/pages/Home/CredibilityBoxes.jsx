import React from 'react'





const credibilityBoxes = {
    shipping: {
        heading: "100% Certified & Free Shipping",
        desc: "Our jewellery always comes with a certificate of authentication.",
        img: 'assets/images/credibility/shippingBlack.png'
    },

    moneyback: {
        heading: "15 Day Money-Back",
        desc: "Get 100% refund if you don't like your jewellery.",
        img: 'assets/images/credibility/moneyBackBlack.png'
    },

    exchange: {
        heading: "Lifetime Exchange",
        desc: "Exchange your old designs anytime you want an upgrade.",
        img: 'assets/images/credibility/lifeTimeExchangeBlack.png'
    },

    warranty: {
        heading: "One Year Warranty",
        desc: "If your jewellery has a defect, we will fix it.",
        img: 'assets/images/credibility/warrantyBlack.png'
    }
};





export const CredibilityBoxes = () => {
    return (
        <>

            <div className='bg-gray-100  md:flex hidden flex-col  items-center py-16 '>

                <div className='flex justify-center items-center gap-64 pr-32'>

                    <div className='w-2/6   h-32 flex items-center gap-5 rounded-md'>
                        <img src={credibilityBoxes["shipping"].img} className='w-32' alt={credibilityBoxes["shipping"].heading} />
                        <div className='flex flex-col justify-center'>
                            <p className='font-semibold'>{credibilityBoxes["shipping"].heading}</p>
                            <p>{credibilityBoxes["shipping"].desc}</p>
                        </div>
                    </div>

                    <div className='w-2/6   h-32 flex items-center gap-5 rounded-md'>
                        <img src={credibilityBoxes["exchange"].img} className='w-24' alt={credibilityBoxes["exchange"].heading} />
                        <div className='flex flex-col justify-center'>
                            <p className='font-semibold'>{credibilityBoxes["exchange"].heading}</p>
                            <p>{credibilityBoxes["exchange"].desc}</p>
                        </div>
                    </div>

                </div>
                <div className='flex justify-center items-center gap-64 pl-32'>

                    <div className='w-2/6   h-32 flex items-center gap-5 rounded-md'>
                        <img src={credibilityBoxes["moneyback"].img} className='w-28' alt={credibilityBoxes["moneyback"].heading} />
                        <div className='flex flex-col justify-center'>
                            <p className='font-semibold'>{credibilityBoxes["moneyback"].heading}</p>
                            <p>{credibilityBoxes["moneyback"].desc}</p>
                        </div>
                    </div>
                    <div className='w-2/6   h-32 flex items-center gap-5 rounded-md'>
                        <img src={credibilityBoxes["warranty"].img} className='w-28' alt={credibilityBoxes["warranty"].heading} />
                        <div className='flex flex-col justify-center'>
                            <p className='font-semibold'>{credibilityBoxes["warranty"].heading}</p>
                            <p>{credibilityBoxes["warranty"].desc}</p>
                        </div>
                    </div>

                </div>

            </div>


            <div className='bg-gray-100 md:hidden flex flex-col gap-6 justify-center-center py-14 px-4'>

                <div className='flex  '>

                    <div className='   h-32 grid grid-cols-2  gap-1 rounded-md'>
                        <div className='flex justify-start items-center'>
                            <img src={credibilityBoxes["shipping"].img} className='w-28' alt={credibilityBoxes["shipping"].heading} />
                        </div>
                        <div className='flex  flex-col justify-center'>
                            <p className='font-semibold'>{credibilityBoxes["shipping"].heading}</p>
                            <p>{credibilityBoxes["shipping"].desc}</p>
                        </div>
                    </div>
                </div>

                <div className='flex  '>

                    <div className='   h-32 grid grid-cols-2  gap-1 rounded-md'>
                        <div className='flex  flex-col justify-center'>
                            <p className='font-semibold'>{credibilityBoxes["exchange"].heading}</p>
                            <p>{credibilityBoxes["exchange"].desc}</p>
                        </div>
                        <div className='flex justify-end items-center'>

                            <img src={credibilityBoxes["exchange"].img} className='w-28' alt={credibilityBoxes["exchange"].heading} />
                        </div>

                    </div>
                </div>


                <div className='flex  '>

                    <div className='   h-32 grid grid-cols-2  gap-1 rounded-md'>
                    <div className='flex justify-start items-center'>

                        <img src={credibilityBoxes["moneyback"].img} className='w-28' alt={credibilityBoxes["moneyback"].heading} />
                        </div>

                        <div className='flex  flex-col justify-center'>
                            <p className='font-semibold'>{credibilityBoxes["moneyback"].heading}</p>
                            <p>{credibilityBoxes["moneyback"].desc}</p>
                        </div>
                    </div>
                </div>
                <div className='flex  '>

                    <div className='   h-32 grid grid-cols-2  gap-1 rounded-md'>
                        <div className='flex  flex-col justify-center'>
                            <p className='font-semibold'>{credibilityBoxes["warranty"].heading}</p>
                            <p>{credibilityBoxes["warranty"].desc}</p>
                        </div>
                    <div className='flex justify-end items-center'>

                        <img src={credibilityBoxes["warranty"].img} className='w-28' alt={credibilityBoxes["warranty"].heading} />
                        </div>

                    </div>
                </div>

            </div>

        </>
    )
}
