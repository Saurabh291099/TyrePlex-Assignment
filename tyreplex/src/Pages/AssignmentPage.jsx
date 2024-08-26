import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import bnrImg1 from '../assets/images/image1.jpg'
import bnrImg2 from '../assets/images/image2.jpg'
import bnrImg3 from '../assets/images/image3.jpg'
import profile1 from '../assets/images/md.png'
import profile3 from '../assets/images/pradeep.png'
import profile2 from '../assets/images/rohit.png'
import tyre1 from '../assets/images/MRF.png'
import tyre2 from '../assets/images/CEAT.png'
import tyre3 from '../assets/images/Goodyear_logo.png'
import tyre4 from '../assets/images/Apollo.png'
import tyre5 from '../assets/images/Bridgestone-Logo.png'
import tyre6 from '../assets/images/JK-Tyre.png'
import tyre7 from '../assets/images/michelin.png'
import wheel1 from '../assets/images/wheel-alignment-bal.webp'
import wheel2 from '../assets/images/wheel-alignment2.png'


const AssignmentPage = () => {

    const images = [
        { img: bnrImg1 },
        { img: bnrImg2 },
        { img: bnrImg3 }
    ]

    const reviews = [
        {
            profile: profile1,
            Name: 'MD Nashir',
            text: 'Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional service. We would plan to reuse your services and recommend these to friends and family. You came to us as a recommendation and this proved accurate.',
        },
        {
            profile: profile2,
            Name: 'Rohit Bhati',
            text: ' Went for Tyre change . Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend ',

        },
        {
            profile: profile3,
            Name: 'Pradeep Kumar',
            text: ' Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience ',
        },

    ]


    const tyres = [
        {
            name: 'MRF',
            img: tyre1
        },
        {
            name: 'CEAT',
            img: tyre2
        },
        {
            name: 'Goodyear',
            img: tyre3
        },
        {
            name: 'Apollo',
            img: tyre4
        },
        {
            name: 'Bridgestone',
            img: tyre5
        },
        {
            name: 'JK',
            img: tyre6
        },
        {
            name: 'Michelin',
            img: tyre7
        },
    ]



    return (

        <>

            {/* Main Links */}

            <div className='flex flex-wrap gap-1 lg:gap-2 p-2 my-3'>
                <a href="/" className='text-sm lg:text-md hover:text-gray-400'>Home</a> /
                <a href="/" className='text-sm lg:text-md hover:text-gray-400'>Tyre Dealers</a> /
                <a href="/" className='text-sm lg:text-md hover:text-gray-400'>Tyre Dealers Ghaziabad</a> /
                <a href="/" className='text-sm lg:text-md hover:text-gray-400'>SHREE HEMKUNT TYRES AND SERVICES</a>
            </div>

            {/* Dealer card start */}

            <div className='container p-2 lg:p-4 bg-[#fff] border rounded-md shadow-sm'>
                <div className="flex flex-col-reverse flex-wrap lg:flex lg:flex-row">
                    <div className="w-[100%] lg:w-[50%] p-2">
                        <div className='w-full flex justify-between items-center'>
                            <h1 className='text-lg lg:text-xl font-semibold'>SHREE HEMKUNT TYRES AND SERVICES</h1>
                            <span className='text-green-600 font-normal'><i class="fa-solid fa-check text-[11px] mx-2 h-4 w-4 text-white bg-green-600 p-1 rounded-full "></i>Verified</span>
                        </div>

                        <div className='w-full flex gap-2 align-middle py-3'>
                            <span className='px-2 bg-green-600 text-white rounded-md'>4.9</span>
                            <div className='flex justify-center items-center'>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                            </div>
                            <span className='underline'>2278 Reviews</span>
                            <button className='border px-2 rounded-md text-green-400 hover:bg-green-600 hover:text-white'>Rate</button>
                        </div>

                        <div>
                            <div className='flex gap-3'>

                                <span><i class="fa-solid fa-location-dot text-gray-400"></i></span>
                                <p className=' text-md'> PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02 INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014</p>
                            </div>
                            <div className='flex gap-3'>
                                <span><i class="fa-regular fa-clock "></i></span>
                                <p className='text-gray-600 font-semibold text-md'>Open - Monday   to   Sunday - 10:00AM to 8:00PM</p>
                            </div>

                        </div>
                        <div className='my-6'>
                            <a href='https://www.google.com/maps/place/CEAT+Shoppe,+Shree+Hemkunt+Tyres+And+Services/@28.6426711,77.3789929,15z/data=!4m6!3m5!1s0x390cf1bae0e73a15:0xc268cb9ed2106c69!8m2!3d28.6426501!4d77.3790131!16s%2Fg%2F11fhkgsb1p?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D' target='_blank' className='border rounded-md px-8 py-2 font-semibold text-red-600 border-red-600 hover:bg-red-700 hover:text-white'>Get Directions</a>
                        </div>

                    </div>
                    <div className="w-[100%] lg:w-[50%] h-[15rem] lg:h-[15rem] p-2 overflow-hidden">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                            }}
                            className="mySwiper"
                        >

                            {images.map((data, index) => {
                                return (
                                    <SwiperSlide key={index}><img src={data.img} alt="carousel image" />
                                    </SwiperSlide>

                                )
                            })}

                        </Swiper>
                    </div>
                </div>


                <div className='py-2'>
                    <h2 className='font-semibold my-2'>2278 Google Reviews</h2>
                    <div className='card-main flex flex-wrap gap-2'>

                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                            }}
                            className="mySwiper"
                        >

                            {reviews.map((data, index) => {
                                return (
                                    <SwiperSlide>
                                        <div className="card py-2 px-6 border rounded-md shadow-md">
                                            <div className="card-header w-full flex gap-2 items-center">
                                                <div className="profile-div h-12 w-12 my-2" >
                                                    <img className='rounded-full object-cover h-full w-full' src={data.profile} alt="profile image" />
                                                </div>
                                                <h3 className='font-bold text-[16px]'>{data.Name}</h3>
                                            </div>

                                            <p className='text-justify text-[14px] line-clamp-3'>{data.text}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}




                        </Swiper>



                    </div>
                </div>
            </div>

            {/* Dealer card End */}


            {/* Deals Section start  */}
            <div className='container p-2 my-4 lg:p-4 bg-[#fff] border rounded-md shadow-sm'>
                <h2 className='font-bold my-2'>Deals In</h2>
                <div className='card-main flex flex-wrap gap-2'>

                    <Swiper

                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 6,
                                spaceBetween: 10,
                            },
                        }}

                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                    >

                        {tyres.map((data, index) => {
                            return (
                                <SwiperSlide className='deal-div' >
                                    <div className="card w-48 h-40 p-2 border rounded-md hover:shadow-lg hover:cursor-pointer" key={index}>
                                        <div className="card-header w-full h-full flex flex-col items-center justify-center gap-1">
                                            <div className='w-full h-16' >
                                                <img className='w-full h-full object-contain' src={data.img} alt="" />
                                            </div>
                                            <h3 className='font-bold'>{data.name}</h3>
                                        </div>


                                    </div>

                                </SwiperSlide>
                            )
                        })}

                    </Swiper>

                    {/* {tyres.map((data, index) => {
                        return (

                            <>
                                <div className='w-20 h-20 border' >
                                    <img className='w-full h-full object-contain' src={data.img} alt="" />
                                </div>
                            </>
                        )
                    })} */}

                </div>
            </div>

            {/* Deals Section End  */}


            {/* Services section start  */}

            <div className='container p-2 my-4 lg:p-4 bg-[#fff] border rounded-md shadow-sm'>
                <h2 className='font-bold my-2'>Services offered by this dealer</h2>
                <div className='card-main flex flex-wrap gap-2'>

                    <div className="card w-[12rem] h-[12rem] md:w-[18rem] md:h-[15rem] border rounded-md hover:shadow-lg hover:cursor-pointer">
                        <div className="card-header w-full h-full flex flex-col gap-2 items-center justify-center">
                            <div className="profile-div w-20 h-16 md:h-20 md:w-40 my-2" >
                                <img className='object-contain h-full w-full' src={wheel1} alt="profile image" />
                            </div>
                            <h3 className='font-bold'>Wheel Balancing</h3>
                            <button className='border bg-[#ed1c24] hover:bg-red-700 text-white px-4 py-1 rounded-md'>Book Now</button>

                        </div>

                    </div>
                    <div className="card w-[12rem] h-[12rem] md:w-[18rem] md:h-[15rem] border rounded-md hover:shadow-lg hover:cursor-pointer">
                        <div className="card-header w-full h-full flex flex-col gap-2 items-center justify-center">
                            <div className="profile-div w-20 h-16 md:h-20 md:w-40 my-2" >
                                <img className='object-contain h-full w-full' src={wheel2} alt="profile image" />
                            </div>
                            <h3 className='font-bold'>Wheel Alignment</h3>
                            <button className='border bg-[#ed1c24] hover:bg-red-700 text-white px-4 py-1 rounded-md'>Book Now</button>

                        </div>

                    </div>

                </div>
            </div>

            {/* Services section End  */}


            {/* Payment Section Start  */}

            <div className='container p-2 my-4 lg:p-4 bg-[#fff] border rounded-md shadow-sm'>
                <h2 className='font-bold my-2'>Payment Mode</h2>
                <p><i class="fa-solid fa-check mx-2 text-green-500 "></i>Deposit to Account</p>
                <p><i class="fa-solid fa-check mx-2 text-green-500 "></i>Credit Card/Debit Card</p>
                <p><i class="fa-solid fa-check mx-2 text-green-500 "></i>Net Banking</p>
                <p><i class="fa-solid fa-check mx-2 text-green-500 "></i>UPI</p>
                <p><i class="fa-solid fa-check mx-2 text-green-500 "></i>Wallets (PayTM/PhonePe/Amazon etc.)</p>
            </div>

            {/* Payment Section End  */}

            {/* Newsletter Start */}

            <div className='container grid grid-cols-1 grid-flow-col-dense lg:grid lg:grid-cols-2 grid-rows-1 gap-2 p-2 lg:p-4 bg-[#FFEAAA] border rounded-md shadow-lg'>
                <div>
                    <h2 className='font-bold my-2'>Have a question about Tyres?</h2>
                    <p>Get an answer in 24 hours from our experts.</p>
                    <div className='flex gap-2 items-center'>

                        <input type="text" className='w-[30rem] py-2 px-4 my-4 border outline-none border-[#ffca28] shadow-[#ffca28] rounded-full' placeholder='Ask or Search your Question' />
                        <button className='border bg-[#ed1c24] hover:bg-red-700 text-white px-4 py-1 rounded-md'>Ask</button>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img width={80} src="https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png?v=600&tr=q-60" alt="side image" />
                </div>

            </div>

            {/* Newsletter End */}

            {/* Footer Start   */}
            <footer className='container p-2 lg:p-4 bg-[#fff] border rounded-md shadow-sm'>
                <div className='grid grid-cols-2 lg:grid lg:grid-cols-4 py-2 grid-rows-1 gap-2'>
                    <div>
                        <img width={100} src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo-mbl.png?tr=w-150,q-77&v=512" alt="footer logo" />
                        <div className='flex gap-4 py-2'>
                            <button><i class="fa-brands fa-facebook text-2xl text-gray-400"></i></button>
                            <button><i class="fa-brands fa-instagram text-2xl text-gray-400"></i></button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 text-[#130F268A]'>
                        <a href="/">Who We Are</a>
                        <a href="/">Are you a Tyre Dealer?</a>
                    </div>
                    <div className='flex flex-col gap-1 text-[#130F268A]'>
                        <a href="/">Privacy Policy</a>
                        <a href="/">Terms of use</a>

                    </div>
                    <div className='flex flex-col gap-1 text-[#130F268A]'>
                        <a href="/">Contact Us</a>
                        <a href="/">Career</a>
                        <a href="/">Shipping & Return Policy</a>

                    </div>
                </div>

                <hr />

                <div className='py-2 text-center text-[#130F268A]'>
                    <p>©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.</p>
                </div>
            </footer>
            {/* Footer End   */}

        </>

    )
}

export default AssignmentPage
