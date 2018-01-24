
import React from 'react';
import PropTypes from 'prop-types';

export default class CourseComponent extends React.Component {
    render(){
        return(
            <div>
                <h1> {this.props.index} </h1>
                <h1> course comp loaded for "{this.props.courseObj.name} {this.props.courseObj.last}" </h1>
                <p> Rent# {this.props.courseObj.price}</p>
            </div>
        );
    }
}

CourseComponent.propTypes = {
    //index: PropTypes.string // expctionh the index to be string, will throw a warning
    index: PropTypes.number
}

CourseComponent.defaultProps = {
    index:0,
    courseObj:{
        name:"unknown", last:"NA", price:0
    }
}