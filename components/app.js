import React from 'react';
import chrome from '../images/chrome.svg';
import android from '../images/android.svg';
import axios from 'axios';
import './style.css';

export default class App extends React.Component {
    state = {
        photo: null
    }

    componentDidMount() {
        if(!this.props.photo) {
            axios.get('https://jsonplaceholder.typicode.com/photos/5')
                .then(({data}) => {
                    this.setState({ photo: data });
                });
        } else {
            this.setState({ photo: this.props.photo });
        }
    }

    render() {
        const { photo } = this.state;
        return (
            <div>
                Static photos
                <br /> <br /> <br />
                <img src={chrome} onClick={() => alert('chrome')} />
                <img src={android} onClick={() => alert('android')} />
                <br /> <br /> <br />
                Online Photo
                <br /> <br /> <br />
                {photo && <img src={photo.url} />}
            </div>
        );
    }
}
