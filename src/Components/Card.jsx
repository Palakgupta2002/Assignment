import React from 'react';
import location from "../assest/Location.svg"
const Card = ({ cardData, imageUrl }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };
    return (
        <div className="rounded  shadow-lg mx-4 my-4 z-20 relative">
            <div className=' w-60'>
                <img src={imageUrl} alt={cardData.eventName} className='w-full' />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4 text-white z-50">
                <div className="flex justify-between mt-60">
                    <div className='font-bold'>Make Agree</div>
                    <div className="text-xs mt-1 ">{formatDate(cardData.date.slice(0, 10))}</div>
                </div>
                <div className="flex gap-4">
                    <div className="flex ">
                        <img src={location} alt="Location" className="w-8 h-8 -mt-1" />
                        <div className="text-sm">{cardData.cityName}</div>
                    </div>
                    <div className="text-sm">{cardData.weather}</div>
                </div>
            </div>


        </div>
    );
};

export default Card;
