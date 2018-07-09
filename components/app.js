import React from 'react';
import chrome from '../images/chrome.svg';
import android from '../images/android.svg';
import axios from 'axios';
import { connect } from 'react-redux';
import './style.css';

class App extends React.Component {
    componentDidMount() {
        if(!this.props.photo) {
            axios.get('https://jsonplaceholder.typicode.com/photos/5')
            .then(({ data }) => {
                this.props.dispatch({
                    type: 'CHANGE_PHOTO',
                    payload: data
                })
            });
        }
    }

    render() {
        const { photo } = this.props;
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

App = connect((state) => {
    const { photo } = state;
    return { photo };
})(App);

export default App;
