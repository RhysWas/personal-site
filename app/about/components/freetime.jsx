import freetime from "../../../public/data/freetime"
import PropTypes from 'prop-types';

export default function FreeTime({ freetime }){
    return (
        <li>
            {freetime.spent}
        </li>
    );
}

FreeTime.PropTypes = {
    freetime: PropTypes.string.isRequired,
};