import PropTypes from 'prop-types';
import FunFacts from './FunFacts';
import FreeTime from './freetime';

const Hobbies = ({ freetimes, funfacts }) => {

    return (
        <div>
            <h2 className="text-2xl text-center font-bold decoration-1 underline italic mb-4">Hobbies</h2>
            <p className='text-center'>Congrats on making it this far! Since you&#39;re here, here&#39;s a little more about me:</p>
            <div className='flex justify-around mt-6'>
                <div>
                    <h3 className='text-center font-bold'>How I spend my freetime</h3> 
                    <ul className='list-decimal'> 
                        {freetimes.map((freetime) => (
                            <FreeTime freetime={freetime} key={freetime}/>
                        ))
                        }
                    </ul>
                </div>
                <div>
                    <h3 className='text-center font-bold'>A Few Fun Facts</h3>
                    <ul className='list-decimal'>
                        {funfacts.map((funfact) => (
                            <FunFacts funfact={funfact} key={funfact}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

Hobbies.PropTypes = {
    freetime: PropTypes.arrayOf(PropTypes.string).isRequired,
    funfacts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Hobbies.defaultProps = {
    freetimes: [],
    funfacts: [],
};


export default Hobbies;