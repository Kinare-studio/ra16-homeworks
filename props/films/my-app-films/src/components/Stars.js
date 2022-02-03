import Star from "./Star"
import React from 'react';
import PropTypes from 'prop-types';
import StarsModel from '../models/StarsModel';

export default function Stars({ count }) {


    if (count < 1 || count > 5 || typeof count !== 'number') {
        return (
            null
        )
    } else {
        return (
            <ul className="card-body-stars u-clearfix">
                <Star count={count} />
            </ul>
        )
    }
}

Stars.propTypes = {
    count: PropTypes.instanceOf(StarsModel).isRequired
}
Stars.propTypes = {
    count: PropTypes.number
}