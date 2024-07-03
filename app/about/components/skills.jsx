'use client'
import { useState } from 'react';

import PropTypes from 'prop-types';
import SkillCard from './skillcard';

export default function Skills({ skills }){
    const [filters, setFilters] = useState({
        language: true,
        framework: true,
        tool: true,
        database: true,
        cloud: true,
    });

    // Set toggled filter to false on click
    const toggleFilter = (filter) => {
        setFilters({
            ...filters,
            [filter]: !filters[filter],
        }); 
    };

    const comparator = (a, b) => {
        if (a.name < b.name) return -1;
        return 1;
    };

    // List of skills based on if the box is checked and state of filters is true
    const filteredSkills = skills.filter(skill => {
        // Check the current state and type of the skill
        if (filters.framework && skill.type === 'framework') {
            return true;
        }
        if (filters.language && skill.type === 'language') {
            return true;
        }
        if (filters.tool && skill.type === 'tool') {
            return true;
        }
        if (filters.cloud && skill.type === 'cloud') {
            return true;
        }
        if (filters.database && skill.type === 'database') {
            return true;
        }
        // If filter is set to false do not include in the filtered results
        return false;
    }).sort(comparator);

    return (
        <div>
            <h2 className="text-2xl text-center font-bold decoration-1 underline italic mb-4">Skills</h2>
            <div className='md:flex flex-wrap md:justify-start mb-4'>
                <div>
                    <p className='md:text-lg font-semibold'>Filter: </p>
                </div>
                <div className='grid md:flex md:gap-4'>
                    <label className='text-xs md:text-base px-4 md:px-0 mt-1'>
                        {/* cyan-400 */}
                        <input type="checkbox" className='accent-cyan-400' onChange={() => toggleFilter('language')} checked={filters.language}/> Language
                    </label>
                    <label className='text-xs md:text-base px-4 md:px-0  mt-1'>
                        {/* Green-400 */}
                        <input type="checkbox" className='accent-green-400' onChange={() => toggleFilter('framework')} checked={filters.framework}/> Framework
                    </label>
                    <label className='text-xs md:text-base px-4 md:px-0  mt-1'>
                        {/* Orange-400 */}
                        <input type="checkbox" className='accent-orange-400' onChange={() => toggleFilter('tool')} checked={filters.tool}/> Tool
                    </label>
                    <label className='text-xs md:text-base px-4 md:px-0  mt-1'>
                        {/* Purple-400 */}
                        <input type="checkbox" className='accent-purple-400' onChange={() => toggleFilter('database')} checked={filters.database}/> Database
                    </label>
                    <label className="text-xs md:text-base px-4 md:px-0  mt-1">
                        {/* White */}
                        <input type="checkbox" className='accent-white' onChange={() => toggleFilter('cloud')} checked={filters.cloud}/> Cloud
                    </label>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 justify-evenly gap-6'>
                {filteredSkills.map((skill) => (
                    <SkillCard key={skill.name} data={skill} />
                ))}
            </div>
        </div>
    );
}

Skills.PropTypes = {
    skills: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    }).isRequired,
    colors: PropTypes.shape({
        color: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    }).isRequired,
};

Skills.defaultProps = {
    skills: [],
    colors: [],
};