import featuredImg from '../../../assets/home/featured.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './featured.css';

const Featured = () => {
    return (
        <section className='feature-item bg-item bg-fixed rounded-md '>
            <div className='bg-slate-600 bg-opacity-60 text-white rounded-md'>
                <div className='p-4'>
                    <SectionTitle
                        subHeading='Check it out'
                        heading='Featured Item'>
                    </SectionTitle>
                </div>
                <div className='md:flex pt-20 pb-32 px-32 space-x-10 item-center justify-center'>
                    <div>
                        <img className='rounded-lg' src={featuredImg} alt="" />
                    </div>
                    <div className='space-y-3 justify-center md:mt-28'>
                        <p>May 16, 2024</p>
                        <h3 className='uppercase text-xl font-semibold'>Where cam i get some?</h3>
                        <p>Intrinsicly deliver functionalized experiences via value-added technologies. Seamlessly build state of the art bandwidth and standards compliant manufactured products. </p>
                        <button className='btn btn-outline border-0 border-b-4 uppercase bg-transparent text-white '>Read more</button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Featured;