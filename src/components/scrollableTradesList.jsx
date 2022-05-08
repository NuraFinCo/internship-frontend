const ScrollableTradesList = ({ data }) => {
        // data = data[Math.floor(Math.random()*data.length)]
        return (
                <div className='flex w-full'>
                        <div className='flex w-full flex-col h-[276px] overflow-y-auto p-0 half-w-scroll'>
                                {
                                        data.map((data, index) => (
                                                <div key={index} className="flex py-1 px-4 ">
                                                        <div style={{ "flex": "3 1 0%" }}
                                                                className={`flex justify-start ${data.status === 'buy' ? "text-default-green" : "text-default-red"}`}  >
                                                                {data.price}
                                                        </div>
                                                        <div className='flex justify-center' style={{ "flex": "2 1 0%" }}>
                                                                <div className='flex '>{data.amount}</div>
                                                        </div>
                                                        <div className='flex justify-end' style={{ "flex": "2 1 0%" }}>
                                                                {data.time ?? "21:32:11"}
                                                        </div>
                                                </div>
                                        ))
                                }
                        </div>
                </div>
        )
}

export default ScrollableTradesList