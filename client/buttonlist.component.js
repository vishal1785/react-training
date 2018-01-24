
import React from 'react';
import ReactDOM from 'react-dom';
import CustomButtonComponent from './custombutton.component'

export default class ButtonListComponent extends React.Component {

    constructor(){
        super();
        this.state = {buttonCounts: [ 10, 20, 30,  50 ]};
    }

    addItemHandler(){
        //access txt elmnt
        var txtValueFromInput = ReactDOM.findDOMNode(this.refs.txtValue);

        // set the state
        this.setState({
                buttonCounts: [...this.state.buttonCounts,+(txtValueFromInput.value)]
            });
    }

    render(){
        var listOfButtonsComponent = this.state.buttonCounts.map(function(val,index){
                return <CustomButtonComponent initialValue={val} key={index}/>
        });

        return(
            <div>
                <br/>
                Value: <input type="text" ref="txtValue"/>
                <input className="btn btn-success" type="button" value="Add"
                onClick={this.addItemHandler.bind(this)}/>
                { listOfButtonsComponent }
            </div>
        );
    }
}