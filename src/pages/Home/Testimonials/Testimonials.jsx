import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useEffect, useState } from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";






const Testimonials = () => {

    const [reviews, serReviews] = useState([])

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                serReviews(data)
            })
    }, []);

    return (
        <div className='my-20'>
            <SectionTitle
                subHeading={'What our Client Say'}
                heading={'Testimonials'}>
            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='flex flex-col items-center mx-24 my-16 space-y-8'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={3}
                                readOnly
                            />
                            <BiSolidQuoteLeft className='text-9xl opacity-70' />
                            <p className=''>{review.details}</p>
                            <h2 className="text-2xl text-orange-500 font-semibold">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Testimonials;

