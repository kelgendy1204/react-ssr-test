import React from 'react';
import chrome from '../images/chrome.svg';
import android from '../images/android.svg';
import './style.css';

export default class App extends React.Component {
    componentDidMount() {
        alert('component did mount');
    }

    render() {
        return (
            <div>
                React Application
                <br /> <br /> <br />
                <img src={chrome} onClick={() => alert('chrome')} />
                <img src={android} onClick={() => alert('android')} />
            </div>
        );
    }
}
