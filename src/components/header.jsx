import React from 'react'

import { ReactComponent as Binance } from '../assets/icons/binance.svg'
import { ReactComponent as Square } from '../assets/icons/square.svg'
import { ReactComponent as DownArrow } from '../assets/icons/downArrow.svg'
import { ReactComponent as Question } from '../assets/icons/question.svg'
import { ReactComponent as Gear } from '../assets/icons/Gear.svg'
import { ReactComponent as DownArrowOutline } from '../assets/icons/downArrowOutline.svg'
import { ReactComponent as Close } from '../assets/icons/close.svg'

const Header = () => {
        return (
                <header className=' flex w-full flex-col'>
                        <div className='flex w-full  justify-between'>
                                <div className='flex h-[64px] pl-4 text-default-white'>
                                        <a href="binance.com/en" className='flex w-[120px] mx-2' >
                                                <Binance fill='rgb(240 185 11)' />
                                        </a>
                                        <div className='flex '>
                                                <div className='flex fill-[rgb(234,236,239)] w-6'>
                                                        <Square />
                                                </div>
                                                <div className='flex fill-[rgb(132,142,156)] w-4 hover:rotate-180 '>
                                                        <DownArrow />
                                                </div>
                                        </div>
                                        <div className='flex items-center mx-2 cursor-pointer'>
                                                <div className='flex hover:text-[rgb(240,185,11)]'>
                                                        Buy Crypto
                                                </div>
                                                <div className='flex fill-[rgb(132,142,156)] w-4  hover:rotate-180'>
                                                        <DownArrow />
                                                </div>
                                        </div>
                                        <div className='flex items-center mx-2 cursor-pointer'>
                                                <div className='flex hover:text-[rgb(240,185,11)]'>
                                                        Markets
                                                </div>
                                        </div>
                                        <div className='flex items-center mx-2 cursor-pointer'>
                                                <div className='flex hover:text-[rgb(240,185,11)]'>
                                                        Trades
                                                </div>
                                                <div className='flex fill-[rgb(132,142,156)] w-4  hover:rotate-180'>
                                                        <DownArrow />
                                                </div>
                                        </div>
                                        <div className='flex items-center mx-2 cursor-pointer'>
                                                <div className='flex hover:text-[rgb(240,185,11)]'>
                                                        Derivatives
                                                </div>
                                                <div className='flex fill-[rgb(132,142,156)] w-4  hover:rotate-180'>
                                                        <DownArrow />
                                                </div>
                                        </div>
                                        <div className='flex items-center mx-2 cursor-pointer'>
                                                <div className='flex hover:text-[rgb(240,185,11)]'>
                                                        Earn
                                                </div>
                                                <div className='flex fill-[rgb(132,142,156)] w-4  hover:rotate-180'>
                                                        <DownArrow />
                                                </div>
                                        </div>
                                        <div className='flex items-center mx-2 cursor-pointer'>
                                                <div className='flex hover:text-[rgb(240,185,11)]'>
                                                        Finance
                                                </div>
                                                <div className='flex fill-[rgb(132,142,156)] w-4  hover:rotate-180'>
                                                        <DownArrow />
                                                </div>
                                        </div>
                                        <div className='flex items-center mx-2 cursor-pointer'>
                                                <div className='flex hover:text-[rgb(240,185,11)]'>
                                                        NFT
                                                </div>
                                        </div>
                                </div>
                                <div className='flex items-center text-default-white'>
                                        <div className='flex items-center mx-2 cursor-pointer'>
                                                <div className='flex hover:text-[rgb(240,185,11)]'>
                                                        Login
                                                </div>
                                        </div>
                                        <div className='flex items-center mx-2 cursor-pointer px-2 h-8  bg-[rgb(252,213,53)] rounded hover:brightness-90 '>
                                                <div className='flex text-[rgb(24,26,32)]'>
                                                        Register
                                                </div>
                                        </div>
                                        <div className='flex items-center mx-2 cursor-pointer'>
                                                <div className='flex hover:text-[rgb(240,185,11)]'>
                                                        Downloads
                                                </div>
                                        </div>
                                        <div className='flex items-center mx-2 cursor-pointer'>
                                                <div className='flex hover:text-[rgb(240,185,11)]'>
                                                        English
                                                </div>
                                        </div>
                                        <div className='flex items-center mx-2 cursor-pointer'>
                                                <div className='flex border-r-2 h-4 border-[rgb(234,236,239)]'>
                                                </div>
                                        </div>
                                        <div className='flex items-center mx-2 cursor-pointer '>
                                                <div className='flex hover:text-[rgb(240,185,11)]'>
                                                        USD
                                                </div>
                                        </div>
                                        <div className='flex items-center mx-2 cursor-pointer'>
                                                <div className='flex'>
                                                        <Question className='w-5' />
                                                </div>
                                        </div>
                                        <div className='flex items-center mx-2 cursor-pointer'>
                                                <div className='flex'>
                                                        <Gear className='w-5' />
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className='flex bg-[#1f2025] w-full justify-center px-5'>
                                <div className='flex text-default-gray  text-xs w-full'>
                                        <div className='flex py-3 justify-between w-full pl-10'>
                                                <div className='flex hover:text-[rgb(240,185,11)]'>Learn & Trade ERN - $100,000 Rewards Up for Grabs!  (04-28)</div>
                                                <div className='flex hover:text-[rgb(240,185,11)]'>Binance Futures Launches Time-Weighted Average Price Trading Algorithm on API</div>
                                                <div className='flex hover:text-[rgb(240,185,11)]'>Buy PROM & More Directly Using Your Credit/Debit Card</div>
                                        </div>
                                        <div className='flex mx-6'>
                                                <DownArrowOutline className='flex w-6 rotate-90 mx-3' fill='rgb(132 142 156)' />
                                                <Close className='flex w-6 mx-3' fill='rgb(61,70,83)' />
                                        </div>
                                </div>
                        </div>
                </header>
        )
}

export default Header