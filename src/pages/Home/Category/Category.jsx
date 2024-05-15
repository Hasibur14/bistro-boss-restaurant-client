import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import slider1 from '../../../assets/home/slide1.jpg';
import slider2 from '../../../assets/home/slide2.jpg';
import slider3 from '../../../assets/home/slide3.jpg';
import slider4 from '../../../assets/home/slide4.jpg';
import slider5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <div className='my-20'>
            <SectionTitle
                subHeading={"From 11.00am to 10.00pm"}
                heading={'Order online'}>
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h3 className='text-3xl uppercase text-center text-white font-semibold  -mt-24'>salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h3 className='text-3xl uppercase text-center text-white font-semibold  -mt-24'>salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h3 className='text-3xl uppercase text-center text-white font-semibold  -mt-24'>salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h3 className='text-3xl uppercase text-center text-white font-semibold  -mt-24'>salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h3 className='text-3xl uppercase text-center text-white font-semibold  -mt-24'>salads</h3>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Category;