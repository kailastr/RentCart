import React, { useState } from 'react';

//components
import ProductCard from '../Card/ProductCard'

//material ui
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const IndexPage = () => {

    const [searchingKm, setSearchingKm] = useState();

    function distanceValue(value) {
        setSearchingKm(value);
        return `${value}km`
    }

    function priceValue(value) {
        return `${value}Rs`
    }

    const [price, setPriceRange] = useState([20, 37]);

    const handleChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    const filerSearch = () => {
        console.log(`price: ${price} and Distance: ${searchingKm}`);
    }

    const Products = [
        {
            id_: "2255",
            title: "OnePlus nord 2",
            description: "Good Condition, 1 year used",
            price: "10,000",
            image: "https://i.gadgets360cdn.com/large/oneplus_nord_review_cover_2_1595679575379.jpg",
            location: "Kerala, Kochi",
            date: "Man 23",
        },
        {
            id_: "369",
            title: "OnePlus nord 2",
            description: "Good Condition, 1 year used",
            price: "10,000",
            image: "https://i.gadgets360cdn.com/large/oneplus_nord_review_cover_2_1595679575379.jpg",
            location: "Kerala, Kochi",
            date: "Man 23",
        },
        {
            id_: "39458743qfgdf345",
            title: "OnePlus nord 2",
            description: "Good Condition, 1 year used",
            price: "10,000",
            image: "https://i.gadgets360cdn.com/large/oneplus_nord_review_cover_2_1595679575379.jpg",
            location: "Kerala, Kochi",
            date: "Man 23",
        },
        {
            id_: "39458743qfgdf345",
            title: "OnePlus nord 2",
            description: "Good Condition, 1 year used",
            price: "10,000",
            image: "https://i.gadgets360cdn.com/large/oneplus_nord_review_cover_2_1595679575379.jpg",
            location: "Kerala, Kochi",
            date: "Man 23",
        },
        {
            id_: "39458743qfgdf345",
            title: "OnePlus nord 2",
            description: "Good Condition, 1 year used",
            price: "10,000",
            image: "https://i.gadgets360cdn.com/large/oneplus_nord_review_cover_2_1595679575379.jpg",
            location: "Kerala, Kochi",
            date: "Man 23",
        }
    ];

    return (
        <>
            <section className='w-full h-full flex items-center justify-center'>
                <div className='w-10/12 h-1/4 my-5 border-2 border-emerald-400 p-5'>
                    <div className='flex justify-between items-center'>
                        <h1 className='text-2xl'>Filter</h1>
                        <button className='bg-emerald-400 hover:bg-emerald-500 text-white font-semibold text-lg px-3 py-1 mb-1' onClick={filerSearch}>
                            Apply
                        </button>
                    </div>
                    <div className='w-full h-0 border border-emerald-200' />
                    <div className='w-full h-3/4 pt-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2'>
                        <div className=' border border-emerald-300 p-2'>
                            <h3 className=' text-lg'>Searching in {searchingKm} Km</h3>
                            <div className='m-2 w-full'>
                                <Box sx={{ width: 250 }}>
                                    <Slider
                                        aria-label="Temperature"
                                        defaultValue={20}
                                        getAriaValueText={distanceValue}
                                        valueLabelDisplay="auto"
                                        shiftStep={30}
                                        step={10}
                                        marks
                                        min={10}
                                        max={40}
                                        color=''
                                    />
                                </Box>
                            </div>
                        </div>
                        <div className=' border border-emerald-300 p-2'>
                            <h3 className=' text-lg'>Searching in Price Range</h3>
                            <div className='m-2 w-full'>
                                <Box sx={{ width: 250 }}>
                                    <Slider
                                        getAriaLabel={() => 'Temperature range'}
                                        value={price}
                                        onChange={handleChange}
                                        valueLabelDisplay="auto"
                                        getAriaValueText={priceValue}
                                        color="black"
                                    />
                                </Box>
                            </div>
                        </div>
                        <div className=' border border-emerald-300'></div>
                    </div>
                </div>
            </section>

            <section className='w-full flex items-center justify-center my-5'>
                <div className='w-10/12 flex items-center justify-center'>
                    <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                        {Products.map((item, index) => (
                            <ProductCard {...item} key={index} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default IndexPage