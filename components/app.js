import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import chrome from '../images/chrome.svg';
import android from '../images/android.svg';
import './style.css';
import Photo from './photo';
import Home from './home';
import Post from './post';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Static photos</h2>
                <br /> <br /> <br />
                <img src={chrome} onClick={() => alert('chrome')} />
                <img src={android} onClick={() => alert('android')} />
                <br /> <br /> <br />
                <h2>Tabs</h2>
                <br /> <br /> <br />
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/photo">Photo</Link>
                        </li>
                        <li>
                            <Link to="/post">Post</Link>
                        </li>
                    </ul>

                    <hr />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/photo" component={Photo} />
                        <Route path="/post" component={Post} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
