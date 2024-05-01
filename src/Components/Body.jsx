import React, { useEffect, useState } from 'react';
import banner from '../assest/Banner.svg';
import Card from './Card';
import image1 from "../assest/image1.svg"
import image2 from "../assest/image2.svg"
import image3 from "../assest/image3.svg"
import image4 from "../assest/image4.svg"
import image5 from "../assest/image5.svg"
import image6 from "../assest/image6.svg"
import image7 from "../assest/image7.svg"
import image8 from "../assest/image8.svg"
import upcoming from "../assest/Upcoming1.svg"
import upcoming1 from "../assest/Upcoming2.svg"
import upcoming2 from "../assest/Upcoming3.svg"
import upcoming3 from "../assest/Upcoming8.svg"
import upcoming4 from "../assest/Upcoming5.svg"
import upcoming5 from "../assest/Upcoming6.svg"
import upcoming6 from "../assest/Upcoming7.svg"
import upcoming7 from "../assest/Upcoming8.svg"
import upcoming8 from "../assest/Upcoming9.svg"
import upcoming9 from "../assest/Upcoming10.svg"
import ShimmerUi from './ShimmerUi';
import arrow from "../assest/arrow.svg"
import arrow1 from "../assest/arrow2.svg"
import location from "../assest/Location1.svg"

const Body = () => {
    const imageArray = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
    ]
    const imageArray1 = [
        upcoming,
        upcoming1,
        upcoming2,
        upcoming3,
        upcoming4,
        upcoming5,
        upcoming6,
        upcoming7,
        upcoming8,
        upcoming9,

    ]
    const [eventData, setEventData] = useState(null)
    const data = async () => {
        try {
            const fetchData = await fetch("https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco");
            if (fetchData.ok) {
                const fetchJson = await fetchData.json()
                setEventData(fetchJson)
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        data()
    }, [])

    const [upcomingData, setUpcomingData] = useState(null)

    const FetchUpcomingData = async () => {
        try {
            const fetchUpcomingData = await fetch("https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming")
            if (fetchUpcomingData.ok) {
                const fetchUpcomingJson = await fetchUpcomingData.json()
                setUpcomingData(fetchUpcomingJson)
            }

        }
        catch (err) {
            console.log(err)

        }
    }
    useEffect(() => {
        FetchUpcomingData()
    }, [])
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    console.log(eventData, "hello")
    return (
        <div>
            <div className='relative mt-7'>
                <div className='flex justify-center items-center' style={{ height: "367px" }}>
                    <img src={banner} className='h-full w-full object-cover' alt='banner.svg' />
                </div>
                <div className='absolute -top-14 left-0 w-full h-full flex flex-col justify-center items-center'>

                    <p className='text-white text-center w-1/2 text-xl font-bold  leading-relaxed md:text-4xl'>
                        Discover Exciting Events Happening Near You - Stay Tuned for Updates
                    </p>
                    <hr className="w-full border-white absolute mt-9 z-50" />
                    <p className='text-white text-center w-1/2 text-xs hidden  lg:text-lg'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe aut odio impedit, modi vel amet sed, ratione animi rerum ad asperiores repellat non distinctio dolorum accusamus esse hic maxime vitae?
                    </p>
                </div>
            </div>

            {
                eventData !== null ? (
                    <div className='relative ml-20'>
                        <div className='flex text-white z-40 -mt-24 font-bold text-2xl'>
                            <p className=''>Recommanded Shows</p><img width={"40px"} src={arrow1} alt='arrow.avg' />
                        </div>
                        <hr className="w-full border-white absolute mt-9 z-50" />
                        <div className='flex overflow-scroll ' >
                            {
                                eventData !== null && eventData?.events.map((ele, index) => (
                                    <div className="relative" key={index}>
                                        <Card cardData={ele} imageUrl={imageArray[index]} />
                                        <hr className="w-full border-white absolute bottom-0 z-40" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ) : (
                    <ShimmerUi />
                )
            }

            {
                upcomingData!==null ? <div className='ml-20 relative '>
                <div className='flex'><p className='font-bold text-2xl'>Upcoming Events</p><img src={arrow} width={"40px"} alt='arrow.svg' /></div>
                <div className='flex flex-wrap w-full gap-4'>
                    {upcomingData &&
                        upcomingData.events.map((ele, index) => (
                            <div className='shadow-lg bg-white p-6 rounded-lg' key={index}>
                                <div className='relative '>
                                    <img src={imageArray1[index]} alt="upcoming events" className='w-full' />
                                    <div className='absolute -mt-10 px-5 text-white bg-gradient-to-r from-transparent to-black bg-opacity-50 w-full'>{formatDate(ele.date.slice(0, 10))}</div>
                                </div>
                                <div className='flex'><img src={location} alt="" className='w-10' /><div className='mt-2'>{ele.cityName}</div></div>
                            </div>
                        ))}
                </div>

            </div>:
            <ShimmerUi/>
            }
        </div>

    );
};

export default Body;
