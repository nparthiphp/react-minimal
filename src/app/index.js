import React, {Component} from 'react';
import {render} from 'react-dom';
import './css/style.css';

class ReactMinimal extends Component{
    render(){
        return <div>
            <h1 className="heading">React Minimal</h1>
            <p>React minimal is a simple boiler plate code</p>
        </div>
    }
}

render(<ReactMinimal/>, document.getElementById('app'));