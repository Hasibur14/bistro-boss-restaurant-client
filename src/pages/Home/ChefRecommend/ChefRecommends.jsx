import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ChefRecommends = () => {

    const [recommends, SetRecommends] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                SetRecommends(data)
            })
    }, [])


    return (
        <div className="my-20">
            <SectionTitle
                subHeading={'Should Try'}
                heading={'Chef ChefRecommends'}
            ></SectionTitle>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <div>
                        {
                            recommends.map(item =>
                                <SwiperSlide key={item._id}>
                                    <div className="max-w-xs rounded-md shadow-md bg-gray-50 dark:text-gray-800">
                                        <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                        <div className="flex flex-col justify-between p-6 space-y-8">
                                            <div className="space-y-2">
                                                <h2 className="text-3xl font-semibold tracking-wide">{item.name}</h2>
                                                <p className="dark:text-gray-800">{item.recipe}</p>
                                            </div>
                                            <button  className="flex items-center btn btn-outline ml-16 border-0 border-b-4 border-yellow-600 uppercase justify-center w-1/2 p-3 font-semibold tracking-wide rounded-md dark:bg-purple-600 dark:text-gray-50">add to card</button>
                                        </div>
                                    </div>
                                </SwiperSlide>)
                        }
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default ChefRecommends;