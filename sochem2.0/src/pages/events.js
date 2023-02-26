import React from 'react'
import EventsCarousel from '../components/eventsCarousel'
import Navbar from '@/components/navbar'
import SearchBar from '@/components/searchBar'
import EventsCard from '@/components/eventsCard'
import data from '../../data/data.json';

const events = () => {
    return (
        <div>
            <Navbar />
            <div className='bg-[#040D21] w-full '>
                <p className='font-medium flex text-[#F7FAFF] justify-center text-2xl sm:text-3xl lg:text-5xl'><p className='mt-20'>A Collection of <span className='text-[#2A6BFF]'>Nostalgic</span> Events!</p></p>
                <EventsCarousel />
            </div>
            <SearchBar />
            <div className='grid-cols-1 sm:grid-cols-2 grid m-auto justify-center lg:grid-cols-3 p-4 gap-4 auto-cols-max '>
                {data.eventsCard.map((i) => (
                    <EventsCard key={i.id} title={i.title} description={i.description} />
                ))}
            </div>
        </div >
    )
}

export default events