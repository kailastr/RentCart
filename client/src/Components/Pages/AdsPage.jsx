import React from 'react';

import AdsCard from '../Card/AdsCard';

const AdsPage = () => {

    const AddedProducts = [
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
            <section className='w-full flex items-center justify-center my-5'>
                <div className='w-10/12 flex items-center justify-center'>
                    <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                        {AddedProducts.map((item, index) => (
                            <AdsCard {...item} key={index} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdsPage