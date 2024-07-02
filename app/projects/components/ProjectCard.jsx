'use client'
import { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function ProjectCard({ data }){
    const {title, category, year, desc, link, skills} = data;
    const [details, setDetails] = useState(false);

    // Would have to add a state to control the "flipping" of project cards
    return (
        // Need to specify the height down the line too
        <div className='container flex-none bg-white border-2 w-full md:w-1/5 md:shrink-0 h-48 p-3 shadow-lg mb-4'>
            <div className='flex justify-between'>
                <div>
                    <p className='text-sm'>{year}</p>
                </div>
                {link ? (
                    <div className='flex items-end'>
                        <Link href={link}>
                        <p className='text-sm hover:text-cyan-600 hover:underline'>Code</p>
                        </Link>
                    </div>
                ) : null }
            </div>
            {details ? (
                <div className='flex flex-col h-full pb-2'>
                    <div className='flex-grow'>
                        <p className='test-sm md:text-base'>{desc}</p>
                    </div>
                    <div className='flex justify-between mt-auto mb-2'>
                        <p className='italic text-base md:text-lg'>{title}</p>
                        <button className='place-self-end px-2 bg-red-300 rounded-full shadow-sm border-solid border-2 border-red-800' onClick={() => setDetails(false)}>Exit</button>
                    </div>
                </div>
            ) : (
                <div className='text-center py-8 h-full'>
                    <p className='text-xl'>{title}</p>
                    <div className='flex justify-center whitespace-normal overflow-hidden pb-3'>
                        {skills.map(skill => 
                            <p key={skill} className='text-xs px-1'>{skill}</p>
                        )}
                    </div>
                    <button className='mt-auto mb-3 px-2 bg-cyan-200 border-solid border-orange-400 border-2 shadow-sm rounded-full text-sm' onClick={() => setDetails(true)}>
                        See More
                    </button>
                </div>
            )}
        </div>
    );
};

ProjectCard.PropTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        link: PropTypes.string,
        skills: PropTypes.arrayOf(PropTypes.string.isRequired),
    }).isRequired,
};