
import React from 'react';

export default class ProductComponent extends React.Component {
    constructor(){
        super();
        this.divStyle = {
            width: "100px",
            height: "100px"
        };
    }
    render(){
        return(
            <div>
                <h2> Product: {this.props.prodObj.prodname} </h2>
                <img src={this.props.prodObj.imgURL} style={this.divStyle}/>
                <p> Price: {this.props.prodObj.price} | Quantity: {this.props.prodObj.qty} | Stocks: {this.props.prodObj.stocks}</p>
                <hr/>
            </div>
        );
    }
}