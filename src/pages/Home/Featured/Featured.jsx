import featuredImg from '../../../assets/home/featured.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './featured.css';

const Featured = () => {
    return (
        <section className='feature-item'>
            <SectionTitle subHeading='Check it out' heading='Featured Item'></SectionTitle>
            <div className='flex py-20 px-32 space-x-10 item-center justify-center'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='space-y-3'>
                    <p>May 16, 2024</p>
                    <h3 className='uppercase text-xl font-semibold'>Where cam i get some?</h3>
                    <p>Intrinsicly deliver functionalized experiences via value-added technologies. Seamlessly build state of the art bandwidth and standards compliant manufactured products. </p>
                    <button className='btn uppercase bg-transparent text-white border-3 border-b'>Read more</button>
                </div>
            </div>
        </section>

    );
};

export default Featured;