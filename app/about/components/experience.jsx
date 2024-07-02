import Job from './job';
import PropTypes from 'prop-types';

export default function Experience({ data }){
    return (
        <div>
            <h2 className="text-2xl text-center font-bold decoration-1 underline italic mb-4">Experience</h2>
            <div>
                {data.map((job) => (
                    <Job
                    data={job}
                    key={`${job.name}-${job.position}`}
                    />
                ))}
            </div>
        </div>
    );
}

Experience.PropTypes = {
    data: PropTypes.shape({
        company: PropTypes.string.isRequired,
        postition: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        start: PropTypes.string.isRequired,
        end: PropTypes.string,
        summary: PropTypes.arrayOf(PropTypes.string.isRequired),
    }).isRequired,
};

Experience.defaultProps = {
    data: [],
};