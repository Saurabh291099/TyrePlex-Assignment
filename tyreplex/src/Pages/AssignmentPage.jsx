import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const AssignmentPage = () => {


    return (

        <>

            <div className='flex flex-wrap gap-1 lg:gap-2 p-2 my-3'>
                <a href="/" className='text-sm lg:text-md hover:text-gray-400'>Home</a> /
                <a href="/about" className='text-sm lg:text-md hover:text-gray-400'>Tyre Dealers</a> /
                <a href="/" className='text-sm lg:text-md hover:text-gray-400'>Tyre Dealers Ghaziabad</a> /
                <a href="/" className='text-sm lg:text-md hover:text-gray-400'>SHREE HEMKUNT TYRES AND SERVICES</a>
            </div>

            <div className='container p-2 lg:p-4 bg-[#fff] border rounded-md shadow-sm'>
                <div className="flex flex-col-reverse flex-wrap lg:flex lg:flex-row">
                    <div className="w-[100%] lg:w-[50%] p-2">
                        <div className='w-full flex justify-between items-center'>
                            <h1 className='text-lg lg:text-xl font-semibold'>SHREE HEMKUNT TYRES AND SERVICES</h1>
                            <span className='text-green-600 font-normal'>Verified</span>
                        </div>

                        <div className='w-full flex gap-2 align-middle py-3'>
                            <span className='px-2 bg-green-600 text-white rounded-md'>4.9</span>
                            <div className='flex justify-center items-center border'>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                                <i class="fa-solid fa-star text-yellow-400"></i>
                            </div>
                            <span>2278 Reviews</span>
                            <button className='border px-2 rounded-md text-green-400'>Rate</button>
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
                        <button className='border rounded-md px-8 py-2 my-4 font-semibold text-red-600 border-red-600 hover:bg-red-700 hover:text-white'>Get Directions</button>

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
                            <SwiperSlide><img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" alt="carousel image" />
                            </SwiperSlide>
                            <SwiperSlide><img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" alt="carousel image" />
                            </SwiperSlide>
                            <SwiperSlide><img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" alt="carousel image" />
                            </SwiperSlide>
                            <SwiperSlide><img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" alt="carousel image" />
                            </SwiperSlide>
                            <SwiperSlide><img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" alt="carousel image" />
                            </SwiperSlide>
                            <SwiperSlide><img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" alt="carousel image" />
                            </SwiperSlide>
                            <SwiperSlide><img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" alt="carousel image" />
                            </SwiperSlide>

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
                            <SwiperSlide>
                                <div className="card p-4 border rounded-md shadow-md">
                                    <div className="card-header w-full flex gap-2 items-center">
                                        <div className="profile-div h-12 w-12 my-2" >
                                            <img className='rounded-full object-cover h-full w-full' src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" alt="profile image" />
                                        </div>
                                        <h3 className='font-bold text-[16px]'>Md Nasir</h3>
                                    </div>

                                    <p className='text-justify text-sm'>Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and profession</p>
                                </div>
                            </SwiperSlide>



                        </Swiper>



                    </div>
                </div>
            </div>

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
                                slidesPerView: 5,
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
                        <SwiperSlide>
                            <div className="card w-[15rem] p-2 border rounded-md hover:shadow-lg hover:cursor-pointer">
                                <div className="card-header w-full flex flex-col gap-2 items-center">
                                    <div className="profile-div h-20 w-40 my-2" >
                                        <img className='object-cover h-full w-full' src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" alt="profile image" />
                                    </div>
                                    <h3 className='font-bold'>Md Nasir</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card w-[15rem] p-2 border rounded-md hover:shadow-lg hover:cursor-pointer">
                                <div className="card-header w-full flex flex-col gap-2 items-center">
                                    <div className="profile-div h-20 w-40 my-2" >
                                        <img className='object-cover h-full w-full' src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" alt="profile image" />
                                    </div>
                                    <h3 className='font-bold'>Md Nasir</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card w-[15rem] p-2 border rounded-md hover:shadow-lg hover:cursor-pointer">
                                <div className="card-header w-full flex flex-col gap-2 items-center">
                                    <div className="profile-div h-20 w-40 my-2" >
                                        <img className='object-cover h-full w-full' src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" alt="profile image" />
                                    </div>
                                    <h3 className='font-bold'>Md Nasir</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card w-[15rem] p-2 border rounded-md hover:shadow-lg hover:cursor-pointer">
                                <div className="card-header w-full flex flex-col gap-2 items-center">
                                    <div className="profile-div h-20 w-40 my-2" >
                                        <img className='object-cover h-full w-full' src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" alt="profile image" />
                                    </div>
                                    <h3 className='font-bold'>Md Nasir</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card w-[15rem] p-2 border rounded-md hover:shadow-lg hover:cursor-pointer">
                                <div className="card-header w-full flex flex-col gap-2 items-center">
                                    <div className="profile-div h-20 w-40 my-2" >
                                        <img className='object-cover h-full w-full' src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" alt="profile image" />
                                    </div>
                                    <h3 className='font-bold'>Md Nasir</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card w-[15rem] p-2 border rounded-md hover:shadow-lg hover:cursor-pointer">
                                <div className="card-header w-full flex flex-col gap-2 items-center">
                                    <div className="profile-div h-20 w-40 my-2" >
                                        <img className='object-cover h-full w-full' src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" alt="profile image" />
                                    </div>
                                    <h3 className='font-bold'>Md Nasir</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>




                </div>
            </div>

            <div className='container p-2 my-4 lg:p-4 bg-[#fff] border rounded-md shadow-sm'>
                <h2 className='font-bold my-2'>Services offered by this dealer</h2>
                <div className='card-main flex flex-wrap gap-2'>

                    <div className="card w-[18rem] h-[12rem] border rounded-md hover:shadow-lg hover:cursor-pointer">
                        <div className="card-header w-full h-full flex flex-col gap-2 items-center justify-center">
                            <div className="profile-div h-20 w-40 my-2" >
                                <img className='object-cover h-full w-full' src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg" alt="profile image" />
                            </div>
                            <h3 className='font-bold'>Md Nasir</h3>
                            <button className='border bg-[#ed1c24] hover:bg-red-700 text-white px-4 py-1 rounded-md'>Book Now</button>

                        </div>

                    </div>

                </div>
            </div>



            <div className='container p-2 my-4 lg:p-4 bg-[#fff] border rounded-md shadow-sm'>
                <h2 className='font-bold my-2'>Payment Mode</h2>

            </div>

            <div className='container grid grid-cols-2 grid-rows-1 gap-2 p-2 lg:p-4 bg-[#FFEAAA] border rounded-md shadow-lg'>
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
            <div className='container p-2 lg:p-4 bg-[#fff] border rounded-md shadow-sm'>
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
            </div>
        </>

    )
}

export default AssignmentPage
