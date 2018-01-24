import React from 'react';

export default class CustomButtonComponent extends React.Component{
    
    constructor(props){
        super();
        this.state = {
            count: props.initialValue
        };
        this.divStyle = {
            margin: "10px"
        };
    }

    incrementCount(){
        this.setState({count: this.state.count + 1});

        // this.setState((prevState) => {
        //     return {count: prevState.count + 1}
        // });
    }
    
    render(){
        return (
            <div style={this.divStyle}>
                <br/>
                <input className="btn btn-primary" type="button" 
                value={this.state.count} onClick={this.incrementCount.bind(this)}/>
                <br/>
            </div>
        );
    }
}