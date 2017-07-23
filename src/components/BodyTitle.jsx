import React, { Component } from 'react';

class BodyTitle extends Component {
    render() {
        return (
            <div style={{marginBottom:"12px"}} className="row">
                <span className="col-9"> <b className="gt-demo-body-title"> {this.props.title} </b> </span>
                <span style={{textAlign:"right"}} className="col-3"> <a href={this.props.url}> View Source Code </a> </span>
                
            </div>
        );
    }
}

export default BodyTitle;