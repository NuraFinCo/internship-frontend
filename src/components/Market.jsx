import React, { useEffect, useState } from 'react'
import ScrollableDataList from './scrollableCoinsList'
import ScrollableTradesList from './scrollableTradesList'

import tradeData from '../data/MarketData.json'
import { ReactComponent as Search } from '../assets/icons/search.svg'
import { ReactComponent as Star } from '../assets/icons/star.svg'

const marketList = ["BUSD", 'USDT', 'BNB', 'BTC', 'ALTS', 'FIAT', 'Zones']

const Market = () => {

        const marketCoinsUSD = Array(20).fill().map(e => ({
                coinId: parseInt(Math.floor(Math.random() * (500 - 100 + 1) + 100)),
                inPrice: "USDT",
                symb: "BTC",
                price: parseInt(Math.floor(Math.random() * (38795 - 38780 + 1) + 38780)) + parseFloat(Math.random().toFixed(2)),
                changes: (Math.random() * (5.9 - -5.4 + 1) + -5.4).toFixed(2),
                isFavo : false
        }))
        // console.log(marketCoinsUSD);

        const [marketTab, setMarketTab] = useState(1)
        const [tradeTab, setTradeTab] = useState(0)
        const [marketData, setMarketData] = useState([])

        useEffect(() => {
                setMarketData(marketCoinsUSD)
        }, [])

        return (
                <div className='flex pt-1 w-full text-default-gray font-medium border-d h-fit '>
                        <div className="flex flex-col w-full">
                                <div className='flex p-4 flex-col w-full'>
                                        <div className='flex bg-gray-100 w-full rounded-md mb-3'>
                                                <Search className='w-5 mx-2' />
                                                <input type="text" className='bg-gray-100 focus:outline-none  placeholder:text-xs text-default-white h-6 text-xs' placeholder='Search' />
                                        </div>
                                        <div className='flex'>
                                                <Star className={`w-4 ${ 7 === marketTab && " text-default-gold"}} `}  onClick={()=>setMarketTab(7)} />
                                                <div className='flex  text-xs'>
                                                        {
                                                                marketList.map((el, index) => (
                                                                        <div key={index} onClick={()=>setMarketTab(index)}
                                                                        className={`flex p-1 uppercase select-none cursor-pointer ${index === marketTab && " text-default-gold"}`}>{el}</div>
                                                                ))
                                                        }
                                                </div>
                                        </div>
                                </div>
                                <div className='flex w-full flex-col text-xs'>
                                        <div className='flex justify-between px-4'>
                                                <div>Pair</div>
                                                <div className=' pl-14'>Price</div>
                                                <div>Changes</div>
                                        </div>

                                        <ScrollableDataList data={marketData} />
                                </div>
                                <div className='flex w-full flex-col text-xs pb-4 border-d border-x-0 border-b-0'>
                                        <div className='flex px-4  text-sm py-4 '>
                                                <div onClick={()=>setTradeTab(0)} className={`${tradeTab === 0 && "text-default-gold"} cursor-pointer`}>Market Trades</div>
                                                <div onClick={()=>setTradeTab(1)} className={`${tradeTab === 1 && "text-default-gold"} pl-7 cursor-pointer`}>My Trades</div>
                                        </div>
                                        <div className='flex justify-between px-4'>
                                                <div>Price(USDT)</div>
                                                <div>Amount(BTC)</div>
                                                <div>Time</div>
                                        </div>
                                        <ScrollableTradesList data={tradeData} />
                                </div>
                        </div>
                </div>
        )
}

export default Market