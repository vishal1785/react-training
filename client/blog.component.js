import React from 'react';
import FormComponent from './form.component'
import CommentComponent from './comment.component'

export default class BlogComponent extends React.Component{
    render(){
        return (
            <div>
                <FormComponent />
                <hr/>
                <CommentComponent />
            </div>
        );
    }
}