import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";



const MenuCategory = ({ items, title, img }) => {
    console.log(items)
    return (
        <div className="pt-8">
            {
                title && <Cover  img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 mt-16 my-16">
                {
                    items.map(item => (
                        <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>
                    ))
                }
            </div>
            <Link to={`/order/${title}`}>
            <button className="flex w items-center btn btn-outline ml-16 border-0 border-b-4 border-yellow-600 uppercase justify-center  p-3 font-semibold tracking-wide rounded-md dark:bg-purple-600 dark:text-gray-50">ORDER NOW</button>
            </Link>
        </div>
    );
};

export default MenuCategory;