import React from 'react';
import chrome from '../images/chrome.svg';
import android from '../images/android.svg';
import axios from 'axios';
import './style.css';

export default class App extends React.Component {
    state = {
        photo: null
    }

    constructor(props) {
        super(props);
        if(props.photo) {
            this.state = { photo: props.photo };
        } else {
            if(window.__photo__) {
                this.state = { photo: window.__photo__ };
                delete window.__photo__;
            } else {
                axios.get('https://jsonplaceholder.typicode.com/photos/5')
                    .then(({data}) => {
                        this.setState({ photo: data });
                    });
            }
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
