import React, { useState } from 'react';
import Header from './components/header';
import OverView from './components/overView';
import OrderList from './components/orderList';
import Market from './components/Market';
import MarketTrades from './components/MarketTrades.jsx';

import { ReactComponent as TwoSideWindow } from './assets/icons/twoSideWindow.svg'
import { ReactComponent as BuyWindow } from './assets/icons/buyWindow.svg'
import { ReactComponent as SellWindow } from './assets/icons/sellWindow.svg'
import { ReactComponent as DownArrow } from './assets/icons/downArrow.svg'
import { ReactComponent as ThreeDots } from './assets/icons/threedots.svg'


import './App.css';

function App() {
        const [sides, setSides] = useState(0)
        const windowSides = [<TwoSideWindow className='flex w-6 cursor-pointer fill-[rgb(132,142,156)]' />, <BuyWindow className='flex w-6 cursor-pointer fill-[rgb(132,142,156)]' />, <SellWindow className='flex w-6 cursor-pointer fill-[rgb(132,142,156)]' />]

        return (
                <div className="  w-full bg-[#16191e] " >
                        <div className=''>
                                <Header />
                                <main className='flex pl-1.5 flex-col'>
                                        <div className='flex w-full'>
                                                <div className='flex flex-col w-full'> 
                                                        <OverView />
                                                        <div className='flex w-full'>
                                                                <div className='flex flex-col border-d min-w-[25%]'>
                                                                        <div className='flex justify-between p-3'>
                                                                                <div className='flex'>
                                                                                        {
                                                                                                windowSides.map((el, index) => (
                                                                                                        <div key={index} onClick={() => setSides(index)}
                                                                                                                className={`${index !== sides ? "brightness-50" : ""} ml-3`} >{el}</div>
                                                                                                ))
                                                                                        }
                                                                                        {/* <TwoSideWindow className='flex w-6 fill-[rgb(132,142,156)]' />
                                                                        <BuyWindow className='flex w-6 fill-[rgb(132,142,156)]' />
                                                                        <SellWindow className='flex w-6 fill-[rgb(132,142,156)]' /> */}
                                                                                </div>
                                                                                <div className='flex text-default-white'>
                                                                                        <div className='flex text-xs items-center cursor-pointer'>
                                                                                                0.01
                                                                                                <DownArrow className='flex w-4 fill-default-gray' />
                                                                                        </div>
                                                                                        <div className='flex'>
                                                                                                <ThreeDots className='w-4 text-gray-b' />
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                        <div className='flex text-xs text-default-gray font-medium justify-between px-4 pb-2'>
                                                                                <div className='flex'>Price(USDT)</div>
                                                                                <div className='flex'>Amount(BTC)</div>
                                                                                <div className='flex'>Total</div>
                                                                        </div>
                                                                        <OrderList />
                                                                </div>
                                                                <div className='flex flex-col w-full'>
                                                                        <div className=''></div>
                                                                        <div className='flex flex-col w-full text-default-gray'>
                                                                                <div className='flex justify-between w-full'>
                                                                                        <div className='flex w-full'>
                                                                                                <div className='flex px-6  py-4'>Spot</div>
                                                                                                <div className='flex px-6  py-4'>Cross 3x</div>
                                                                                                <div className='flex px-6  py-4'>Isolated 10x</div>
                                                                                        </div>
                                                                                        <ThreeDots className='w-3 text-gray-b' />
                                                                                </div>
                                                                                <div></div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className='flex w-1/4'>
                                                        <Market/>
                                                        
                                                </div>
                                        </div>
                                </main>
                        </div>
                </div>
        );
}

export default App;