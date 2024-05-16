import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../Menu/MenuItem/MenuItem";


const PopularMenu = () => {

   const [menu] = useMenu();
   const popular = menu.filter(item => item.category === 'popular');

    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //             setMenu(popularItems)
    //         })
    // }, [])


    return (
        <section className="my-20">
            <SectionTitle
                subHeading={'Check it Out'}
                heading={'from our menu'}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;