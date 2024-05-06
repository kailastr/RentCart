import React, { useState } from 'react';

//components
import ProductCard from '../Components/Card/ProductCard';

const IndexPage = () => {

    const Products = [
        {
            title: "OnePlus nord 2",
            description: "Good Condition, 1 year used",
            price: "10,000",
            image: "https://i.gadgets360cdn.com/large/oneplus_nord_review_cover_2_1595679575379.jpg",
            location: "Kerala, Kochi",
            date: "Man 23",
        },
        {
            title: "OnePlus nord 2",
            description: "Good Condition, 1 year used",
            price: "10,000",
            image: "https://i.gadgets360cdn.com/large/oneplus_nord_review_cover_2_1595679575379.jpg",
            location: "Kerala, Kochi",
            date: "Man 23",
        },
        {
            title: "OnePlus nord 2",
            description: "Good Condition, 1 year used",
            price: "10,000",
            image: "https://i.gadgets360cdn.com/large/oneplus_nord_review_cover_2_1595679575379.jpg",
            location: "Kerala, Kochi",
            date: "Man 23",
        },
        {
            title: "OnePlus nord 2",
            description: "Good Condition, 1 year used",
            price: "10,000",
            image: "https://i.gadgets360cdn.com/large/oneplus_nord_review_cover_2_1595679575379.jpg",
            location: "Kerala, Kochi",
            date: "Man 23",
        },
        {
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
            <section className='w-full flex items-center justify-center'>
                <div className='w-10/12 h-48 my-5 border-2 border-emerald-400 p-5'>
                    <h1 className='text-2xl'>Filter</h1>
                    <div className='w-full h-0 border border-emerald-200' />
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