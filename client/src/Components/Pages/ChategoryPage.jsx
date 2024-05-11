import React from 'react';

import { useParams } from 'react-router-dom';

//component
import ProductCard from '../Card/ProductCard';
import Filter from '../Filter/Index';
const ChategoryPage = () => {

    const { chategory } = useParams();

    // if (chategory === 'Mobile' || ) {
    //     page not found
    // }

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

            <div className='w-full flex items-center justify-center my-10'>
                <div className='w-10/12'>
                    <h1 className='text-3xl m-2'>{chategory} Section</h1>
                    <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                        {Products.map((item, index) => (
                            <ProductCard {...item} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChategoryPage