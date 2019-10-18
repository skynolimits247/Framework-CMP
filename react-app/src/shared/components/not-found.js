import React, { Component } from 'react'
import './not-found.css';

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <div id="app1">
                <div>Err...404 [:(] </div>
                <div className="txt">
                    Uh..oh....looks like you're lost somewhere...<span className="blink">_</span>
                </div>
                </div>                
            </div>
        )
    }
}
