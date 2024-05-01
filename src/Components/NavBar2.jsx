import React from 'react';

const NavBar2 = () => {
    return (
        <div className='text-base mt-3 mx-4 lg:flex gap-72'>
            <div>Location bar</div>
            <div className='overflow-auto md:max-w-full scrollBar'>
                <div className='flex gap-7 text-nowrap'>
                    <div>Live Shows</div>
                    <div>Streams</div>
                    <div>Movies</div>
                    <div>Plays</div>
                    <div>Events</div>
                    <div>Sports</div>
                    <div>Activities</div>
                </div>
            </div>
        </div>
    );
};

export default NavBar2;
