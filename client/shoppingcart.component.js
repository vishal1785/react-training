
import React from 'react';
import ProductComponent from './product.component.js'

export default class ShoppingCartComponent extends React.Component {

    constructor(){
        super();

        this.productsList = [
            {prodname:"Apple iPhone", qty:5, price:80000, stocks:50 , imgURL:"http://cdn.qatarbestdeals.com/media/catalog/product/cache/1/thumbnail/200x/602f0fa2c1f0d1ba5e241f914e856ff9/i/p/iphone_7_red_1_3.png"},
            {prodname:"Samsung S8", qty:7, price:55000, stocks:30 , imgURL:"https://content2.onliner.by/catalog/device/200x200/1549fa61f79d3f097818200800b3c6b5.jpeg"},
            {prodname:"OPPO S6", qty:2, price:35000, stocks:20 , imgURL:"http://www.wholesale-iphone-6.com/bmz_cache/9/9d62cfe442d4935075b0345a14432730.image.200x200.png"},
            {prodname:"Redmi 5A", qty:15, price:15000, stocks:70 , imgURL:"http://www.chinasmartphonereview.com/wp-content/uploads/2017/12/xiaomi-redmi-5a-featured-pictures.png"},
            {prodname:"Google Pixel", qty:10, price:45000, stocks:10 , imgURL:"https://www.1800customerservicenumber.com/wp-content/uploads/2017/11/google-pixel.jpg"}
        ];
    }

    render(){
        var listOfProductComponent = this.productsList.map(function(products,index){
                return <ProductComponent prodObj={products}/>
        });

        return(
            <div>
                { listOfProductComponent }
            </div>
        );
    }
}