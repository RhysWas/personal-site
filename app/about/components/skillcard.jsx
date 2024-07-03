import PropTypes from 'prop-types';

import {skillsColor} from '../../../public/data/skills';

export default function SkillCard({ data }){
    const { name, type } = data;

    const colorMatch = skillsColor.find(item => item.type === type);

    return (
        <div className={`bg-[${colorMatch.color}] border-black self-center border-1 rounded-full p-2 `}>
            <p className='text-sm font-semibold md:text-base md:font-bold text-center'>{name}</p>
        </div>
    )
};

SkillCard.PropTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    }).isRequired,
};