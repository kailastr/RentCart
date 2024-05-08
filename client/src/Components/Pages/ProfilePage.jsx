import React, { useState } from 'react'

const ProfilePage = () => {

    const [profileDetails, setProfileDetails] = useState({
        image: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
        name: "Kailas",
        about: "",
        mobile: "99999999",
        email: "dummy@gmail.com"
    });

    return (
        <div className='w-full flex justify-center my-10'>
            <div className='w-10/12'>
                <h1 className='text-3xl'>Profile</h1>
                <div className='w-full flex justify-center border border-emerald-400 text-emerald-800 p-2'>
                    <div className='w-full'>
                        <div className='lg:flex w-full'>
                            <div className='lg:w-4/12 sm:w-full flex flex-col justify-center items-center gap-2'>
                                <div className='w-48 h-48 m-5 rounded-full overflow-hidden border border-emerald-400 mx-auto bg-cover bg-center' style={{ backgroundImage: `url(${profileDetails.image})` }} />
                                <label htmlFor="profileImage" className='text-lg'>Update your image</label>
                                <input type="file" name="profileImage" id="profileImage" />
                            </div>
                            <div className='lg:w-8/12 sm:w-full flex flex-col gap-2 p-5'>
                                <h2 className='text-2xl underline decoration-emerald-400 mb-2'>Personal Info</h2>
                                <label htmlFor="userName" className=' text-lg'>Name : </label>
                                <input type="text" name="userName" id="userName" className='border border-emerald-500 p-2 w-11/12 focus:outline-emerald-300' placeholder={profileDetails.name} />
                                <label htmlFor="about" className='text-lg'>About <span className='text-gray-500 text-base'>(optional)</span> : </label>
                                <textarea name="about" id="about" className='border border-emerald-500 p-2 w-11/12 focus:outline-emerald-300' rows={3}></textarea>

                            </div>
                        </div>
                        <hr className='my-5' />
                        <div className='flex flex-col w-full m-5 gap-2'>
                            <h2 className='text-2xl underline decoration-emerald-400 mb-5'>Contact Info</h2>
                            <div className='w-full flex md:flex-row sm:flex-col items-center gap-5'>
                                <input type="number" name="mobile" id="mobile" className='border border-emerald-500 p-2 focus:outline-emerald-400' style={{ width: "calc(50% - 2rem" }} placeholder={profileDetails.mobile} />
                                <input type="email" name="mailId" id="mailId" className='border border-emerald-500 p-2 focus:outline-emerald-400' style={{ width: "calc(50% - 2rem" }} placeholder={profileDetails.email} />
                            </div>
                        </div>
                        <div className='flex items-center justify-center my-5'>
                            <button className='px-3 py-2 text-lg text-white bg-emerald-500 hover:bg-emerald-600 transition duration-200 ease-in-out'>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage