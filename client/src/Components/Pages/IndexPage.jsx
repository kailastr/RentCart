import React, { useState } from 'react';

//components
import ProductCard from '../Card/ProductCard';
import Filter from '../Filter/Index'

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
            <Filter />

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