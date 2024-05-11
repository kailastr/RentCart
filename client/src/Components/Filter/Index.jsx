import React, { useState } from 'react';

//material ui
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Index = () => {

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

    return (
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
                                    marks
                                    min={0}
                                    max={1000}
                                    color="black"
                                />
                            </Box>
                        </div>
                    </div>
                    <div className=' border border-emerald-300'></div>
                </div>
            </div>
        </section>
    )
}

export default Index