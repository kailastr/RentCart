import React from 'react';

//icons
import { FaRegMap } from "react-icons/fa6";
import { RiAdvertisementLine } from "react-icons/ri";
import { RiAddBoxLine } from "react-icons/ri";
import { IoChatbubblesOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

function MdBottomNav() {
    return (
        <>
            <div className='w-full h-14 bg-emerald-50 fixed bottom-0 border-t border-emerald-300 flex items-center justify-center'>
                <div className='w-10/12 flex items-center justify-center gap-20 text-sm font-semibold text-emerald-700'>
                    <div>
                        <FaRegMap className='text-xl mx-auto' />
                        <p>LOCATION</p>
                    </div>
                    <div>
                        <RiAdvertisementLine className='text-xl mx-auto' />
                        <p>ADS</p>
                    </div>
                    <div>
                        <RiAddBoxLine className='text-xl mx-auto' />
                        <p>ADD</p>
                    </div>
                    <div>
                        <IoChatbubblesOutline className='text-xl mx-auto' />
                        <p>CHATS</p>
                    </div>
                    <div>
                        <CgProfile className='text-xl mx-auto' />
                        <p>PROFILE</p>
                    </div>
                </div>
            </div>
        </>
    )
}

function SmBottomNav() {
    return (
        <>
            <div className='w-full h-14 bg-emerald-50 fixed bottom-0 border-t border-emerald-300 flex items-center justify-center'>
                <div className='w-11/12 flex items-center justify-center gap-10 text-xs font-semibold text-emerald-700'>
                    <div>
                        <FaRegMap className='text-xl mx-auto' />
                        <p>LOCATION</p>
                    </div>
                    <div>
                        <RiAdvertisementLine className='text-xl mx-auto' />
                        <p>ADS</p>
                    </div>
                    <div>
                        <RiAddBoxLine className='text-xl mx-auto' />
                        <p>ADD</p>
                    </div>
                    <div>
                        <IoChatbubblesOutline className='text-xl mx-auto' />
                        <p>CHATS</p>
                    </div>
                    <div>
                        <CgProfile className='text-xl mx-auto' />
                        <p>PROFILE</p>
                    </div>
                </div>
            </div>
        </>
    )
}

const IndexBottomNav = () => {
    return (
        <>
            <div className='hidden md:flex lg:hidden'>
                <MdBottomNav />
            </div>

            <div className=' sm:flex md:hidden'>
                <SmBottomNav />
            </div>
        </>
    )
}

export default IndexBottomNav