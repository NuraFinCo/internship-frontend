import React from 'react'
import { ReactComponent as Lock } from '../assets/icons/lock.svg'
import { ReactComponent as Play } from '../assets/icons/play.svg'


const OverView = (props) => {
        return (
                <div className='flex border-solid border-[.1px] border-gray-b w-full'>
                        <div className='flex flex-col py-3 pl-5 pr-7'>
                                <h1 className='text-default-white font-semibold'>BTC/USDT</h1>
                                <div className='flex justify-center'>
                                        <Lock className='flex w-4 text-default-gray mx-1 hover:text-default-white ' />
                                        <div className='text-xs text-default-gray underline w-max'>Bitcoin price</div>
                                </div>
                        </div>
                        <div className='my-3 border-r border-gray-b'></div>
                        <div className='flex w-full justify-between'>
                                <div className='flex text-default-white items-center text-xs font-semibold '>
                                        <div className='flex flex-col font-semibold mx-4 w-full'>
                                                <h1 className='text-semibold text-base'>39,540.17</h1>
                                                <p className='flex font-semibold'>{"$" + "39,540.01"}</p>
                                        </div>
                                        <div className='flex flex-col mx-4 w-full'>
                                                <div className='flex text-default-gray py-1'>24h Change</div>
                                                <p className='flex w-max'>{"124.24 + 0.32%"}</p>
                                        </div>
                                        <div className='flex flex-col mx-4 w-full'>
                                                <div className='flex text-default-gray py-1'>24h High</div>
                                                <p className='flex w-max'>{"39,882.38"}</p>
                                        </div>
                                        <div className='flex flex-col mx-4 w-full'>
                                                <div className='flex text-default-gray py-1'>24h Low</div>
                                                <p className='flex w-max'>{"38,435.95"}</p>
                                        </div>
                                        <div className='flex flex-col mx-4 w-full'>
                                                <div className='flex text-default-gray py-1 w-max'>24h Volume(BTC)</div>
                                                <p className='flex w-max'>{"50,982.76"}</p>
                                        </div>
                                        <div className='flex flex-col mx-4 w-full'>
                                                <div className='flex text-default-gray py-1  w-max'>24h Volume(USDT)</div>
                                                <p className='flex w-max'>{"1,998,813,062.37"}</p>
                                        </div>
                                </div>
                                <div className='flex text-default-gray text-xs items-center mr-4'>
                                        <Play className='w-5' />
                                        Spot Tutorial
                                </div>
                        </div>
                </div>
        )
}

export default OverView