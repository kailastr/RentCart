import React, { useState, useRef } from 'react';

//image
import AddImage from '../../images/AddImage.jpg'

const AddPage = () => {
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const RentingCategories = [
        { label: 'Cars' },
        { label: 'Motorcycle' },
        { label: 'Mobile Phones' },
        { label: 'Electronics' },
        { label: 'Furniture' },
        { label: 'Fashion' },
        { label: 'Book' },
        { label: 'Sports' }
    ];

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            alert(`Lat : ${latitude} and Long : ${longitude}`);
        }, (error) => {
            console.error('Error getting location:', error);
        });
    };

    const [productImg1State, setProductImg1State] = useState(null);

    const productImg1Ref = useRef(null);
    const productImg2Ref = useRef(null);
    const productImg3Ref = useRef(null);
    const productImg4Ref = useRef(null);
    const productImg5Ref = useRef(null);
    const productImg6Ref = useRef(null);
    const productImg7Ref = useRef(null);
    const productImg8Ref = useRef(null);
    const productImg9Ref = useRef(null);
    const productImg10Ref = useRef(null);
    const productImg11Ref = useRef(null);
    const productImg12Ref = useRef(null);

    const productImg1Click = () => {
        productImg1Ref.current.click();
    }

    const uploadProductImg1 = (event) => {
        const file = event.target.files[0];

        if (file && file.type.startsWith('image/')) {
            const ProductImage1Url = URL.createObjectURL(file);
            console.log(ProductImage1Url);
            setProductImg1State(ProductImage1Url);
        }
        else {
            alert("Please upload an image file");

            event.target.value = null;
        }
    }

    return (
        <>
            <div className='w-full flex justify-center items-center my-10'>
                <div className='w-8/12'>
                    <h1 className='text-3xl'>ADD YOUR RENTINGS</h1>
                    <div className='w-full border border-emerald-400'>
                        <form action="">
                            <div className='w-full flex-col justify-center items-center py-5 px-10'>
                                <div className='flex-col my-5'>
                                    <label htmlFor="category" className="text-emerald-700 text-lg">Select the Product Category</label>
                                    <select
                                        name="category"
                                        id="category"
                                        className="border-2 border-emerald-400 focus:outline-emerald-600 p-2 w-full"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option value="" disabled>Select a category</option>
                                        {RentingCategories.map((option, index) => (
                                            <option key={index} value={option.label} className='p-2 text-lg'>{option.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='flex-col my-5'>
                                    <label htmlFor="title" className="text-emerald-700 text-lg">Enter Product Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="border-2 border-emerald-400 focus:outline-emerald-600 p-2 w-full"
                                    />
                                </div>
                                <div className='flex-col my-5'>
                                    <label htmlFor="description" className="text-emerald-700 text-lg">Enter Product Description</label>
                                    <textarea
                                        name="description"
                                        id="description"
                                        className="border-2 border-emerald-400 focus:outline-emerald-600 p-2 w-full h-32"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    ></textarea>
                                </div>
                                <div className='w-full flex-col my-5'>
                                    <h3 className='text-emerald-700 text-lg'>Location Permission</h3>
                                    <div className=' border-2 border-emerald-400 w-full flex lg:flex-row sm:flex-col justify-between p-2'>
                                        <div className='lg:w-2/5 sm:w-full'>
                                            <label htmlFor="pickUpLocation" className='text-lg text-emerald-700'>Pick Up Address</label>
                                            <textarea
                                                name="pickUpLocation"
                                                id="pickUpLocation"
                                                rows={3}
                                                className='w-full border-2 border-emerald-400 focus:outline-emerald-600'
                                            />
                                        </div>
                                        <div className='hidden lg:flex border border-emerald-400' />
                                        <div className='lg:w-2/5 sm:w-full flex justify-center items-center'>
                                            <button
                                                type='button'
                                                className='border-2 border-emerald-400 bg-emerald-500 text-white hover:bg-emerald-600 transition duration-200 ease-out text-lg px-3 py-1'
                                                onClick={getLocation}
                                            >
                                                Get My Current Location
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex-col my-5  p-2'>
                                    <h3 className="text-emerald-700 text-lg mb-3">Upload Images ( 12 Max ) </h3>
                                    <div className=' lg:w-1/3 md:w-2/3 sm:w-full grid grid-cols-4 gap-1'>
                                        <div className=' cursor-pointer' onClick={productImg1Click}>
                                            <img src={productImg1State === null ? AddImage : productImg1State} alt="" className='h-20 w-20 border border-emerald-400' />
                                            <input
                                                type="file"
                                                name="prdctImg1"
                                                id="prdctImg1"
                                                className='hidden'
                                                ref={productImg1Ref}
                                                onChange={uploadProductImg1}
                                            />
                                        </div>
                                        <img src={AddImage} alt="" className='h-20 w-20 border border-emerald-400' />
                                        <img src={AddImage} alt="" className='h-20 w-20 border border-emerald-400' />
                                        <img src={AddImage} alt="" className='h-20 w-20 border border-emerald-400' />
                                        <img src={AddImage} alt="" className='h-20 w-20 border border-emerald-400' />
                                        <img src={AddImage} alt="" className='h-20 w-20 border border-emerald-400' />
                                        <img src={AddImage} alt="" className='h-20 w-20 border border-emerald-400' />
                                        <img src={AddImage} alt="" className='h-20 w-20 border border-emerald-400' />
                                        <img src={AddImage} alt="" className='h-20 w-20 border border-emerald-400' />
                                        <img src={AddImage} alt="" className='h-20 w-20 border border-emerald-400' />
                                        <img src={AddImage} alt="" className='h-20 w-20 border border-emerald-400' />
                                        <img src={AddImage} alt="" className='h-20 w-20 border border-emerald-400' />
                                    </div>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <button type="submit" className="bg-emerald-500 text-white py-2 px-4 hover:bg-emerald-600">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddPage;