import { Helmet } from "react-helmet-async";
import coverImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";


const OurMenu = () => {

    const [menu] = useMenu();

    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')


    return (
        <div>
            <Helmet>
                <title>Our Menu | Bistro Boss</title>
            </Helmet>
            {/* Main cover */}
            <Cover img={coverImg} title='Our Menu'></Cover>
            <SectionTitle
                subHeading={'Don not Miss'}
                heading={'Today offer'}
            ></SectionTitle>

            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>

            {/* category menu items */}
            <MenuCategory items={dessert} title={'dessert'} img={dessertImg}></MenuCategory>
            <MenuCategory items={soup} title={'soup'} img={soupImg}></MenuCategory>
            <MenuCategory items={salad} title={'salad'} img={saladImg}></MenuCategory>
            <MenuCategory items={pizza} title={'pizza'} img={pizzaImg}></MenuCategory>
        </div>
    );
};

export default OurMenu;