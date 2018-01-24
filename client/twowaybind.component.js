import React from 'react';
import ReactDOM from 'react-dom';

export default class TwoWayBindComponent extends React.Component{
    
    constructor(props){
        super();
        console.log(' constructor called');
    }

    componentWillMount(){
        this.state = {
            courseName: ''
        };
        console.log(' componentWillMount called');
    }

    componentDidMount(){
        console.log(' componentDidMount called');
    }

    shouldComponentUpdate(){
        console.log(' shouldComponentUpdate called');
        return true;
    }
    
    componentWillUpdate(){
        console.log(' componentWillUpdate called');
    }

    componentDidUpdate(){
        console.log(' componentDidUpdate called');
    }

    componentWillUnmount(){
        console.log(' componentWillUnmount called');
    }
    
    onChangeHandler(){
        var inputVal = ReactDOM.findDOMNode(this.refs.inputValue);
        this.setState({courseName: inputVal.value});
    }
    
    render(){
        console.log(' render called');
        return (
            <div style={this.divStyle}>
                <br/>
                Course: <input type="text" ref="inputValue" onChange={this.onChangeHandler.bind(this)}/>
                
                <label> {this.state.courseName} </label>
            </div>
        );
    }
}