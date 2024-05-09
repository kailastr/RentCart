import React, { useState } from 'react';

const AddPage = () => {
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

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

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    return (
        <>
            <div className='w-full flex justify-center items-center my-10'>
                <div className='w-8/12'>
                    <h1 className='text-3xl'>ADD YOUR RENTINGS</h1>
                    <div className='w-full border border-emerald-400'>
                        <form action="">
                            <div className='w-full flex-col justify-center items-center py-5 px-10'>
                                <div className='flex-col my-5'>
                                    <label htmlFor="title" className="text-emerald-700 text-lg">Enter Product Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="border border-emerald-300 p-2 w-full"
                                    />
                                </div>
                                <div className='flex-col my-5'>
                                    <label htmlFor="category" className="text-emerald-700 text-lg">Select the Product Category</label>
                                    <select
                                        name="category"
                                        id="category"
                                        className="border border-emerald-300 p-2 w-full"
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
                                    <label htmlFor="description" className="text-emerald-700 text-lg">Enter Product Description</label>
                                    <textarea
                                        name="description"
                                        id="description"
                                        className="border border-emerald-300 p-2 w-full h-32"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    ></textarea>
                                </div>
                                <div className='flex-col my-5'>
                                    <label htmlFor="price" className="text-emerald-700 text-lg">Enter the Renting Price</label>
                                    <input
                                        type="number"
                                        name="price"
                                        id="price"
                                        className="border border-emerald-300 p-2 w-full"
                                    />
                                </div>
                                <div className='flex-col my-5'>
                                    <label htmlFor="image" className="text-emerald-700 text-lg">Upload Product Image</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        name="image"
                                        id="image"
                                        className="border border-emerald-300 p-2 w-full"
                                        onChange={handleImageChange}
                                    />
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