import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as NewsActions from '../actions/NewsActions';

class Post extends Component {
    render() {
        return (
            <div className="post">
                <h2 className="post_title">{this.props.post.title}</h2>
                <p className="post_message">{this.props.post.message}</p>
                <div className="control-buttons">
                    <button onClick={()=>this.props.dispatch({type: NewsActions.EDIT_NEWS,id:this.props.post.id})}> Edit</button>
                    <button onClick={()=>this.props.dispatch({type: NewsActions.DELETE_NEWS,id:this.props.post.id})}> Delete</button>
                </div>
            </div>
        );
    }
}

export default connect()(Post);