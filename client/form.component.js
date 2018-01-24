import React from 'react';

export default class FormComponent extends React.Component{
    render(){
        return (
            <form>
                Comments: <input type="text" /> 
                <input type="button" value="save" />
            </form>
        );
    }
}