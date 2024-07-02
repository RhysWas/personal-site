import PropTypes from 'prop-types';

export default function FunFacts({ funfact }){
    return (
        <li>
            {funfact.fact}
        </li>
    );
}

FunFacts.PropTypes = {
    funfact: PropTypes.string.isRequired,
};