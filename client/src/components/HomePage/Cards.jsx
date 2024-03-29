import React from 'react';
import { Card } from 'flowbite-react';
import './Cards.css'

function Cards() {
    return (
       

        <div className=''>

            
            <div className=' md:flex md:flex-wrap gap-4  md:justify-center'>

                <Card href="#" className="card md:w-80 glass md:h-48 mb-2 xl:h-48 xl:w-80">
                    <div className='card-body'>
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 ">
                            High Speed Internet
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Experience lightning-fast internet speeds for seamless browsing, streaming, and gaming.
                        </p>
                    </div>
                </Card>

                <Card href="#" className="card md:w-80 glass md:h-48 mb-2 xl:h-48 xl:w-80">
                    <div className='card-body'>
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Flexible Study Hours
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Flexible study hours allow students to customize their learning schedules according to their individual needs and preferences.
                        </p>
                    </div>
                </Card>

                <Card href="#" className="card md:w-80 glass md:h-48 mb-2 xl:h-48 xl:w-80">
                    <div className='card-body'>
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Fully Air Conditions
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Comfortable seating provides a cozy and inviting space for relaxation, study, or socializing.
                        </p>
                    </div>
                </Card>

                <Card href="#" className="card md:w-80 glass md:h-48 mb-2 xl:h-48 xl:w-80">
                    <div className='card-body'>
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Subscription Management:
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Individuals can manage their subscriptions to e-library resources, ensuring access to the latest content and updates.
                        </p>
                    </div>
                </Card>

                <Card href="#" className="card md:w-80 glass md:h-48 mb-2 xl:h-48 xl:w-80">
                    <div className='card-body'>
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Comfortable Seating
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Comfortable seating provides a cozy and inviting space for relaxation, study, or socializing.
                        </p>
                    </div>
                </Card>

                <Card href="#" className="card md:w-80 glass md:h-48 mb-2 xl:h-48 xl:w-80">
                    <div className='card-body'>
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Books Availability
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            website offer access to a vast collection of digital resources including e-books, academic journals, research papers, magazines, and more.
                        </p>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Cards
