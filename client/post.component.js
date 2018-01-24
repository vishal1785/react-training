import React from 'react';
import ReactDOM from 'react-dom';
import PostDetailComponent from './postdetail.component'

export default class PostsComponent extends React.Component{
    
    constructor(){
        super();
        this.postsData;
        this.divStyle = {
            margin: "20px"
        };
    }

    componentWillMount(){
        this.state = {
            posts: []
        };
    }

    componentDidMount(){
        $.get("https://jsonplaceholder.typicode.com/posts",(response) => {
            //this.setState({posts: response});
            this.postsData = response;
            console.log(this.postsData);
        })
    }

    addPostHandler(){
        var postIdVal = +(ReactDOM.findDOMNode(this.refs.postId).value);
        var itemFound = this.postsData.find(function(postItem) {
           return postIdVal === postItem.id;
        });

        //console.log(itemFound);
        if(itemFound){
            this.setState({ 
                posts: [...this.state.posts,this.postsData[postIdVal-1]] 
            });
        }
    }

    render(){

        var postsToBeRendered = this.state.posts.map(function(postItem,index){
            return <PostDetailComponent postObj={postItem} key={index}/>
        })

        return (
            <div style={this.divStyle}>
                Enter Post ID: <input type="text" ref="postId" /> 
                <input className="btn btn-success" type="button" value="Add Post"
                onClick={this.addPostHandler.bind(this)} style={this.divStyle}/>
                {postsToBeRendered}
            </div>
        );
    }
}