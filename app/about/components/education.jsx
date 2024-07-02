import PropTypes from 'prop-types';

import Link from 'next/link';
import Image from 'next/image';


export default function Education({ data }){
    return (
        <div className='container'>
            <h2 className="text-2xl text-center font-bold decoration-1 underline italic mb-4">Education</h2>
            <div className='flex px-48'>
                {data.map((degree) => (
                    <div className='flex flex-wrap gap-4' key={`${degree.school}-${degree.degree}`}>
                        <Image src={degree.image} alt={degree.degree} width={70} height={30} />
                        <div>
                            <h4 className='text-xl'>{degree.degree}</h4>
                            <p className='text-sm italic'>{degree.minor} Minor</p>
                            <p><Link href={degree.link}>{degree.school}</Link>, {degree.year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

Education.propTypes = {
    data: PropTypes.shape({
        school: PropTypes.string.isRequired,
        degree: PropTypes.string.isRequired,
        minor: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
    }).isRequired,
}