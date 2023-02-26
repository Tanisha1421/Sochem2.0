import React from 'react'

const eventsCard = (props) => {
    return (
        <div className="bg-[url('/images/3.jpg')] w-[25rem] h-[18rem] sm:w-[25rem] sm:h-[18rem] lg:w-[30rem] lg:h-[18rem] flex text-center justify-center items-center m-auto bg-cover border-4 border-black rounded-lg" >

            <h1 className="flex text-center justify-center text-4xl font-bold text-[#F7FAFF] ">{props.title}</h1>

        </div >


    )
}

export default eventsCard