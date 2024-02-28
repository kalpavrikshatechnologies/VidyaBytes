import React from 'react'
import Cards from './Cards'

function Facilities() {

    return (
        <div>
            <div className="mt-2 sm:mt-8">
                <div className='relative z-0 sm:mb-8'>
                    <img src="homebg.png" className='h-60 w-full object-cover' />
                    <div className='flex flex-wrap justify-center items-center'>
                        <h1 className='z-10 -mt-60 text-white font-bold text-sm sm:text-xl'>ᴏᴜʀ ꜰᴀᴄɪʟɪᴛɪᴇꜱ</h1>
                    </div>
                </div>

                <Cards />

            </div>
        </div>
    )
}

export default Facilities
