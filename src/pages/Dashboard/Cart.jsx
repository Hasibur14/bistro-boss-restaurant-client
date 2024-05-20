import useCart from "../../hooks/useCart";


const Cart = () => {

    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    return (
        <div>
            <div className="flex justify-evenly p-8">
                <h2 className="text-5xl">Item: {cart.length}</h2>
                <h2 className="text-5xl">Total Price: {totalPrice}</h2>
                <button className="btn px-4 bg-[#D1A054] text-white hover:bg-yellow-500">PAY</button>
            </div>

            <div>
                <section className="container px-4 mx-auto">
                    <div className="flex items-center gap-x-3">
                        <h2 className="text-lg font-medium text-gray-800 dark:text-white">Total Item:</h2>

                        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">{cart.length}</span>
                    </div>

                    <div className="flex flex-col mt-6">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className="bg-[#D1A054] dark:bg-gray-800 text-white">
                                            <tr>
                                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400">
                                                    <div className="flex items-center gap-x-3">
                                                        <span>No</span>
                                                    </div>
                                                </th>
                                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400">
                                                    <div className="flex items-center gap-x-3">
                                                        <span>ITEM IMAGE</span>
                                                    </div>
                                                </th>
                                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400">
                                                    <div className="flex items-center gap-x-3">
                                                        <span>ITEM NAME</span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-2 py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400">
                                                    PRICE
                                                </th>

                                                <th scope="col" className=" py-3.5 text-sm font-normal text-left rtl:text-right text-white dark:text-gray-400">

                                                    ACTION
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                            {
                                                cart.map((item, index) => (
                                                    <tr key={item._id}>
                                                        <td className="px-4">
                                                            {index + 1}
                                                        </td>
                                                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">

                                                            <img className="object-cover w-10 h-10 rounded-full" src={item.image} alt="" />
                                                        </td>
                                                        <td>
                                                           {item.name}
                                                        </td>
                                                        <td>
                                                            $ {item.price}
                                                        </td>

                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                            <div className="flex items-center gap-x-6">
                                                                <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                        <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>

                            <span>
                                previous
                            </span>
                        </a>

                        <div className="items-center hidden lg:flex gap-x-3">
                            <a href="#" className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">1</a>
                            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</a>
                            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</a>
                            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">...</a>
                            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">12</a>
                            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">13</a>
                            <a href="#" className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">14</a>
                        </div>

                        <a href="#" className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                            <span>
                                Next
                            </span>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:-scale-x-100">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Cart;