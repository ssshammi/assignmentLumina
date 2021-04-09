import React, { Component } from 'react'
import PropTypes from 'prop-types';


//class


class MovieComp extends Component {
    render() {
        return (
            < div >
                { this.props.omdbid}
                <MovieList id="1" />
                <MovieList id="2" />
                <MovieList id="3" />
            </div >
        )
    }
};

MovieComp.defaultProps = {
    omdbid: '1'
};
MovieComp.propTypes = {
    omdbid: PropTypes.string
}



const MovieList = (props) => {
    return (
        <div>
            General Movies {props.id}
        </div>
    )
}
MovieList.defaultProps = {
    id: '0'
};

export {
    MovieComp,
    MovieList
};
