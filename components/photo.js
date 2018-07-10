import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Photo extends Component {
    componentDidMount() {
        if (!this.props.photo) {
            axios
                .get('https://jsonplaceholder.typicode.com/photos/5')
                .then(({ data }) => {
                    this.props.dispatch({
                        type: 'CHANGE_PHOTO',
                        payload: data
                    });
                });
        }
    }

    render() {
        const { photo } = this.props;
        return (
            <Fragment>
                {photo && <img src={photo.url} />}
            </Fragment>
        );
    }
}

export default connect(({ photo }) => ({ photo }))(Photo);
