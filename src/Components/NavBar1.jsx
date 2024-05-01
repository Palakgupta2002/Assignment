import React from 'react';
import UpdateIcon from '../assest/ThreeLine.svg';
import HeartIcon from '../assest/Heart.svg';
import Account from "../assest/Account.svg"
import search from "../assest/Search.svg"

const NavBar1 = () => {
    return (
        <div className='flex justify-between items-center mt-5 mx-5 md:mx-2'>
            <div className='text-pink-600 text-3xl font-bold'>BookUsNow</div>
            <div className='hidden md:flex gap-6'>
                <button className='bg-black flex gap-3 px-5 py-3 text-white rounded-lg'>
                    <img width={'20px'} height={"20px"} src={UpdateIcon} alt='update.svg' />
                    <p>Categories</p>
                </button>
                <input
                    type='text'
                    className='w-96 border-2 border-solid border-gray-400 px-2'
                    placeholder='Search'
                />
               
            </div>
           
            <div className='flex gap-3 items-center'>
            <img className='md:hidden' src={search} width={"20px"}/>
            <img width={'40px'} src={HeartIcon} alt='heartIcon.svg' />
                <div className='hidden md:block'>Favriotes</div>
                <button className='border-2 border-solid border-gray-400 px-4 py-2 rounded-lg hidden md:block'>Sign In</button>
                <img className='block md:hidden' width={"20px"} src={Account} alt='Account.svg' />

            </div>
        </div>
    );
};

export default NavBar1;
