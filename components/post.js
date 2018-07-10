import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Post extends Component {
    componentDidMount() {
        if (!this.props.post) {
            axios
                .get('https://jsonplaceholder.typicode.com/posts/5')
                .then(({ data }) => {
                    this.props.dispatch({
                        type: 'CHANGE_POST',
                        payload: data
                    });
                });
        }
    }

    render() {
        const { post } = this.props;
        return (
            <div>
                {post && <Fragment>
                    <h1>Post</h1>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </Fragment>}
            </div>
        );
    }
};

export default connect(({ post }) => ({ post }))(Post);
