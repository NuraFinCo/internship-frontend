import React, { useEffect, useState } from 'react'
import MarketData from '../data/MarketData.json'
import { ReactComponent as Arrow } from '../assets/icons/arrow.svg'


const OrderList = (props) => {

        const [sellMarket, setSellMarket] = useState([])
        const [buyMarket, setbuyMarket] = useState([])

        function sortData() {
                MarketData.filter(e => e.status == "sell" ? setSellMarket(prev => [...prev, e]) : setbuyMarket(prev => [...prev, e]));
        }

        useEffect(() => {
                
                sortData();
        }, [])


        return (
                <div className='flex w-full'>
                        <div className='flex flex-col  w-full text-xs text-white-300 font-medium'>
                                {
                                        sellMarket.slice(0, 17).map((data, index) => (
                                                data.status === 'sell' &&
                                                <div key={index} className='flex relative ' style={{ "direction": "rtl" }} >
                                                        <div className={` w-full h-5 flex   bg-right bg-red-progressbar relative`} style={{ "width": data.amount.toFixed(1) >= 1.0 ? "100%" : data.amount.toFixed(1) * 100 }}></div>
                                                        <div className='flex flex-row-reverse  px-4 w-full leading-5 absolute ' >
                                                                <div className='flex text-default-red  justify-end' style={{ "flex": "1 1 0%" }}>{data.price.toLocaleString()}</div>
                                                                <div className='flex justify-start ' style={{ "flex": "1 1 0%" }} >{data.amount}</div>
                                                                <div className='flex  justify-start' style={{ "flex": "1 1 0%" }}>{data.total.toLocaleString()}</div>
                                                        </div>
                                                </div>
                                        ))
                                }

                                <div className='flex justify-between text-xs px-4'>
                                        <div className='flex items-center'>
                                                <div className='flex text-lg'>
                                                        {38557.35.toLocaleString()}
                                                        <Arrow className='w-4' />
                                                </div>
                                                <div className='flex ml-2 text-default-gray'>
                                                        {"$" + 38789.17.toLocaleString()}
                                                </div>
                                        </div>
                                        <div className='flex text-default-gray items-center'>
                                                More
                                        </div>
                                </div>

                                {
                                        buyMarket.slice(0, 17).map((data, index) => (
                                                data.status === 'buy' &&
                                                <div key={index} className='flex relative ' style={{ "direction": "rtl" }} >
                                                        <div className={` w-full h-5 flex   bg-right bg-green-progressbar relative`} style={{ "width": data.amount.toFixed(1) >= 1.0 ? "100%" : data.amount.toFixed(1) * 100 }}></div>
                                                        <div className='flex flex-row-reverse  px-4 w-full leading-5 absolute ' >
                                                                <div className='flex text-default-green  justify-end' style={{ "flex": "1 1 0%" }}>{data.price.toLocaleString()}</div>
                                                                <div className='flex justify-start ' style={{ "flex": "1 1 0%" }} >{data.amount}</div>
                                                                <div className='flex  justify-start' style={{ "flex": "1 1 0%" }}>{data.total.toLocaleString()}</div>
                                                        </div>
                                                </div>
                                        ))
                                }
                        </div>
                </div>
        )
}

export default OrderList