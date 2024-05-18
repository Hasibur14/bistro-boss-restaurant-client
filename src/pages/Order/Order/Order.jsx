import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderCoverImg from '../../../assets/shop/banner2.jpg';
import FoodCard from '../../../components/SectionTitle/FoodCard/FoodCard';
import useMenu from '../../../hooks/useMenu';
import Cover from '../../Shared/Cover/Cover';

const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
  

    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const  drinks = menu.filter(item => item.category === ' drinks')


    return (
        <div>
            <Cover
                img={orderCoverImg}
                title='Order Food'>
            </Cover>
            <div className='py-16'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-20 '>
                            {
                                salad.map(item => (
                                    <FoodCard key={item._id} item={item}></FoodCard>
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-20'>
                            {
                                pizza.map(item => (
                                    <FoodCard key={item._id} item={item}></FoodCard>
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-20'>
                            {
                                soup.map(item => (
                                    <FoodCard key={item._id} item={item}></FoodCard>
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-20'>
                            {
                                dessert.map(item => (
                                    <FoodCard key={item._id} item={item}></FoodCard>
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-20'>
                            {
                                drinks.map(item => (
                                    <FoodCard key={item._id} item={item}></FoodCard>
                                ))
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;