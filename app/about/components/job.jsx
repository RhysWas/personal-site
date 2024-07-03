import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Link from 'next/link';

export default function Job({ data }) {
    return (
        <article className='my-8'>
            <header>
                <h4 className='md:text-lg  font-bold flex flex-wrap'>
                    <Link href={data.link}>{data.company} </Link>
                    <p className='italic font-light'>
                    - {data.position}
                    </p>
                </h4>
                <p className='text-sm font-light'>{dayjs(data.start).format('MMMM YYYY')} - {data.end ? dayjs(data.end).format('MMMM YYYY') : 'PRESENT'}</p>
            </header>
            <div>
                {data.summary ? (
                <ul className='list-disc list-inside'>
                    {data.summary.map((sum) => (
                        <li key={sum}>{sum}</li>
                    ))}
                </ul>
                ) : null}
            </div>
        </article>
    )
}

Job.PropTypes = {
    data: PropTypes.shape({
        company: PropTypes.string.isRequired,
        postition: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        start: PropTypes.string.isRequired,
        end: PropTypes.string,
        summary: PropTypes.arrayOf(PropTypes.string.isRequired),
    }).isRequired,
};