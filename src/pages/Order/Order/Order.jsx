import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderCoverImg from '../../../assets/shop/banner2.jpg';
import FoodCard from '../../../components/SectionTitle/FoodCard/FoodCard';
import useMenu from '../../../hooks/useMenu';
import Cover from '../../Shared/Cover/Cover';

const Order = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const { category } = useParams();
    console.log(category)

    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')


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
                                offered.map(item => (
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