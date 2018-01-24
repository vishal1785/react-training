
import React from 'react';

export default class PostDetailComponent extends React.Component {
    render(){
        return(
            <div>
                <h2> <li> ID: {this.props.postObj.id} </li> </h2>
                <p> Title: {this.props.postObj.title} </p>
                <p> Body: {this.props.postObj.body} </p>
                <hr/>
            </div>
        );
    }
}